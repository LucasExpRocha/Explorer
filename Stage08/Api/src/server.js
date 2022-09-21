require("express-async-errors")

const express = require('express'); //import
const app = express(); //init express

const migrationsRun = require("./database/sqlite/migrations")
const routes = require('./routes');
const AppError = require('./utils/AppError')

app.use(express.json());

app.use(routes)

migrationsRun();

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ 
            status: "error",
            message: error.message, 
        });
    }

    console.error(error)

    return response.status(500).json({ 
        status: "error",
        message: "Internal Server Error", 
    });
})

const PORT = 4040;
app.listen(PORT, () => {console.log(`Server runing on → http://localhost:${PORT}/`)})