function getInputValue() {
  const outputData = document.querySelector(".output");
  const zahl = document.querySelector("#num").value;
  outputData.innerHTML = 2023 - zahl;
}
