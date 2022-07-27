// You can work in the html or in a separate js file. Like:
// <script>
// 1)  Append the content of the last paragraph to the other paragraphs.
// 2)  Do the same again, but you should keep the cat strong.
const animal = document.querySelector('.animals');

const body = document.getElementsByTagName('body')[0];
const paragraphs = body.getElementsByTagName('p');

console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].innerHTML != animal.innerHTML) {
      paragraphs[i].innerHTML += ` ${animal.innerHTML}`;
    }
};