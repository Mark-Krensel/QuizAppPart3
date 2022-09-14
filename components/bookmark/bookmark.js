// create cards
console.log("hallo");
import createCard from "../card/card.js";
const cardContainer = document.querySelector(
  '[data-js="bookmark__cardContainer"]'
);

const bookmarkCard1 = createCard(
  `In the Kingdom Heart series who provides the english voice for
Master Eraqus?`,
  `Mark Hamill`,
  `kingdomheart`
);
cardContainer.append(bookmarkCard1);
