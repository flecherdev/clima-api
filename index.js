const express = require('express')
const app = express()
const { config } = require('./config') 
const weatherApiRouter = require('./routes/api/weather-router')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send('Hello')
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

weatherApiRouter(app)

const server = app.listen(config.port ? config.port : 3000, () => {
    console.log(`Listening http://localhost:${server.address().port}`)
})