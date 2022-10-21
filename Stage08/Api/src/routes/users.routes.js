const { Router } = require('express'); //import

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const userRoutes = Router()

const userController = new UsersController();

userRoutes.post('/', userController.createUser);
userRoutes.put('/:id', userController.update);

module.exports = userRoutes;