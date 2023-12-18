function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperatureRounded = Math.round(response.data.temperature.current);
    let descriptionElement = document.querySelector("#description");
    let humityElement = document.querySelector("#humitidy");

   
   temperatureElement.innerHTML = `${temperatureRounded}°C`; 
   descriptionElement.innerHTML = response.data.condition.description;
   humityElement.innerHTML = `${response.data.temperature.humity}%`;

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







