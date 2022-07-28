// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const body = document.querySelector('body');
// html element select
const leftTab = document.createElement('div');
leftTab.innerHTML = `<select name="groceries" id="1"  size="4">  <option value="bread" >Bread</option>  <option value="milk">Milk</option>  <option value="orange">Orange</option>  <option value="tomato">Tomato</option> </select>`;

leftTab.classList.add('tab', 'left');

body.appendChild(leftTab);
////ACTIONS/////
const actions = document.createElement('div');
actions.className = 'actions';

const up = document.createElement('button');
const right = document.createElement('button');
const remove = document.createElement('button');
const down = document.createElement('button');

up.textContent = 'UP'
right.textContent = '>'
remove.textContent = 'X'
down.textContent = 'DOWN'

actions.appendChild(up);
actions.appendChild(right)
actions.appendChild(remove)
actions.appendChild(down)

body.appendChild(actions);
/////RIGHT TABLE/////
const rightTab = document.createElement('div');
rightTab.innerHTML = `<select name="groceries2" id="2" multiple size="4"></select>`;
rightTab.classList.add('tab', 'right');

body.appendChild(rightTab);
//Onclic events//
let selected = 0;

const selectLeft = document.getElementById('1');
const selectRight = document.getElementById('2');
const leftOptions = selectLeft.children;
leftOptions[selected].selected = true;

up.onclick = () => {
  if (selected > 0) {
    selected -= 1;
    leftOptions[selected].selected = true;
  }
}

right.onclick = () => {
  for (let i = 0; i < selectLeft.length; i++) {
    if (leftOptions[i].selected == true) {
      const movedItem = selectLeft.removeChild(leftOptions[i]);
      selectRight.appendChild(movedItem);
      movedItem.selected = false;
      if (leftOptions.length > 0) {
        selected = 0;
        leftOptions[selected].selected = true;
      }
    }
  }
}

remove.onclick = () => {
  for (let i = 0; i < selectLeft.length; i++) {
    if (leftOptions[i].selected == true) {
      selectLeft.removeChild(leftOptions[i]);
      if (leftOptions.length > 0) {
        selected = 0;
        leftOptions[selected].selected = true;
      }
    }
  }
}

down.onclick = () => {
  if (selected < leftOptions.length - 1) {
    selected += 1;
    leftOptions[selected].selected = true;
  }
}
