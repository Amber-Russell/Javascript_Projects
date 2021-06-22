function displayType(weather) {
    var weatherType = weather.getAttribute("data_weather_type");
    alert (weatherType + " is in the season of " + weather.innerHTML + " currently.");
}

var hello;
hello = () => {
    return "Hello World";
}
document.getElementById("myFunc").innerHTML = hello();

const numbers = [45, 4, 9, 16 ,25];
let someOver18 = numbers.some(myFunction);

document.getElementById("arraySome").innerHTML = "some over 18 is " + someOver18;

function myFunction(value, index, array) {
    return value > 18;
}