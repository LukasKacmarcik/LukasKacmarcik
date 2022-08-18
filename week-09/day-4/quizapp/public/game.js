const layout = document.querySelector('#layout');
const score = document.querySelector('#score');
const content = document.querySelector('#content');
const question = document.querySelector('#question');
const answerOne = document.querySelector('.one');
const answerTwo = document.querySelector('.two');
const answerThree = document.querySelector('.three');
const answerFour = document.querySelector('.four');
if (!localStorage.getItem('score')) {
  localStorage.setItem('score', 0);
}
score.textContent = `Your score is: ${localStorage.getItem('score')}`;

fetch(`/api/game`)
  .then(res => res.json())
  .then(data => {
    question.textContent = data.question;
    answerOne.textContent = data.answers[0].answer_1;
    answerOne.setAttribute('data-correct', `${data.answers[0].is_correct}`);
    answerTwo.textContent = data.answers[1].answer_2;
    answerTwo.setAttribute('data-correct', `${data.answers[1].is_correct}`);
    answerThree.textContent = data.answers[2].answer_3;
    answerThree.setAttribute('data-correct', `${data.answers[2].is_correct}`);
    answerFour.textContent = data.answers[3].answer_4;
    answerFour.setAttribute('data-correct', `${data.answers[3].is_correct}`);
    return data;
  })
  .then(data => {
    content.addEventListener('click', (e) => {
      if (e.target.classList.contains('answer')) {
        addClass(e.target)
          .then(() => {
            setTimeout(() => {
              const answers = [answerOne, answerTwo, answerThree, answerFour];
              const corrAnswer = answers.filter(answer => answer.dataset.correct == 1);
              e.target.style.backgroundColor = 'red';
              corrAnswer[0].style.backgroundColor = 'green';
              if (e.target == corrAnswer[0]) {
                localStorage.setItem('score', `${Number.parseInt(localStorage.getItem('score')) + 1}`);
              } else {
                localStorage.setItem('score', 0);
              }
            }, 2000)
          })
          .then(() => {
            setTimeout(() => {
              document.location.reload();
            }, 5000);
          });
      }
    });
  });

function addClass(target) {
  return new Promise((resolve, reject) => {
    target.classList.add('selected');
    resolve(target);
    return;
  })
};