//MAPS

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.52718350323489, lng: 13.567225039235982 },
    zoom: 18,
    mapId: "d35677e370f6e0cd",
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

//MENU VARIABLES
// const menuHeading = document.getElementById("menu__heading");
// const menuFood = document.getElementById("menu__food");
// const menuBg = document.getElementById("menu");
// const btn = document.getElementById("btn");

// //MENU OPEN

// menuHeading.addEventListener("click", function openMenu() {
//   menuFood.style.display = "block";
//   menuHeading.style.display = "none";
//   menuBg.style.backgroundImage = "url('/Img/bg-fish-2.png')";
//   menuBg.style.backgroundSize = "auto";
// });

// //MENU CLOSE

// btn.addEventListener("click", function closeMenu() {
//   menuFood.style.display = "none";
//   menuHeading.style.display = "block";
//   menuBg.style.backgroundImage =
//     "url('/Img/podlanica_pattern-white--rotated.svg')";
//   menuBg.style.backgroundSize = "cover";
// });

// //Lottie
// debugger;
// var animation = bodymovin.loadAnimation({
//   conatiner: document.getElementById("bm"),
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "10d.json",
// });