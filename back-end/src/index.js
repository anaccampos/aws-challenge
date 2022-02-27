const express = require('express')
const connection = require('./database/db')
const routes = require('./routes')

const app = express()

app.use(express.json())

connection.sync(() => console.log('Banco de dados conectado'))

app.listen(3000, () => console.info(`App listening in port 3000`))

routes(app);

module.exports = app;
