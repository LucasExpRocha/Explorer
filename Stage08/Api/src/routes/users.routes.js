const { Router, response } = require('express');
const multer = require('multer');

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const uploadConfig = require('../configs/upload')

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER);

const userController = new UsersController();
const userAvatarController = new UserAvatarController();

userRoutes.post('/', userController.createUser);
userRoutes.put('/', ensureAuthenticated, userController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes;