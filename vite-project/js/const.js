const DOMselectors = [
  {
    Header: document.getElementById("anchor1"),
    btn: document.getElementById("btn1"),
  },
  {
    Header: document.getElementById("anchor2"),
    btn: document.getElementById("btn2"),
  },
  {
    Header: document.getElementById("anchor3"),
    btn: document.getElementById("btn3"),
  },
  {
    Header: document.getElementById("anchor4"),
    btn: document.getElementById("btn4"),
  },
  {
    Header: document.getElementById("anchor5"),
    btn: document.getElementById("btn5"),
  },
  {
    Header: document.getElementById("Home"),
    btn: document.getElementById("Paris"),
  },
];
const attractions = [
  {
    name: `Eiffel Tower`,
    description: `A beautiful tower constructed out of iron beams. The heart of Paris. Next to the tower rests Champs de Mars Pont Alexandre III.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770684/GSAP%20Design%20Project:/photo-1502602898657-3e91760cbb34_yke638.jpg",
  },
  {
    name: `Louvre Museum`,
    description: `The Louvre Museum is one of the most visited museums in the world, holding countless exhibits and rare art collections.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770735/GSAP%20Design%20Project:/photo-1562115725-ebb30e8bc881_v3uyva.avif",
  },
  {
    name: `Arc De Triomphe`,
    description: `The Arc De Triomphe was erected to honor the heroic sacrifices made during the French Revolution. Standing at a height of 50 meters, it is truly a sight to behold.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770746/GSAP%20Design%20Project:/photo-1627660852400-8afb9a04d667_xhrouh.avif",
  },
];
const foods = [
  {
    name: `Croissant`,
    description: `Croissants are buttery and crispy bread that are prevalent in France, especially Paris. They are flaky and delicious; it’d be a mistake to miss out on this wonderful treat.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770758/GSAP%20Design%20Project:/quick-and-easy-butter-croissants-2_wqu9c2.jpg",
  },
  {
    name: `Macaroons`,
    description: `Macaroons are small cake/biscuits made from ground almonds and dressed with a light coating of sugar topped along with other assortment of toppings`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770769/GSAP%20Design%20Project:/1635922448414_ax94q0.jpg",
  },
  {
    name: `French Onion Soup`,
    description: `French Onion Soup is a classic soup made out of a base of meat stock and onions. This is often served with croutons.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770777/GSAP%20Design%20Project:/photo-1549203438-a7696aed4dac_g5bqoi.avif",
  },
  {
    name: `Crème Brûlée`,
    description: `The Crème Brûlée is a dessert filled with custard and sprinkled with sugar on the top. It is often called burnt cream due to its appearance. `,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770792/GSAP%20Design%20Project:/photo-1554371650-1f19f803c220_gkgzh4.avif",
  },
];

const tours = [
  {
    name: `Lido de Paris Cabaret`,
    description: `Spend an evening dinner with a three course meal while enjoying the new “Paris Merveilles” show.`,
    price: 87.93,
    link: "https://www.viator.com/tours/Paris/Lido-de-Paris-Cabaret-Paris-Merveilles-Show/d479-5091LIDOPARIS",
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770843/GSAP%20Design%20Project:/65_k1czou.jpg",
  },
  {
    name: `Disneyland`,
    description: `Enjoy a day at both Disneyland Park and Walt Disney Studios. Experience attractions, shows, parades, along with meet ‘n’ greet. `,
    price: 62.1,
    link: "https://www.viator.com/tours/Paris/Disneyland-Paris-1-Day-Ticket/d479-5307DISNEYMAGIC",
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770804/GSAP%20Design%20Project:/34_lzdhtg.jpg",
  },
  {
    name: `Normandy D-Day Trip`,
    description: `Enjoy a day exploring the beaches of Normdany. Enjoy a day full of sightseeing with a cup of cider and a luncheon at noon.`,
    price: 192.51,
    link: "https://www.viator.com/tours/Paris/Normandy-D-Day-Landing-Beaches-Tour-including-Omaha-Beach-Cider-Tasting-and-Lunch/d479-3731NORMANDY",
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770815/GSAP%20Design%20Project:/12_iv3sud.jpg",
  },
  {
    name: `Champagne Fields`,
    description: `Spend an day toruing the Champagne region of Paris. Enjoy a gourmet meal with Champagne tasting throughout the day.`,
    price: 306.43,
    link: "https://www.viator.com/tours/Paris/Champagne-WineDay-Tour/d479-35428P1",
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770823/GSAP%20Design%20Project:/aa_aclvjz.jpg",
  },
];

const custom = [
  {
    name: `Never Taking Wine To A Dinner Party`,
    description: `It is a French custom to never bring wine to a dinner party. The host has carefully chosen a bottle of wine for the evening. By bringing your own bottle you are imply that you have no trust in the host’s taste.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770852/GSAP%20Design%20Project:/photo-1510812431401-41d2bd2722f3_ramrs7.avif",
  },
  {
    name: `Slapped By A Herring`,
    description: `During the year, places around France would hold festivals and carnivals. One of the key moments of the festivities is when 450 kilios of herring is tossed into the crowd. So if you ever get slapped with a herring, just know it was with good intentions.  `,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770858/GSAP%20Design%20Project:/photo-1567087978459-8a8eeac7bc75_infakq.avif",
  },
  {
    name: `Being Late To Events`,
    description: `While in other parts of the world, it is seem to be disrespectful. However, in France, the social norm is the opposite. Guests are usually 10-15 minutes late to an event. `,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770866/GSAP%20Design%20Project:/photo-1624028409583-eac582b51895_ybula2.avif",
  },
  {
    name: `Celebrating With Car Horns`,
    description: `Following the marriage of a newly wed couple, the newlyweds are greeted with screeching car horns as they pull away in their wedding car. The newlyweds are greeted and sent off with the sounds of hundreds of car horns from the guests and townspeople.`,
    imageurl:
      "https://res.cloudinary.com/vite-project/image/upload/c_scale,f_auto,q_auto,w_800/v1651770875/GSAP%20Design%20Project:/photo-1535745425003-d41f0bcca956_wdk8fx.avif",
  },
];

export { DOMselectors };
export { attractions };
export { foods };
export { tours };
export { custom };
