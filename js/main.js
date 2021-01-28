window.addEventListener('DOMContentLoaded', () => {

  const questions = document.querySelectorAll('.questions__question-title'),
        sum = document.querySelector('.calc__input--sum'),
        time = document.querySelector('.calc__input--time');

  // accordion

  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('questions__question-title--active');
      question.nextElementSibling.classList.toggle('questions__question-content--active');
    });
  });


  // range

  function range(input, progress, content) {
    $(input).each(function(i, elem) {
      val = $(this).val();
      min = $(this).attr('min');
      max = $(this).attr('max');
      step = $(this).attr('step');
      position = 100 / (max - step) * (val - step);
      $(this).parent().find(progress).width(position + "%");
    });
    $(input).on('input', function() {
        val = $(this).val();
        min = $(this).attr('min');
        max = $(this).attr('max');
        step = $(this).attr('step');
        position = 100 / (max - step) * (val - step);
        $(this).parent().find(progress).width(position + "%");
        content.value = val;
    });
  }

  range('.range__input--sum', '.range__track--sum', sum);
  range('.range__input--time', '.range__track--time', time);


});