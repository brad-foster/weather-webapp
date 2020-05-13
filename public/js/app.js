const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')
const messageThree = document.querySelector('#message-three')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    
    const location = search.value
    const forecastUrl = '/weather?address=' + location

    fetch(forecastUrl).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = ''

            if (data.error) {
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.weather.forecast
                messageThree.textContent = data.weather.windInformation
            }
        })
    })
})