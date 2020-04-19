const container = document.getElementById("container");
const resetButton = document.getElementById("resetbutton");

function makeGrid(input) {
  container.innerHTML = '';
  rows = input;
  cols = input;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let newCell = document.createElement("div");
    container.appendChild(newCell).className = "grid-item";
    newCell.style.setProperty('opacity', 1);
    newCell.addEventListener('mouseenter', clear);
  };
};

function makeColor() {
  red = (Math.floor(Math.random() * 256));
  green = (Math.floor(Math.random() * 256));
  blue = (Math.floor(Math.random() * 256));
  return `rgb(${red}, ${green}, ${blue})`;
};

function clear(e) {
  currentOpacity = +(this.style.opacity);
  if (currentOpacity <= 0) return;
  this.style.setProperty('opacity', currentOpacity - 0.25); 
  if (currentOpacity === .75) {
    this.style.setProperty('background', makeColor());
  };
};

resetButton.addEventListener('click', function() {
  makeGrid(prompt("How large should the grid be?", 24));
});

makeGrid(24);