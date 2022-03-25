import "../css/style.css";
const DOMselectors = {
  Attractions: document.getElementById("Attractions"),
  Food: document.getElementById("Food"),
  Tours: document.getElementById("Tours"),
  Customs: document.getElementById("Customs"),
  Aboutus: document.getElementById("Aboutus"),
};
const Buttonselectors = {
  btn1: document.getElementById("btn1"),
  btn2: document.getElementById("btn2"),
  btn3: document.getElementById("btn3"),
  btn4: document.getElementById("btn4"),
  btn5: document.getElementById("btn5"),
};
Buttonselectors.btn1.addEventListener("click", function () {
  DOMselectors.Attractions.scrollIntoView();
  });
Buttonselectors.btn2.addEventListener("click", function () {
  DOMselectors.Food.scrollIntoView();
  });
Buttonselectors.btn3.addEventListener("click", function () {
  DOMselectors.Tours.scrollIntoView();
  });
  Buttonselectors.btn4.addEventListener("click", function () {
    DOMselectors.Customs.scrollIntoView();
    });
    Buttonselectors.btn5.addEventListener("click", function () {
      DOMselectors.Aboutus.scrollIntoView();
      });

      