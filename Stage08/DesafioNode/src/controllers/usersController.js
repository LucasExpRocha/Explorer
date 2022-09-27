const { hash, compare } = require('bcryptjs')
const knex = require("../database/knex")
const AppError = require('../utils/AppError')

class UsersController {
    async create (request, response) {
        const { userName, email, password, avatar } = request.body

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
            password: hashedPassword,
        })

    
        response.status(201).json('Criado com sucesso')
    }

    async update (request, response) {
        const {name, email, password, avatar ,old_password} = request.body;
        const { id } = request.params;

        const user = await knex("users").where("id", "=", id)

        if (!user) {
            throw new AppError("Usuario não encontrado");
        }

        const userWithUpdatedEmail = await knex("users").where("email", "=", email)

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso!")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user[0].password)

            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere");
            }

            user.password = await hash(password, 8)
        }

        await knex('users').where('id', '=', id).update({
            userName: user.name,
            email: user.email,
            password: user.password,
            avatar: avatar,
            updated_at: knex.fn.now()
        })

        return response.json('Updated sucessfully')

    }
}

module.exports = UsersController;