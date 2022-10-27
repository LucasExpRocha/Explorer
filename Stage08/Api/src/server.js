require("express-async-errors")

const express = require('express');
const cors = require('cors');

const migrationsRun = require("./database/sqlite/migrations")
const routes = require('./routes');
const AppError = require('./utils/AppError')
const uploadConfig = require("./configs/upload")

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

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