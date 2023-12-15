function handleFormSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    let cityEnter = cityInput.value;

    if (cityEnter) {
        cityEnter = cityEnter.charAt(0).toUpperCase() + cityEnter.slice(1).toLowerCase();
        let countryName = document.querySelector("#changeNameCountries");
        countryName.innerHTML = cityEnter;

        getWeatherForCity(cityEnter); // Call the API with new city
         }
}

function getWeatherForCity(city) {
    let apiKey = "f9b4d69b4d22303f3t650a59od86ede0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl)
    .then(displayWeather)
    .then(displayDescription)
    .then(displayHumidity)
    .then(displayWeatherIcon);
}
function displayDescription (response){
let description = response.data.condition.description;
//console.log(response.data.condition.description);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;
  return response;
}
function displayHumidity(response) {
    let humidity= Math.round(response.data.temperature.humidity);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    return response;
}


function displayWeather(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}`;
    return response;
}

function displayWeatherIcon(response) {
    let icon = response.data.condition.icon_url;
    let iconElement = document.querySelector("#icon-weather");
    iconElement.innerHTML = `<img src="${icon}"/>`;
}

function displayCurrentDateTime() {
    let now = new Date();
    let options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false };
    let dateTimeString = now.toLocaleString('en-AU', options);
    let dateTimeDisplay = document.querySelector("#current-datetime");
    dateTimeDisplay.textContent = `"${dateTimeString}, moderate rain"`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", handleFormSubmit);

displayCurrentDateTime();




/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};*/

/*let city = prompt("Enter a city?");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}*/
