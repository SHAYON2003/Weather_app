const apikey = "4238b598189a56cbad8d9bf036b11d44"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="


const searchbox = document.querySelector(".search input")
const searchtbtn = document.querySelector(".search button")



async function checkWeather(city){
    const response = await fetch(apiurl + city +  `&appid=${apikey}`)
    var data = await response.json()
    console.log(data);

document.querySelector(".city").innerHTML = data.name
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C"
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


}


searchtbtn.addEventListener('click',() =>{
    checkWeather(searchbox.value)
})

