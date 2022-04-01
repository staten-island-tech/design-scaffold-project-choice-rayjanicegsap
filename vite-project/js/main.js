import "../css/style.css";
import { DOMselectors } from "./const";
import { attractions } from "./const";
import { tours } from "./const";
import { foods } from "./const";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

DOMselectors.forEach((DOMselectors) => {
  DOMselectors.btn.addEventListener("click", function () {
    DOMselectors.Header.scrollIntoView();
  });
});

// This changes the color them of the website after the button has been clicked
document.querySelector(".btn1").addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
document.querySelector(".btn2").addEventListener("click", function () {
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

let tourcards = tours;
function inserttours() {
  tourcards.forEach((tours) => {
    document.getElementById("tourdisplay").insertAdjacentHTML(
      "beforeend",
      `<div class="display-food">
      <div class="display-card">
           <h3 class="name">${tours.name}</h3>
           <img class="tours-image" src="${tours.imageurl}" />
           <h4 class="description">${tours.description}</h4>
           <h4 class="price">Price: $${tours.price} as of 03/01/2022</h4>
           </div>
         </div>`
    );
  });
}
inserttours();

/* gsap scroll animations */
const tl = gsap.timeline({ delay: 0.2 });
tl.from(".homepage", {
  opacity: 0,
  duration: 2,
});

tl.to(".Attractions", {
  ScrollTrigger: {
    trigger: ".Attractions",
    scrub: true,
    end: ".Food",
    toggleActions: "restart pause resumee complete",
  },
  backgroundColor: "#FFFFFF",
  ease: "none",
  duration: 1,
}).to(".Food", {
  ScrollTrigger: {
    trigger: ".Food",
    scrub: true,
    end: ".Tours",
    toggleActions: "restart pause resumee complete",
  },
  backgroundColor: "#FFFFE0",
  ease: "none",
  duration: 1,
});
