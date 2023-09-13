function changeBackground() {
  const redValue = document.getElementById("red").value;
  const greenValue = document.getElementById("green").value;
  const blueValue = document.getElementById("blue").value;

  document.body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}
