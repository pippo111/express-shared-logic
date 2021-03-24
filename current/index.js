const express = require('express')
const path = require('path')

const routes = require('./routes')
const migratedRoutes = require('../marketing/routes')

const app = express()
const port = 10010

app.set('view engine', 'ejs');

app.set('views', [path.join(__dirname, '..', 'views'), path.join(__dirname, '..', 'marketing', 'views')])

app.use('/', migratedRoutes)
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
