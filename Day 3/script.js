// Counter program

const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase-btn");
const countLabel = document.getElementById("count-label");
let count = 0;

increaseBtn.onclick = function () {
  count += 1;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    count -= 1;
    countLabel.textContent = count;
};
  
resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};
  