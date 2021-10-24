let temp = document.getElementById("temp");
let city = document.getElementById("city");
let description = document.getElementById("description");
let maxTemp = document.getElementById("max-temp");
let minTemp = document.getElementById("min-temp");

let weather = undefined;
let fullScreenAnimation = undefined;
let mediumScreenAnimation = undefined;
let smallScreenAnimation = undefined;

function loadAnimation(animationPath) {
  return bodymovin.loadAnimation({
    container: document.getElementById("lottie-animation"),
    path: animationPath,
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "Demo Animation",
    rendererSettings: {
      clearCanvas: false,
      preserveAspectRatio: "xMinYMin slice",
      progressiveLoad: false,
      hideOnTransparent: true,
    },
  });
}
function destroyAnimation(animation) {
  if (isAnimationLoaded(animation)) {
    animation.destroy();
  }
}

function isSmallerThanPixels(pixels) {
  return window.matchMedia(`(max-width: ${pixels}px)`).matches;
}

function isAnimationLoaded(animation) {
  return bodymovin.getRegisteredAnimations().includes(animation);
}

function loadAnimations(weatherIcon) {
  //Lottie animation
  if (!isAnimationLoaded(smallScreenAnimation) && isSmallerThanPixels(500)) {
    destroyAnimation(mediumScreenAnimation);
    destroyAnimation(fullScreenAnimation);
    smallScreenAnimation = loadAnimation(
      `img/weather-app--animations-smallest/${weatherIcon}.json`
    );
  } else if (
    !isAnimationLoaded(mediumScreenAnimation) &&
    isSmallerThanPixels(1250) &&
    !isSmallerThanPixels(500)
  ) {
    destroyAnimation(smallScreenAnimation);
    destroyAnimation(fullScreenAnimation);
    mediumScreenAnimation = loadAnimation(
      `img/weather-app--animations-small/${weatherIcon}.json`
    );
  } else if (
    !isAnimationLoaded(fullScreenAnimation) &&
    !isSmallerThanPixels(1250)
  ) {
    destroyAnimation(smallScreenAnimation);
    destroyAnimation(mediumScreenAnimation);
    fullScreenAnimation = loadAnimation(
      `img/weather-app--animations/${weatherIcon}.json`
    );
  }
}

window.addEventListener("resize", function () {
  loadAnimations(weather.icon);
});

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    const celsiusSign = "\u00B0";
    const currentApi = `http://api.openweathermap.org/data/2.5/weather?q=piran&units=metric&appid=730aaf925ed5cbb5cd67a136c55fba02`;

    fetch(currentApi)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.weather && data.weather.length > 0) {
          weather = data.weather[0];
          temp.textContent = Math.round(data.main.temp) + celsiusSign;
          city.textContent = data.name;
          description.textContent = weather.main;
          maxTemp.textContent = Math.round(data.main.temp_max) + celsiusSign;
          minTemp.textContent = Math.round(data.main.temp_min) + celsiusSign;
          //Set icon
          document.getElementById(
            "icon"
          ).src = `img/weather-app--icons/SVG/${weather.icon}.svg`;
          loadAnimations(weather.icon);
        } else {
          loadAnimations("01d");
        }
      });
  }
});

//TIME

let time = document.getElementById("time");

function setTime() {
  let today = new Date();
  let hours = addZero(today.getHours());
  let minutes = addZero(today.getMinutes());
  let currentTime = `${hours}:${minutes}`;
  time.textContent = currentTime;
}

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

setTime();
setInterval(setTime, 1000);

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

//PARALLAX

document.addEventListener("mousemove", parallaxWeather);

function parallaxWeather(e) {
  document.querySelectorAll(".weather-object").forEach(function (move) {
    let movingValue = move.getAttribute("data-value");
    let x = (e.clientX * movingValue) / 200;
    let y = (e.clientY * movingValue) / 200;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
