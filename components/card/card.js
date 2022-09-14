export default createCard;

function createCard(question, answer, tag) {
  const card = document.createElement("li");
  card.classList.add("card-list__item");

  card.innerHTML = `<article class="card">
    <h2 class="card__question" data-js="card-question">
    </h2>
    <button
      class="card__button-answer"
      type="button"
      data-js="answer-button"
    >
      Show answer
    </button>
    <p class="card__answer" data-js="card-answer"></p>
    <ul class="card__tag-list">
      <li class="card__tag-list-item"></li>
    </ul>
    <div class="card__button-bookmark">
      <button
        class="bookmark"
        aria-label="bookmark"
        type="button"
        data-js="bookmark-button"
      >
        <svg
          class="bookmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewbox="0 0 24 24"
        >
          <path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      </button>
    </div>
  </article>`;

  card.querySelector('[data-js="card-question"]').textContent = question;
  card.querySelector('[data-js="card-answer"]').textContent = answer;
  card.querySelector("li.card__tag-list-item").textContent = `#${tag}`;

  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answerElement = card.querySelector('[data-js="card-answer"]');
  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

  answerButton.addEventListener("click", () => {
    if (answerElement.classList.contains("card__answer--active")) {
      answerElement.classList.remove("card__answer--active");
      answerButton.textContent = "Show answer";
    } else {
      answerElement.classList.add("card__answer--active");
      answerButton.textContent = "Hide answer";
    }
  });

  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });

  return card;
}
