const { Router } = require('express'); //import

const UsersController = require('../controllers/usersController')

const userRoutes = Router()

const userController = new UsersController();

userRoutes.post('/', userController.create);
userRoutes.put('/:id', userController.update);

module.exports = userRoutes;