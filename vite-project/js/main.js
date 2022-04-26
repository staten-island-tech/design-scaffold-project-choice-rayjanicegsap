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
    DOMselectors.Header.scrollIntoView({ behavior: "smooth", block: "center" });
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
      <div class="display-card">
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

ScrollTrigger.create({
  trigger: ".Attractions",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Attractions", { duration: 1.0, backgroundColor: "#faf6d3" });
  },
  onLeaveBack: () => {
    gsap.to(".Attractions", {
      duration: 1.0,
      backgroundColor: /*"#FFFFFF" */ "#B1B27A",
    });
  },
});

ScrollTrigger.create({
  trigger: ".Food",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Food", {
      duration: 1.0,
      backgroundColor: /* "#e7f8bd" */ "#faf6d3",
    });
  },
  onLeaveBack: () => {
    gsap.to(".Food", {
      duration: 1.0,
      backgroundColor: /* "#faf6d3" */ "#B1B27A",
    });
  },
});

ScrollTrigger.create({
  trigger: ".Customs",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Customs", { duration: 1.0, backgroundColor: "#f9f9da" });
  },
  onLeaveBack: () => {
    gsap.to(".Customs", { duration: 1.0, backgroundColor: "#B1B27A" });
  },
});

ScrollTrigger.create({
  trigger: ".Tours",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Tours", {
      duration: 1.0,
      backgroundColor: /*"#f9f9ad"*/ "#faf6d3",
    });
  },
  onLeaveBack: () => {
    gsap.to(".Tours", {
      duration: 1.0,
      backgroundColor: /*"#add8e6" */ "#B1B27A",
    });
  },
});

ScrollTrigger.create({
  trigger: ".AboutUs",

  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".AboutUs", { duration: 1.0, backgroundColor: "#f9f9da" });
  },
  onLeaveBack: () => {
    gsap.to(".AboutUs", { duration: 1.0, backgroundColor: "#B1B27A" });
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
