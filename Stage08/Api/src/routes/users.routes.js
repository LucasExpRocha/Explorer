const { Router, response } = require('express');
const multer = require('multer');

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const uploadConfig = require('../configs/upload')

const userRoutes = Router()
const upload = multer(uploadConfig.multer);

const userController = new UsersController();

userRoutes.post('/', userController.createUser);
userRoutes.put('/', ensureAuthenticated, userController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename);
    res.json()
})

module.exports = userRoutes;