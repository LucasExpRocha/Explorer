const { Router } = require('express')

const SessionController = require('../controllers/SessionController')

const sessionController = new SessionController()

const sessionRoutes = Router()

sessionRoutes.post("/", sessionController.create)

module.exports = sessionRoutes;