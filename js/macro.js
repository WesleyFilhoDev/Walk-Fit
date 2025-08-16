const weightValue = document.getElementById("weight");
const heightValue = document.getElementById("height");
const ageValue = document.getElementById("age");
const objectiveValue = document.getElementById("opcoes");
const sexValue = document.getElementById("sexo");
const activeLevelValue = document.getElementById("active-level");
const calculateButton = document.getElementById("calculate");
const resultElement = document.getElementById("result");

let tmb = 0;
function calculateTBM() {
  const weight = parseFloat(weightValue.value);
  const height = parseFloat(heightValue.value);
  const age = parseInt(ageValue.value);
  const sexo = sexValue.value;

  if (
    isNaN(weight) ||
    weight <= 0 ||
    isNaN(height) ||
    height <= 0 ||
    isNaN(age) ||
    age <= 0
  ) {
    resultElement.innerHTML =
      "Por favor, preencha todos os campos corretamente.";
    return;
  }

  if (sexo === "masculino") {
    tmb = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (sexo === "feminino") {
    tmb = 444.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  } else {
    resultElement.innerHTML = "Selecione o sexo.";
    return;
  }

  resultElement.innerHTML = `Sua Taxa Metabólica Basal (TMB) é: <strong>${tmb.toFixed(
    2
  )}</strong> calorias/dia.`;
}

calculateButton.addEventListener("click", calculateTBM);
