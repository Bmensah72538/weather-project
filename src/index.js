import { buildUI } from './UI'

async function fetchWeather (query) {
    const weatherJson = await fetch(query);
    const weatherData = await weatherJson.json();
    buildUI.displayWeather(weatherData);
    console.log(weatherData)
    return weatherData;
}
function pullWeather (location) {
    if(typeof location !== 'string') {
        return 'Error, not a string';
    }
    let query = `https://api.weatherapi.com/v1/current.json?key=71101254b6f34180943212833231608&q=${location}`;
    fetchWeather(query);
}

let currentWeather = pullWeather('london');

window.onload = () => {
    console.log(currentWeather);
    searchInit();
}

function searchInit() {
let searchButton = document.getElementsByClassName('search-button')[0];
searchButton.addEventListener('click', (e) => {
    console.log(e);
    let query = document.getElementById('search-input').value;
    pullWeather(query);
    console.log(query);
    
})
}