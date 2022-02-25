const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.listen(3000, () => console.info(`App listening in port 3000`))

module.exports = app;
