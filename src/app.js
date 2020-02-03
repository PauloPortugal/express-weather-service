const path     = require('path')
const express  = require('express')
const hbs      = require('hbs')
const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

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
    if (!req.query.address) {
        return res.send('Please submit an address')
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) return res.send({'error': error})
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) return res.send({ 'error': error })

            res.send({
                'location': location,
                'data': forecastData,
                'address': req.query.address
            })
        })    
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404 - Page not found',
        author: 'Paulo Monteiro'
    })
})

app.listen(port, () => {
    console.log(`The server is up on http://localhost:${port}`)
})