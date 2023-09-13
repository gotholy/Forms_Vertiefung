const outputElement = document.querySelector(".output");
let counterValue = 0;

function updateCounter() {
  outputElement.innerHTML = counterValue;
}

document.getElementById("plus1").addEventListener("click", function () {
  counterValue += 1;
  updateCounter();
});

document.getElementById("minus1").addEventListener("click", function () {
  counterValue -= 1;
  updateCounter();
});

document.getElementById("plus10").addEventListener("click", function () {
  counterValue += 10;
  updateCounter();
});

document.getElementById("minus10").addEventListener("click", function () {
  counterValue -= 10;
  updateCounter();
});

document.getElementById("plus100").addEventListener("click", function () {
  counterValue += 100;
  updateCounter();
});

document.getElementById("minus100").addEventListener("click", function () {
  counterValue -= 100;
  updateCounter();
});

document.getElementById("reset").addEventListener("click", function () {
  counterValue = 0;
  updateCounter();
});

document.getElementById("mal2").addEventListener("click", function () {
  counterValue *= 2;
  updateCounter();
});
