const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class NotesController {
    async createNotes(request, response) {
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

        const note_id = await knex("movieNotes").insert({
            title, 
            description,
            rating,
            user_id
        })

        const tagsInsert = tags.map(name => {
            return {
                note_id: note_id,
                name: name,
                user_id: user_id
            }
        })

        console.log(tagsInsert)

        await knex("movieTags").insert(tagsInsert);

        response.json();
    }

    async show (request, response) {
        const { id } = request.params;

        if(!id) {throw new AppError('Informe uma tag')}

        const note = await knex("movieNotes").where({ id }).first();
        const tags = await knex("movieTags").where({note_id: id}).orderBy("name")

        return response.json({
            ...note,
            tags    
        });
    }

    async delete (request, response) {
        const { id } = request.params;

        await knex("movieNotes").where({id}).delete()

        return response.json('Deleted')
    }

    async listNotes (request, response) {
        const {user_id, title, tags } = request.query;

        let notes;

        if(!user_id) {throw new AppError('Falta informação para pesquisa')}
        
        if(tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());

            notes = await knex("movieTags")
            .select(["movieNotes.id", "movieNotes.title", "movieTags.note_id"])
            .where("movieNotes.user_id", user_id)
            .whereLike("movieNotes.title", `%${title}%`)
            .whereIn("name", filterTags)
            .innerJoin("movieNotes", "movieNotes.id", "movieTags.note_id")
            .orderBy("movieNotes.title")
        } else {
            notes = await knex("movieNotes").where({ user_id }).whereLike("title", `%${title}%`)
        }


        const userTags = await knex("movieTags").where({ user_id })
        
        const noteWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id)

            return {
                ...note,
                tags: noteTags
            }
        })

        return response.json(noteWithTags)
    }
}

module.exports = NotesController;
