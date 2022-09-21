const { Router } = require('express'); //import

const UsersController = require('../controllers/UsersController')

const userRoutes = Router()

const userController = new UsersController();

/* function myMiddleware(request, response, next) {
    if (!request.body.isAdmin) {
        return response.json({message: "user is not an administrator"})
    }

    next();
}
 */
userRoutes.post('/', userController.createUser);
userRoutes.put('/:id', userController.update);

module.exports = userRoutes;