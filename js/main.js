const KEY = 'eb6882012e9abe0610f6e7d588edd9ef';
const URL = 'https://api.openweathermap.org/data/2.5/';
const DEGREE = '273.15';

const area = document.getElementById('area');
const temperature = document.getElementById('temperature');
const detail = document.getElementById('detail');
const icon = document.getElementById('icon');
const description = document.getElementById('description');


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if(evt.keyCode == 13){
        getResult(searchbox.value);
    }
}

function getResult (query) {
    fetch(`${URL}weather?q=${query}&units=metric&APPID=${KEY}`)
    .then(weather => {
        return weather.json();
    })
    .then(data => {
        console.log(data);
        area.innerHTML = `${data.name}, ${data.sys.country}`;
        temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
        detail.innerHTML = data.weather[0].main;
        description.innerHTML = '"'+data.weather[0].description+'"';
        const Icon = data.weather[0].icon;
        icon.src = 'http://openweathermap.org/img/wn/'+Icon+'@2x.png';
    })
}

// const area = document.getElementById('area');
// const temperature = document.getElementById('temperature');
// const detail = document.getElementById('detail');
// const icon = document.getElementById('icon');
// const description = document.getElementById('description');



// function displayResult (weather) {
//     console.log(weather);
//     let area = document.querySelector('#area');
//     area.innerText = `${weather.name}, ${weather.sys.country}`;
//     temperature.innerHTML = Math.round(weather.main.temp);
//     detail.innerHTML = weather.weather[0].main;
//     description.innerHTML = '"'+weather.weather[0].description+'"';
//     const Icon = weather.weather[0].icon;
//     icon.src = 'http://openweathermap.org/img/wn/'+Icon+'@2x.png';
// }