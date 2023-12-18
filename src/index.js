function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.temperature.current;


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
    let formattedCityName = formatCityName(searchInput.value);  // Formata o nome da cidade
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = formattedCityName;  // Atualiza com o nome da cidade formatado
    searchCity(formattedCityName);  // Chama searchCity com o nome da cidade formatado
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handSearchSubmit);



/*function handSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value); 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handSearchSubmit);*/



