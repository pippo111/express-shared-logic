const express = require('express')
const path = require('path')

const routes = require('./routes')

const app = express()
const port = 10012

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
