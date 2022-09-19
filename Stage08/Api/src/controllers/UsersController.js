class UsersController {
 /* 
    Index - Get para listar vários registros.
    Show - Get para exibir um registro especifico
    Create - Post para criar um registro
    Update - Put para atualizar um registro
    Delete - Delete para remover um registro
 */
    createUser (request, response) {
        const { name, email, cidade } = request.body
    
        response.json({name, email, cidade})
    }
}

module.exports = UsersController;