const { Router } = require('express'); //import

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController();

notesRoutes.get('/', notesController.listNotes);
notesRoutes.post('/:user_id', notesController.createNotes);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete)


module.exports = notesRoutes;