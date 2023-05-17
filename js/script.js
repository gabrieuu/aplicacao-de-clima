/// flat/64.png

//variaveis
const apiKey = "d0d90eeb88c6eebb728e9d94a353ae06";
const apiCountryURL = "https://flagsapi.com/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");


//funcoes
const showWeatherData = (city) =>{
    console.log(city);
}
//eventos

searchBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})