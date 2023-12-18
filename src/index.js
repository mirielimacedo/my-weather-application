function refreshWeather(response){
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = response.data.temperatue.currente;
}


function searchcity(city){
let apiKey = "f9b4d69b4d22303f3t650a59od86ede0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; 
axios.get(apiUrl).the(refreshWeather);
}




function handSearchSubmit(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchInput(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handSearchSubmit);



