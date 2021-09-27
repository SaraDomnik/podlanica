let temp = document.getElementById("temp");
let city = document.getElementById("city");
let description = document.getElementById("description");
let maxTemp = document.getElementById("max-temp");
let minTemp = document.getElementById("min-temp");

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    const currentApi = `http://api.openweathermap.org/data/2.5/weather?q=piran&units=metric&appid=730aaf925ed5cbb5cd67a136c55fba02`;

    fetch(currentApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        temp.textContent = Math.round(data.main.temp) + "\u00B0";
        city.textContent = data.name;
        description.textContent = data.weather[0].main;
        maxTemp.textContent = Math.round(data.main.temp_max) + "\u00B0";
        minTemp.textContent = Math.round(data.main.temp_min) + "\u00B0";
        //Set icon
        document.getElementById(
          "icon"
        ).src = `img/weather-app--icons/SVG/${data.weather[0].icon}.svg`;

        //Lottie animation
        bodymovin.loadAnimation({
          container: document.getElementById("lottie-animation"),
          path: `Img/weather-app--animations/${data.weather[0].icon}.json`,
          // path: `Img/weather-app--animations/01d.json`,
          renderer: "svg",
          loop: true,
          autoplay: true,
          name: "Demo Animation",
        });
      });
  }
});

//TIME

let time = document.getElementById("time");

setInterval(function () {
  let today = new Date();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let currentTime = `${hours}:${minutes}`;
  time.textContent = currentTime;
}, 1000);

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

//DATE
let date = document.getElementById("date");
let dateObj = new Date();
let currentDate = dateObj.getDate();
let month = dateObj.toLocaleString("default", { month: "long" });
let weekday = dateObj.toLocaleString("default", { weekday: "long" });
date.innerText = `${weekday}, ${currentDate} ${month}`;

//SUNRISE & SUNSET
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
