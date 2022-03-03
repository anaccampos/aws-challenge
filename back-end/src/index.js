const express = require('express')
const connection = require('./database/db')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json())

connection.sync()

app.listen(3000, () => console.info(`App listening in port 3000`))

routes(app);

module.exports = app;
