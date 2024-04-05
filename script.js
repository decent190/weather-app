

const checkWhether=async()=>{
    let myCity = document.getElementById("cityName").value
    let endpoint =` https://api.openweathermap.org/data/2.5/weather?q= ${myCity}&appid=a2ef408b7ffa3e6ddae7454da5345409&units=metric`
    cityName.value=""

    let response = await fetch(endpoint)
    let convertedResponse = await response.json()
    console.log(convertedResponse);
    let mySpeed = (convertedResponse.wind.speed)
    let myGust = (convertedResponse.wind.gust)
    let myWind = Math.round(Number(mySpeed+myGust))
    
   
    temp.innerHTML=`<span style="color:black; font-size:20px;">  Temp:</span>${Math.round(convertedResponse.main.temp)}℃  `
    show.innerHTML = `<img id="img1" class="text-center" src="${convertedResponse.weather.icon}" />`
    wind.innerHTML=`${myWind} km/h`
    humidity.innerHTML=`${convertedResponse.main.humidity}%`
    pressure.innerHTML=`${convertedResponse.main.pressure} mb`
    visibility.innerHTML=`${convertedResponse.visibility}`
    userCity.innerHTML=`<span style="color:black;">  location:</span>${convertedResponse.name}`
    condition.innerHTML=`${convertedResponse.weather[0].main}`
}
