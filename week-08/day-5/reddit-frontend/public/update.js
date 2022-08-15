const urlParams = new URLSearchParams(window.location.search);
const postid = urlParams.get('postid');
const textArea = document.querySelector('textarea');
const url = document.querySelector('#url');
const form = document.querySelector('form');
form.action = `/api/posts/update/${postid}`

fetch(`/api/posts/get/${postid}`)
  .then(result => result.json())
  .then(data => {
    console.log(data);
    textArea.value = data[0].title;
    url.value = data[0].url;
  })