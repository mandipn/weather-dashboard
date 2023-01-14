// Initial Variables
var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");
var clearHistoryButton = $("#clear-history");

var currentCity = $("#current-city");
var currentTemp = $("#current-temp");
var currentWindSpeed = $("#current-wind-speed");
var currentHumidity = $("#current-humidity");

var weatherContent = $("#weather-content");

// Get access to the OpenWeather API
var APIkey = "a17e1499228be1f9c294ac18b234c7d7";

// Easy access to data
var cityList = [];

// Find current date and display in title
var currentDate = moment().format('L');
$("#current-date").text("(" + currentDate + ")");

// Check if search history exists when page loads
initalizeHistory();
showClear();
