console.log('Client side js file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    const location = search.value
    const forecastUrl = 'http://localhost:3000/weather?address=' + location

    fetch(forecastUrl).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = ''

            if (data.error) {
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})