function getWeatherForCity(city) {
    let apiKey = "f9b4d69b4d22303f3t650a59od86ede0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);

    /*axios.get(apiUrl)
        .then(displayWeather)
        .then(displayDescription)
        //.then(displayHumidity)
        //.then(displayWindSpeed)
        .then(displayWeatherIcon);*/
}

function handleFormSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityEnter = cityInput.value;

    if (cityEnter) {
        cityEnter = cityEnter.charAt(0).toUpperCase() + cityEnter.slice(1).toLowerCase();
        let countryName = document.querySelector("#changeNameCountries");
        countryName.innerHTML = cityEnter;

        getWeatherForCity(cityEnter);
    }
}



/*function displayWeather(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}`;
    return response;
}


function displayDescription(response) {
//console.log(response.data.condition.description);
   let description = response.data.condition.description;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = description;
    return response;
}

function displayHumidity(response) {
    let humidity = Math.round(response.data.temperature.humidity);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${humidity}%`;
    return response;
}

function displayWindSpeed(response) {
    let windSpeed = Math.round(response.data.wind.speed);
    let windSpeedElement = document.querySelector("#wind-speed");
    windSpeedElement.innerHTML = `${windSpeed} km/h`;
    return response;
}

function displayWeatherIcon(response) {
    let icon = response.data.condition.icon_url;
    let iconElement = document.querySelector("#icon-weather");
    iconElement.src = icon;
}

function displayCurrentDateTime() {
    let now = new Date();
    let options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
    let dateTimeString = now.toLocaleString('en-AU', options);
    let dateTimeDisplay = document.querySelector("#current-datetime");
    dateTimeDisplay.textContent = dateTimeString;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", handleFormSubmit);

displayCurrentDateTime();*/



