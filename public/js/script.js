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
    icon: "/img/Map_pin.png",
    url: "https://goo.gl/maps/tH1ADvfayPqEfvxj9",
  });
}

//45.52718350323489, 13.567225039235982

//MAIN NAV BACKGROUND CHANGE ON SCROLL
let nav = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.style.backgroundColor = "#497382";
  } else {
    nav.style.backgroundColor = "transparent";
  }
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

//SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  autoplay: {
    delay: 6000,
  },
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    950: {
      slidesPerView: 2,
    },
    1550: {
      slidesPerView: 3,
    },
  },
  freeMode: {
    enabled: true,
    sticky: true,
  },
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//PARALLAX
document.addEventListener("mousemove", parallax);

function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    let movingValue = move.getAttribute("data-value");
    let x = (e.clientX * movingValue) / 250;
    let y = (e.clientY * movingValue) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

//ELEMENTS ANIMATION
AOS.init();
