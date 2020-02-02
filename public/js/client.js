const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorElem = document.querySelector('#error')
const locationElem = document.querySelector('#location')
const forecastSummaryElem = document.querySelector('#forecastSummary')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    errorElem.textContent = ''
    locationElem.textContent = ''
    forecastSummaryElem.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((res) => {
            if (res.error) {
                errorElem.textContent = res.error
            } else {
                locationElem.textContent = res.location
                forecastSummaryElem.textContent = res.data
            }
        })
    })
})