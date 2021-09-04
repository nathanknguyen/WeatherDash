//Pulling over elements from html
//section here has elements from left bar of website
var citySearchBar = document.querySelector("#citySearchBar");
var citySearchBarButton = document.querySelector("#citySearchBarButton");
var AustinButton = document.querySelector("#AustinButton");
var ChicagoButton = document.querySelector("#ChicagoButton");
var NewYorkButton = document.querySelector("#NewYorkButton");
var OrlandoButton = document.querySelector("#OrlandoButton");
var SanFranciscoButton = document.querySelector("#SanFranciscoButton");
var SeattleButton = document.querySelector("#SeattleButton");
var DenverButton = document.querySelector("#DenverButton");
var AtlantaButton = document.querySelector("#AtlantaButton");
var currentCity = document.querySelector("#currentCity");
var currentCityDate = document.querySelector("#currentCityDate");
var currentCityWeather = document.querySelector("#currentCityWeather")
var currentCityTemp = document.querySelector("#currentCityTemp");
var currentCityWind = document.querySelector("#currentCityWind");
var currentCityHumidity = document.querySelector("#currentCityHumidity");
var currentCityUVI = document.querySelector("#currentCityUVI");

//html elements for next day of selected city
var day1 = document.querySelector("#day1");
var day1date = document.querySelector("#day1date")
var day1weather = document.querySelector("#day1weather");
var day1temp = document.querySelector("#day1temp");
var day1wind = document.querySelector("#day1wind");
var day1humidity = document.querySelector("#day1humidity");

var day2 = document.querySelector("#day2");
var day2date = document.querySelector("#day2date")
var day2weather = document.querySelector("#day2weather");
var day2temp = document.querySelector("#day2temp");
var day2wind = document.querySelector("#day2wind");
var day2humidity = document.querySelector("#day2humidity");

var day3 = document.querySelector("#day3");
var day3date = document.querySelector("#day3date")
var day3weather = document.querySelector("#day3weather");
var day3temp = document.querySelector("#day3temp");
var day3wind = document.querySelector("#day3wind");
var day3humidity = document.querySelector("#day3humidity");

var day4 = document.querySelector("#day4");
var day4date = document.querySelector("#day4date")
var day4weather = document.querySelector("#day4weather");
var day4temp = document.querySelector("#day4temp");
var day4wind = document.querySelector("#day4wind");
var day4humidity = document.querySelector("#day4humidity");

var day5 = document.querySelector("#day5");
var day5date = document.querySelector("#day5date")
var day5weather = document.querySelector("#day5weather");
var day5temp = document.querySelector("#day5temp");
var day5wind = document.querySelector("#day5wind");
var day5humidity = document.querySelector("#day5humidity");

// Function displays the current day and the next 5 days
function displayDay() {
  $("#currentCityDate").text(moment().format("[(]M/D/YYYY[)]"));
  $("#day1date").text(moment().add(1,"days").format("M/D/YYYY"));
  $("#day2date").text(moment().add(2,"days").format("M/D/YYYY"));
  $("#day3date").text(moment().add(3,"days").format("M/D/YYYY"));
  $("#day4date").text(moment().add(4,"days").format("M/D/YYYY"));
  $("#day5date").text(moment().add(5,"days").format("M/D/YYYY"));
}
setInterval(displayDay, 1000);

// get next five days
var epochCurrent = Math.round((new Date()).getTime() / 1000);
var epochNeg1 = epochCurrent - (86400 * 1)
var epochNeg2 = epochCurrent - (86400 * 2)
var epochNeg3 = epochCurrent - (86400 * 3)
var epochNeg4 = epochCurrent - (86400 * 4)
var epochNeg5 = epochCurrent - (86400 * 5)

// Request url for each city
var requestUrlAustin = "https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc";
var requestUrlChicago = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlNewYork = 'https://api.openweathermap.org/data/2.5/weather?q=New+York+City&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlOrlando = 'https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlSanFrancisco = 'https://api.openweathermap.org/data/2.5/weather?q=San+Francisco&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlSeattle = 'https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlDenver = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'
var requestUrlAtlanta = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=412a43a2e062fcffc23f314b23bd16bc'

// Now that everything is set up we can grab our information for each city
// Austin
function showResponseAustin(event) {
  // Prevent default action
  event.preventDefault();

  // Browser Fetch Method for each of the buttons
  fetch(requestUrlAustin)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //Begins assigning values for variables inside current city box
      currentCity.innerHTML = (data.name);
      currentCityWeather.innerHTML = "Weather: " + (data.weather[0].main);
      currentCityTemp.innerHTML = "Temp: " + (data.main.temp) + "&deg; F";
      currentCityWind.innerHTML = "Wind: " + (data.wind.speed) + "MPH";
      currentCityHumidity.innerHTML = "Humidity: " + (data.main.humidity) + "%";

      //gets the lat and lon
      var lon = data.coord.lon;
      var lat = data.coord.lat;
    fetch(requestUrlAustin2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentCityUVI.innerHTML = "UVI: " + (data.current.uvi);
    });

    fetch(requestUrlAustinNeg1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day1weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day1temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day1wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day1humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day2weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day2temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day2wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day2humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day3weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day3temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day3wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day3humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg4)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day4weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day4temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day4wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day4humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });

    fetch(requestUrlAustinNeg5)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      day5weather.innerHTML = "Weather: " + (data.current.weather[0].main);
      day5temp.innerHTML = "Temp: " + (data.current.temp) + "&deg; F";
      day5wind.innerHTML = "Wind: " + (data.current.wind_speed) + "MPH";
      day5humidity.innerHTML = "Humidity: " + (data.current.humidity) + "%";
    });
  });
}

// Chicago
