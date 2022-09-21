const { Router } = require('express'); //import

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.createNotes);

module.exports = notesRoutes;