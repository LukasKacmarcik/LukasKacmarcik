// <!-- <div id="post">
//   <div id="side">
//     <div id="uparow"></div>
//     <div id="score"></div>
//     <div id="downarow"></div>
//   </div>
//   <div id="content">
//     <a id="title" href="#"></a>
//     <div id="date"></div>
//     <div id="autor_id"></div>
//     <button id="update"></button>
//     <button id="remove"></button>
//   </div>
// </div> -->
const body = document.querySelector('body');
const postS = document.querySelector('#posts');

fetch('http://localhost:3000/api/posts')
  .then(response => response.json())
  .then(allposts => {
    createPosts(allposts);
  });

function createPosts(posts) {
  posts.forEach(post => {
    const newPost = document.createElement('div');
    newPost.setAttribute('class', `post`);
    newPost.setAttribute('data-postId', `${post.id}`);
    newPost.setAttribute('data-score', `${post.score}`);
    newPost.setAttribute('data-timestamp', `${post.timestamp}`);
    newPost.setAttribute('data-title', `${post.title}`);
    newPost.setAttribute('data-url', `${post.url}`);
    newPost.setAttribute('data-user_id', `${post.user_id}`);
    ///SIDE///
    const newSide = document.createElement('div');
    newSide.className = 'side';
    const newArrUp = document.createElement('div');
    newArrUp.className = 'arrup';
    const newScore = document.createElement('div');
    newScore.className = 'score';
    newScore.textContent = post.score;
    const newArrDown = document.createElement('div');
    newArrDown.className = 'arrdown';
    newSide.appendChild(newArrUp);
    newSide.appendChild(newScore);
    newSide.appendChild(newArrDown);
    ///CONTENT///
    const newContent = document.createElement('div');
    newContent.className = 'content';
    const newTitle = document.createElement('a');
    newTitle.textContent = post.title;
    newTitle.setAttribute('href', `${post.url}`);
    newTitle.className = 'title';
    const newDate = document.createElement('p');
    newDate.textContent = `Submitted ${post.timestamp} by `;
    newDate.className = 'date';
    const newAutor = document.createElement('p');
    newAutor.textContent = post.user_id;
    newAutor.className = 'autor';
    const newActions = document.createElement('div');
    newActions.className = 'actions';
    const newUpdate = document.createElement('a');
    newUpdate.setAttribute('href', `#`);
    newUpdate.className = 'update';
    newUpdate.textContent = 'Update'
    const newDelete = document.createElement('p');
    newDelete.className = 'delete';
    newDelete.textContent = 'Delete'
    newContent.appendChild(newTitle);
    newContent.appendChild(newDate);
    newContent.appendChild(newAutor);
    newActions.appendChild(newUpdate);
    newActions.appendChild(newDelete);
    newContent.appendChild(newActions);
    ///APPEND TO NEW POST AND THAN TO POSTS///
    newPost.appendChild(newSide);
    newPost.appendChild(newContent);
    postS.appendChild(newPost);
    ///ADD EVENT FOR ARROWS AND DELETE FUNCTION///
    newPost.addEventListener('click', (e) => {
      if (e.target.className == 'arrup') {
        upVote(e);
      };

      if (e.target.className == 'arrdown') {
        downVote(e);
      };
    })
  });
};

function upVote(e) {
  fetch(`/api/posts/${e.currentTarget.dataset.postid}/upvote`)
    .then(response => {
      e.target.nextSibling.textContent = parseInt(e.target.nextSibling.textContent) + 1;
      e.target.style.backgroundImage = "url('./img/upvoted.png')";
    })
    .catch((error) => {
      console.log(error);
    })
};

function downVote(e) {
  fetch(`/api/posts/${e.currentTarget.dataset.postid}/downvote`)
    .then(response => {
      e.target.previousSibling.textContent = parseInt(e.target.previousSibling.textContent) - 1;
      e.target.style.backgroundImage = "url('./img/downvoted.png')";
    })
    .catch((error) => {
      console.log(error);
    })
};