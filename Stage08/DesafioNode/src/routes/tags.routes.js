const { Router } = require('express'); //import

const TagsController = require('../controllers/movieTagsController')

const tagsRoutes = Router()

const tagsController = new TagsController();

tagsRoutes.get('/:user_id', tagsController.index);


module.exports = tagsRoutes;