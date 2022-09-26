const { hash, compare } = require('bcryptjs')
const knex = require("../database/knex")
const AppError = require('../utils/AppError')

class UsersController {
    async create (request, response) {
        const { userName, email, password } = request.body

        if(!userName) {
            throw new AppError("Nome é obrigatório.")
        }
        console.log(email)

        const checkUserExist = await knex("users").where({ email })
        
        checkUserExist.map(user => {
            if(user.email) {
                throw new AppError("Este e-mail já está cadastrado!")
            }
        })


        const hashedPassword = await hash(password, 8)

        await knex("users").insert({
            userName, 
            email, 
            password: hashedPassword})

    
        response.status(201).json('Criado com sucesso')
    }

    async update (request, response) {
        const {name, email, password, old_password} = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if (!user) {
            throw new AppError("Usuario não encontrado");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso!")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere");
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            password = ?,
            avatar = ?,
            updated_at = DATETIME('now')
            WHERE id = ?
        `, [user.name, user.email, user.password, user.avatar, id]);

        return response.json()

    }
}

module.exports = UsersController;