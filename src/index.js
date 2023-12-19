function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperatureRounded = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    let searchElement = document.querySelector("#search-form-input");
    
    searchElement.value = `${response.data.city}`;
    iconElement.innerHTML = `<img src=" ${response.data.condition.icon_url}" class="weather-app-icon" />`;
    temperatureElement.innerHTML = `${temperatureRounded}`; 
   descriptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
   windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
   timeElement.innerHTML = formatDate(date);

}

function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];

    let day = days[date.getDay()];
if(minutes < 10){
    minutes = `0${minutes}`;
}

    return `${day} ${hours}:${minutes}`;
}

function searchCity(city){
let apiKey = "f9b4d69b4d22303f3t650a59od86ede0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiUrl).then(refreshWeather);
}


function formatCityName(cityName) {
    return cityName.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function handSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let formattedCityName = formatCityName(searchInput.value);  
      let cityElement = document.querySelector("#city");
    cityElement.innerHTML = formattedCityName;  
    searchCity(formattedCityName);  
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handSearchSubmit);

searchCity("Paris");







