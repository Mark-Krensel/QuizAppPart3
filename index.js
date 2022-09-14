// create cards
import createCard from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-list"]');

const cards = [
  {
    question: "Question 1",
    answer: "Answer 1",
    tag: "Tag 1",
    bookmarked: "true",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
    tag: "Tag 2",
    bookmarked: "false",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
    tag: "Tag 3",
    bookmarked: "true",
  },
];
cards.forEach((card) => {
  const cardElement = createCard(card.question, card.answer, card.tag);
  cardContainer.append(cardElement);
});
/*
const newcard1 = createCard(
  `In the Kingdom Heart series who provides the english voice for
Master Eraqus?`,
  `Mark Hamill`,
  `kingdomheart`
);
cardContainer.append(newcard1);

const newcard2 = createCard(
  `Daniel Radcliffe became a global star in the film industry due to
  his performance in which film franchise?`,
  `Harry Potter`,
  `hewhomustnotbenamed`
);
cardContainer.append(newcard2);

const newcard3 = createCard(
  `Which former US president was nicknamed &quot;Teddy&quot; after he
  refused to shoot a defenseless black bear?`,
  `Theodore Roosevelt`,
  `teddybear`
);
cardContainer.append(newcard3);
*/
