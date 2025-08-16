const weightValue = document.getElementById("weight");
const heightValue = document.getElementById("height");
const ageValue = document.getElementById("age");
const objectiveValue = document.getElementById("opcoes");
const sexValue = document.getElementById("sexo");
const activeLevelValue = document.getElementById("active-level");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

function calculateTBM() {
  const weight = parseFloat(weightValue.value);
  const height = parseFloat(heightValue.value);
  const age = parseInt(ageValue.value);
  const sexo = sexValue.value;

  if (weight <= 0 || height <= 0 || age <= 0) {
    resultElement.innerHTML =
      "Por favor, preencha todos os campos corretamente.";
    return;
  }
}

calculateButton.addEventListener("click", calculateTBM);
