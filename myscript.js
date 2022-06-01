let now = new Date ();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ];
let day = days[now.getDay()];

// ⏰Feature #1: display the current date and time using JavaScript: Tuesday 16:00
let date = document.querySelector("li#current-date");
date.innerHTML = '${day}, ${hours}:${minutes}';

// 🕵️‍♀️Feature #2 Add a search engine, when searching for a city (i.e. Paris), 
// display the city name on the page after the user submits the form.
function searchCity (event) {
  event.preventDefault(); 
  let searchInput = document.querySelector("#search-input");
}

let heading = document.querySelector("#city");
heading.innerHTML = '${searchInput}';

let form = document.querySelector("#input-form");
form.addEventListener("submit", searchCity);


//🙀Bonus Feature Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. 
// When clicking on it, it should convert the temperature to Fahrenheit. 
// When clicking on Celsius, it should convert it back to Celsius.

