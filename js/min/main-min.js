function displayCelsius(){document.getElementById("temperature").innerHTML=celsius+"°C"}function displayFahrenheit(){document.getElementById("temperature").innerHTML=fahrenheit+"°F"}function toggleTemperatureUnit(){isCelsius?(displayFahrenheit(),isCelsius=!1):(displayCelsius(),isCelsius=!0)}var isCelsius=!0,celsius,fahrenheit;window.onload=function(){function e(){if(4===n.readyState&&200===n.status){var e=JSON.parse(n.responseText);s.open("GET","http://api.apixu.com/v1/current.json?key=3b2639ee54cf45ce958140709171801&q="+e.latitude+","+e.longitude,!0),s.send(),s.addEventListener("readystatechange",t,!1)}}function t(){if(4===s.readyState&&200===s.status){var e=JSON.parse(s.responseText);celsius=e.current.temp_c,fahrenheit=e.current.temp_f,console.log(s.responseText),document.getElementById("icon").src="http:"+e.current.condition.icon,document.getElementsByClassName("left-col")[0].className+=" col-sm-4 col-sm-offset-2",document.getElementById("icon").className="",displayCelsius(),document.getElementById("weather").innerHTML=e.current.condition.text,document.getElementById("position").innerHTML=e.location.name+", "+e.location.country,document.getElementById("time").innerHTML="Last Updated: "+e.current.last_updated}}var n=new XMLHttpRequest,s=new XMLHttpRequest;n.open("GET","https://freegeoip.net/json/",!0),n.send(),n.addEventListener("readystatechange",e,!1)};