const layout = document.querySelector('#layout');
const questions = document.querySelector('#questions');

fetch(`/api/questions`)
  .then(res => res.json())
  .then(data => {
    data.forEach(question => {
      const newQuestion = document.createElement('div');
      newQuestion.className = 'question'
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