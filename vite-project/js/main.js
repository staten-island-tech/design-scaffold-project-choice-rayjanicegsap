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
