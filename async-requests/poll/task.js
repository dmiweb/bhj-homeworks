const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const exchangeRates = JSON.parse(xhr.responseText);

    const title = exchangeRates.data.title;
    const answers = exchangeRates.data.answers;

    newSurvey(title, answers);

  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

const newSurvey = (title, answers) => {
  const titleAnswer = document.createElement('div');
  titleAnswer.textContent = title;
  pollTitle.appendChild(titleAnswer);
  
  for (let i = 0; i < answers.length; i++) {
    const btnAnswer = document.createElement('button');
    pollAnswers.appendChild(btnAnswer);
    btnAnswer.textContent = answers[i];

    btnAnswer.onclick = function () {
      alert('Спасибо, ваш голос засчитан!');
    }
  }
} 