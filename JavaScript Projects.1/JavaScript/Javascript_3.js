function displayType(weather) {
    var weatherType = weather.getAttribute("data_weather_type");
    alert (weatherType + " is in the season of " + weather.innerHTML + " currently.");
}