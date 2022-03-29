import "../css/style.css";
/* import { gsap } from "gsap";  */
const DOMselectors = [
  {
    Header: document.getElementById("Attractions"),
    btn: document.getElementById("btn1"),
  },
  {
    Header: document.getElementById("Food"),
    btn: document.getElementById("btn2"),
  },
  {
    Header: document.getElementById("Tours"),
    btn: document.getElementById("btn3"),
  },
  {
    Header: document.getElementById("Customs"),
    btn: document.getElementById("btn4"),
  },
  {
    Header: document.getElementById("Aboutus"),
    btn: document.getElementById("btn5"),
  },
  {
    Header: document.getElementById("Home"),
    btn: document.getElementById("Paris"),
  },
];
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

const attractions = [
  {
    name: `The Eiffle Tower`,
    description: `A beautiful tower constructed out of iron beams. The heart of Paris. Next to the tower rests Champs de Mars and a magnificent bridge called the Pont Alexandre III.`,
    imageurl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHBhcmlzfGVufDB8fHx8MTY0Nzk2OTExMg&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
  },
  {
    name: `The Louvre Museum`,
    description: `Another hot tourist attraction in Paris would be the Louvre Museum. One of the most visited museums in the world, holding countless exhibits and rare art collections.`,
    imageurl:
      "https://images.unsplash.com/photo-1562115725-ebb30e8bc881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: `Arc De Triomphe`,
    description: `The Arc De Triomphe was erected to honor the heroic sacrifices made during the French Revolution. Standing at a height of 50 meters, it is truly a sight to behold.`,
    imageurl:
      "https://images.unsplash.com/photo-1627660852400-8afb9a04d667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: `Cathédrale Notre-Dame`,
    description: `Notre-Dame de Paris is a medival Catholics cathedral that was dedicated to the Virign Mary. The cathedral is considered one of the most beautiful and finest example of French Gothic architecture.`,
    imageurl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHBhcmlzfGVufDB8fHx8MTY0Nzk2OTExMg&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
  },
];

let cards = attractions;
function insertCards() {
  cards.forEach((attractions) => {
    document.querySelector(".display").insertAdjacentHTML(
      "beforeend",
      `<div class="display-card">
           <img class="image" src="${attractions.imageurl}" />
           <h3 class="name">${attractions.name}</h3>
           <h4 class="description">${attractions.description}</h4>
         </div>`
    );
  });
}
insertCards();
console.log(insertCards);
