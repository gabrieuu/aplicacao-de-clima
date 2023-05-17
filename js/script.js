/// flat/64.png

//variaveis
const apiKey = "d0d90eeb88c6eebb728e9d94a353ae06";
const apiCountryURL = "https://flagsapi.com/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const informacoes = document.querySelector("#weather-data");
const cityElement = document.querySelector("#city");
const bandeira = document.querySelector("#country");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//funcoes
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data;
}   
const showWeatherData = async(city) =>{
    const data = await getWeatherData(city); 
    
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    umidityElement.innerText = data.main.humidity+"%"
    windElement.innerText = data.wind.speed+"km/h";
    bandeira.setAttribute("src",apiCountryURL + data.sys.country+"/flat/64.png");
    informacoes.classList.remove("hide");
}
//eventos

searchBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
    
})
cityInput.addEventListener("keyup", (e) =>{
    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }
})