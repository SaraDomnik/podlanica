//MAPS
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(45.52718350323489, 13.567225039235982),
    zoom: 18,
    mapId: "d35677e370f6e0cd",
  });

  var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(45.52718350323489, 13.567225039235982),
    map: map,
    icon: "/Img/Map_pin.png",
  });
}
//45.52718350323489, 13.567225039235982

//MAIN NAV BACKGROUND CHANGE ON SCROLL
let nav = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    return (nav.style.backgroundColor = "#497382");
  }
  return (nav.style.backgroundColor = "transparent");
});

//HAMBURGER MENU
let menu = document.querySelector(".ham__list");
let ham = document.querySelector(".ham__btn");
let xIcon = document.querySelector(".ham__btn--x-icon");
let menuIcon = document.querySelector(".ham__btn--menu-icon");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu.classList.contains("ham__showMenu")) {
    menu.classList.remove("ham__showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("ham__showMenu");

    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

//Toggle menu up when you click on item inside nav

let menuItem = document.querySelectorAll(".ham__item");

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// //NAVBAR  HIDE ON SCROLL

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 60) {
//     return document.getElementById("navigation").classList.add("hide");
//   }
//   return document.getElementById("navigation").classList.remove("hide");
// });

// //HAMBURGER MENU SHOW ON SCROLL

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     return document.getElementById("ham").classList.remove("hide__ham");
//   }
//   return document.getElementById("ham").classList.add("hide__ham");
// });

//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gallery__mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//auto slide

let autoIndex = 0;
showAutoSlides();

function showAutoSlides() {
  let i;
  let autoSlides = document.getElementsByClassName("gallery__mySlides");

  for (i = 0; i < autoSlides.length; i++) {
    autoSlides[i].style.display = "none";
  }

  autoIndex++;
  if (autoIndex > autoSlides.length) {
    autoIndex = 1;
  }

  autoSlides[autoIndex - 1].style.display = "block";
  setTimeout(showAutoSlides, 5000);
}
