import "../css/style.css";

const attractions = [
    {
    name: `The Eiffle Tower`,
    description: `A beautiful tower constructed out of iron beams. The heart of Paris. Next to the tower rests Champs de Mars and a magnificent bridge called the Pont Alexandre III.`,
    sale: "yes",
    imageurl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHBhcmlzfGVufDB8fHx8MTY0Nzk2OTExMg&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
  }
]
 let cards = attractions;
 function insertCards() {
     cards.forEach((attractions) => {
         document.querySelector(".display").insertAdjacentHTML(
             "beforeend",
             `<div class="display-card">
             <img class="image" src="${attractions.imageurl}" />
             <h3 class="name">${attractions.name}</h3>
             <h4 class="description">${attractions.description}</h4>
           </section>`
           );
     });
 }
 insertCards();
