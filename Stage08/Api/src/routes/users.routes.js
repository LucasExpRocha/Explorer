const { Router } = require('express'); //import
const userRoutes = Router()

const UsersController = require('../controllers/UsersController')
const userController = new UsersController();

function myMiddleware(request, response, next) {
    if (!request.body.isAdmin) {
        return response.json({message: "user is not an administrator"})
    }

    next();
}

userRoutes.post('/', myMiddleware, userController.createUser)

module.exports = userRoutes;