window.onload = function () {
    var ipRequest = new XMLHttpRequest();
    var weatherRequest = new XMLHttpRequest();
    ipRequest.open('GET', 'https://freegeoip.net/json/', true);
    ipRequest.send();
    ipRequest.addEventListener("readystatechange", processIPRequest, false);

    function processIPRequest () {
        if (ipRequest.readyState === 4 && ipRequest.status === 200) {
            var response = JSON.parse(ipRequest.responseText);
            weatherRequest.open('GET', 'http://api.apixu.com/v1/current.json?key=3b2639ee54cf45ce958140709171801&q=' + response.ip, true);
            weatherRequest.send();
            weatherRequest.addEventListener("readystatechange", processWeatherRequest, false);
        }
    }

    function processWeatherRequest() {
        if (weatherRequest.readyState === 4 && weatherRequest.status === 200) {
            var response = JSON.parse(weatherRequest.responseText);
            console.log(weatherRequest.responseText);
        }
    }
};
