const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");

if (quizForm && quizResult) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answers = { q1: "b", q2: "a", q3: "c" };
    const data = new FormData(quizForm);
    let score = 0;
    let unanswered = 0;

    for (const [question, answer] of Object.entries(answers)) {
      const selected = data.get(question);
      if (!selected) unanswered += 1;
      if (selected === answer) score += 1;
    }

    if (unanswered) {
      quizResult.textContent = `You've scored ${score}/3 so far. Please answer all three questions to finish.`;
    } else if (score === 3) {
      quizResult.textContent = "Excellent — 3/3 correct. Well done!";
    } else {
      quizResult.textContent = `You scored ${score}/3. Review the examples and try again.`;
    }
  });
}
