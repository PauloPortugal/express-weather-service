const path    = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
app.use(express.static(path.join(__dirname, '../public')));
const viewsPath = path.join(__dirname, '../src/views')
const partialsPath = path.join(__dirname, '../src/views/partials')

// Setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Paulo Monteiro'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        author: 'Paulo Monteiro'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        author: 'Paulo Monteiro',
        helpText: 'This is some helpful text.'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404 - Page not found',
        author: 'Paulo Monteiro'
    })
})

app.listen(3000, () => {
    console.log('The server is up on http://localhost:3000')
})