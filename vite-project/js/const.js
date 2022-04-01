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
const attractions = [
  {
    name: `The Eiffel Tower`,
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
  /*    {
      name: `Cathédrale Notre-Dame`,
      description: `Notre-Dame de Paris is a medival Catholics cathedral that was dedicated to the Virign Mary. The cathedral is considered one of the most beautiful and finest example of French Gothic architecture.`,
      imageurl:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHBhcmlzfGVufDB8fHx8MTY0Nzk2OTExMg&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450",
    },  */
];
const foods = [
  {
    name: `Croissant`,
    description: `Croissants are buttery and crispy bread that are prevalent in France, especially Paris. They are flaky and delicious; it’d be a mistake to miss out on this wonderful treat.`,
    imageurl:
      "https://www.aheadofthyme.com/wp-content/uploads/2020/05/quick-and-easy-butter-croissants-2.jpg",
  },
  {
    name: `Macaroons`,
    description: `Macaroons are small cake/biscuits made from ground almonds and dressed with a light coating of sugar along with other assortment of toppings that can include coconuts, cherries, or many more.  `,
    imageurl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/11/03/colorful-french-macarons-bakery-box-wood-surface-.jpg.rend.hgtvcom.406.305.suffix/1635922448414.jpeg",
  },
  {
    name: `French Onion Soup`,
    description: `French Onion Soup is a classic soup made out of a base of meat stock and onions. This is often served with croutons.`,
    imageurl:
      "https://images.unsplash.com/photo-1549203438-a7696aed4dac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80",
  },
  {
    name: `Crème Brûlée`,
    description: `The Crème Brûlée is a dessert filled with custard and sprinkled with sugar on the top. It is often called burnt cream due to its appearance. `,
    imageurl:
      "https://images.unsplash.com/photo-1554371650-1f19f803c220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const tours = [
  {
    name: `Lido de Paris Cabaret`,
    description: `Spend an evening dinner with a three course meal while enjoying the new “Paris Merveilles” show.Enjoy an evening watching one of Paris’ productions while sampling from a menu of French specialties.`,
    price: 90.38,
    imageurl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b3/ac/65.jpg",
  },
  {
    name: `Disneyland`,
    description: `Enjoy a day at both Disneyland Park and Walt Disney Studios. Experience attractions, shows, parades, along with meet ‘n’ greet. `,
    price: 67.21,
    imageurl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/cc/34.jpg",
  },
  {
    name: `Normandy D-Day Trip`,
    description: `Enjoy a day exploring the beaches of Normdany. Enjoy a day full of sightseeing with a cup of cider and a luncheon at noon.`,
    price: 192.51,
    imageurl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1a/79/12.jpg",
  },
  {
    name: `Champagne Fields`,
    description: `Spend an day toruing the Champagne region of Paris. Enjoy a gourmet meal with Champagne tasting throughout the day.`,
    price: 306.43,
    imageurl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/b7/8f/aa.jpg",
  },
];
export { DOMselectors };
export { attractions };
export { foods };
export { tours };
