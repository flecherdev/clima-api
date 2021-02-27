const express = require('express')
const app = express()

const weatherApiRouter = require('./routes/api/weather-router')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send('Hello')
})

weatherApiRouter(app)

const server = app.listen(3000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
})