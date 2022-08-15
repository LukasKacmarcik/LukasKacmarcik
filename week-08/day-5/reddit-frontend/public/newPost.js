const userImput = document.querySelector('#user_id');
if (typeof localStorage.getItem('userId') == typeof "string") {
  userImput.value = localStorage.getItem('userId');
};