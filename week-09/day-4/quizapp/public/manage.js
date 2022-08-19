const layout = document.querySelector('#layout');
const questions = document.querySelector('#questions');
const form = document.forms[0];
const question = document.querySelector('#inputQuestion');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const button = document.querySelector('button');

function fetchQuestions() {
  questions.innerHTML = "";
  fetch(`/api/questions`)
    .then(res => res.json())
    .then(data => {
      data.forEach(question => {
        const newQuestion = document.createElement('div');
        newQuestion.className = 'question';
        newQuestion.setAttribute('data-id', question.id);
        const newQuestionContent = document.createElement('p');
        newQuestionContent.className = 'questionContent';
        newQuestion.textContent = question.question;
        const newDelete = document.createElement('p');
        newDelete.textContent = 'delete';
        newDelete.className = 'delete';
        newQuestion.appendChild(newQuestionContent);
        newQuestion.appendChild(newDelete);
        questions.appendChild(newQuestion);
      });
    })
};
fetchQuestions();

questions.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    deleteQuestion(e);
  }
});

button.addEventListener('click', (e) => {
  if (question.value && answer1.value && answer2.value && answer3.value && answer4.value && (answer1.nextElementSibling.checked || answer2.nextElementSibling.checked || answer3.nextElementSibling.checked || answer4.nextElementSibling.checked)) {
    const newQuestion = {
      question: question.value,
      answers: [
        {
          answer_1: answer1.value,
          is_correct: (answer1.nextElementSibling.checked ? 1 : 0)
        },
        {
          answer_2: `${answer2.value}`,
          is_correct: (answer2.nextElementSibling.checked ? 1 : 0)
        },
        {
          answer_3: `${answer3.value}`,
          is_correct: (answer3.nextElementSibling.checked ? 1 : 0)
        },
        {
          answer_4: `${answer4.value}`,
          is_correct: (answer4.nextElementSibling.checked ? 1 : 0)
        }
      ]
    };
    fetch(`/api/questions`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
      .then(res => {
        form.reset();
        fetchQuestions();
      })
  }
})





function deleteQuestion(e) {
  fetch(`/api/questions/${e.target.parentElement.dataset.id}`, {
    method: 'DELETE'
  });
  e.target.parentElement.style.display = 'none';
};