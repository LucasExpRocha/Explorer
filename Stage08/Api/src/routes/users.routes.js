const { Router } = require('express'); //import
const userRoutes = Router()

const UsersController = require('../controllers/UsersController')
const userController = new UsersController();

userRoutes.post('/', userController.createUser)

module.exports = userRoutes;