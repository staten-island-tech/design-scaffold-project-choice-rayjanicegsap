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
      `
      <div class="display-card">
           <h3 class="name">${tours.name}</h3>
           <img class="tours-image" src="${tours.imageurl}" />
           <h4 class="description">${tours.description}</h4>
           <h4 class="price">Price: $${tours.price} as of 03/01/2022</h4>
           </div>`
    );
  });
}
inserttours();

/* gsap scroll animations */
ScrollTrigger.create({
  trigger: ".Attractions",
  markers: true,
  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Attractions", { duration: 1.0, backgroundColor: "#faf6d3" });
  },
  onLeaveBack: () => {
    gsap.to(".Attractions", { duration: 1.0, backgroundColor: "#FFFFFF" });
  },
});

ScrollTrigger.create({
  trigger: ".Food",
  markers: true,
  start: "top 50%",
  end: "bottom 0%",
  onEnter: () => {
    gsap.to(".Food", { duration: 1.0, backgroundColor: "#e7e7bd" });
  },
  onLeaveBack: () => {
    gsap.to(".Food", { duration: 1.0, backgroundColor: "#faf6d3" });
  },
});
