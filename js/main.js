window.addEventListener('DOMContentLoaded', () => {

  const questions = document.querySelectorAll('.questions__question-title');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('questions__question-title--active');
      question.nextElementSibling.classList.toggle('questions__question-content--active');
    });
  });

});