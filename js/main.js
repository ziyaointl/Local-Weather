var isCelsius = true;
var celsius;
var fahrenheit;

window.onload = function () {
    var ipRequest = new XMLHttpRequest();
    var weatherRequest = new XMLHttpRequest();
    ipRequest.open('GET', 'https://freegeoip.net/json/', true);
    ipRequest.send();
    ipRequest.addEventListener("readystatechange", processIPRequest, false);

    function processIPRequest () {
        if (ipRequest.readyState === 4 && ipRequest.status === 200) {
            var response = JSON.parse(ipRequest.responseText);
            weatherRequest.open('GET', 'https://api.apixu.com/v1/current.json?key=3b2639ee54cf45ce958140709171801&q=' + response.latitude + "," + response.longitude, true);
            weatherRequest.send();
            weatherRequest.addEventListener("readystatechange", processWeatherRequest, false);
        }
    }

    function processWeatherRequest() {
        if (weatherRequest.readyState === 4 && weatherRequest.status === 200) {
            var response = JSON.parse(weatherRequest.responseText);
            celsius = response.current.temp_c;
            fahrenheit = response.current.temp_f;
            console.log(weatherRequest.responseText);
            document.getElementById("icon").src = "http:" + response.current.condition.icon;
            document.getElementsByClassName("left-col")[0].className += " col-sm-4 col-sm-offset-2";
            document.getElementById("celsius").innerHTML = "°C";
            document.getElementById("fahrenheit").innerHTML = "°F";
            document.getElementById("icon").className = "";
            displayCelsius();
            document.getElementById("weather").innerHTML = response.current.condition.text;
            document.getElementById("position").innerHTML = response.location.name + ", " + response.location.country;
            document.getElementById("time").innerHTML = "Last Updated: " + response.current.last_updated;
        }
    }
};

function displayCelsius() {
    document.getElementById("temperature").innerHTML = celsius + "°C";
}

function displayFahrenheit() {
    document.getElementById("temperature").innerHTML = fahrenheit + "°F";
}

function toggleTemperatureUnit() {
    if (isCelsius) {
        displayFahrenheit();
        document.getElementById("celsius").className = "unselected";
        document.getElementById("fahrenheit").className = "";
        isCelsius = false;
    }
    else {
        displayCelsius();
        document.getElementById("celsius").className = "";
        document.getElementById("fahrenheit").className = "unselected";
        isCelsius = true;
    }
}