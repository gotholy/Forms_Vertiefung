function changeBackgroundColor() {
  const wrapper = document.querySelector(".wrapper");
  const colorInput = document.getElementById("color");

  const newColor = colorInput.value;

  wrapper.style.backgroundColor = newColor;
}

const form = document.getElementById("myColor");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  changeBackgroundColor();
});
