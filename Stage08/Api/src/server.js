const express = require('express'); //import
const routes = require('./routes');
const app = express(); //init express
const PORT = 4040;

app.use(express.json());

app.listen(PORT, () => {console.log(`Server runing on → http://localhost:${PORT}/`)})

app.use(routes)