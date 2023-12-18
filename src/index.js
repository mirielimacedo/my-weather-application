function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.temperature.current;
//console.log(response.data.temperature.current);

}


function searchCity(city){
let apiKey = "f9b4d69b4d22303f3t650a59od86ede0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiUrl).then(refreshWeather);
}


function handSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value); // Esta é a chamada correta para a função searchcity
}


/*function handSearchSubmit(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchInput(searchInput.value);
}*/


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handSearchSubmit);



