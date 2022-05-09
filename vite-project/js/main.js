import "../css/style.css";
import { DOMselectors } from "./const";
import { attractions } from "./const";
import { tours } from "./const";
import { foods } from "./const";
import { custom } from "./const";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

DOMselectors.forEach((DOMselectors) => {
  DOMselectors.btn.addEventListener("click", function () {
    DOMselectors.Header.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//Changes Between Themes
document.getElementById("dark").addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
document.getElementById("light").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});
let cards = attractions;
function insertCards() {
  cards.forEach((attractions) => {
    document.getElementById("display").insertAdjacentHTML(
      "beforeend",
      `<div class="display-card">
           <h3 class="name">${attractions.name}</h3>
           <div class="display-att">
           <img class="image" src="${attractions.imageurl}" />
           <h4 class="description">${attractions.description}</h4>
           </div>
         </div>`
    );
  });
}

insertCards();

let foodcards = foods;
function insert() {
  foodcards.forEach((foods) => {
    document.getElementById("fooddisplay").insertAdjacentHTML(
      "beforeend",
      `<div class="display-food">
      <div class="">
           <h3 class="name">${foods.name}</h3>
           <img class="food-image" src="${foods.imageurl}" />
           <h4 class="description">${foods.description}</h4>
           </div>
         </div>`
    );
  });
}

insert();

let customs = custom;
function insertcustom() {
  customs.forEach((custom) => {
    document.getElementById("customsdisplay").insertAdjacentHTML(
      "beforeend",
      `<div class="display-custom">
      <div class="display-card-c">
           <h3 class="name">${custom.name}</h3>
           <img class="custom-image" src="${custom.imageurl}" />
           <h4 class="description">${custom.description}</h4>
           </div>
         </div>`
    );
  });
}

insertcustom();

let tourcards = tours;
function inserttours() {
  tourcards.forEach((tours) => {
    document.getElementById("tourdisplay").insertAdjacentHTML(
      "beforeend",
      `   <div class="tours-card">
           <h3 class="name">${tours.name}</h3>
           <img class="tours-image" src="${tours.imageurl}" />
           <h4 class="description">${tours.description}</h4>
           <h4 class="price">Price: $${tours.price} as of 03/01/2022</h4>
           <a href="${tours.link}" target="_blank" class="tourbutton"><button>Tour</button></a>
           </div>`
    );
  });
}
inserttours();

/* gsap scroll animations */
const tl = gsap.timeline({ delay: 0.2 });
tl.from(".homepage", { opacity: 0, duration: 1 });

ScrollTrigger.create({
  trigger: ".Attractions",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Attractions", { opacity: 1, duration: 1.5 });
  },
  onLeaveBack: () => {
    gsap.to(".Attractions", { opacity: 0, duration: 1.5 });
  },
});

ScrollTrigger.create({
  trigger: ".Food",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Food", { opacity: 1, duration: 1.5 });
  },
  onLeaveBack: () => {
    gsap.to(".Food", { opacity: 0, duration: 1.5 });
  },
});

ScrollTrigger.create({
  trigger: ".Customs",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Customs", { opacity: 1, duration: 1.5 });
  },
  onLeaveBack: () => {
    gsap.to(".Customs", { opacity: 0, duration: 1.5 });
  },
});

ScrollTrigger.create({
  trigger: ".Tours",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Tours", { opacity: 1, duration: 1 });
  },
  onLeaveBack: () => {
    gsap.to(".Tours", { opacity: 0, duration: 1.5 });
  },
});

ScrollTrigger.create({
  trigger: ".AboutUs",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".AboutUs", { opacity: 1, duration: 1.5 });
  },
  onLeaveBack: () => {
    gsap.to(".AboutUs", { opacity: 0, duration: 1.5 });
  },
});

gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

/* hamburger icon */
const menu = document.querySelector(".header-list");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
