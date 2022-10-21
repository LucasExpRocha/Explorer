const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite');

class UsersController {
 /* 
    Index - Get para listar vários registros.
    Show - Get para exibir um registro especifico
    Create - Post para criar um registro
    Update - Put para atualizar um registro
    Delete - Delete para remover um registro
 */
    async createUser (request, response) {
        const { name, email, password } = request.body

        if(!name) {
            throw new AppError("Nome é obrigatório.")
        }

        const database = await sqliteConnection();
        
        const checkUserExist = await database.get(`SELECT * FROM users WHERE email = (?)`, [email])

        if(checkUserExist) {
            throw new AppError("Este e-mail já está cadastrado!")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

    
        return response.status(201).json('Criado com sucesso')
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

        console.log(name)

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
            updated_at = DATETIME('now')
            WHERE id = ?
        `, [user.name, user.email, user.password, id]);

        return response.json()

    }
}

module.exports = UsersController;