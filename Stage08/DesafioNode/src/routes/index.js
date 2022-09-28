const { Router } = require('express')
const routes = Router();

const usersRouter = require('./users.routes')
routes.use("/users", usersRouter);

const notesRouter = require('./notes.routes')
routes.use("/notes", notesRouter);

const tagsRoutes = require('./tags.routes')
routes.use("/tags", tagsRoutes);

module.exports = routes;