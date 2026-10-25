const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");

if (quizForm && quizResult) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answers = { q1: "b", q2: "a", q3: "c" };
    const formData = new FormData(quizForm);
    let score = 0;
    let unanswered = 0;

    Object.entries(answers).forEach(([question, answer]) => {
      const selected = formData.get(question);
      if (!selected) unanswered += 1;
      if (selected === answer) score += 1;
    });

    if (unanswered > 0) {
      quizResult.textContent = `You've scored ${score}/3 so far. Answer all three questions to finish your quiz.`;
    } else if (score === 3) {
      quizResult.textContent = "Excellent — 3/3! You've got all three correct.";
    } else {
      quizResult.textContent = `You scored ${score}/3. Review the lessons and try again — you can do it!`;
    }
  });
}
