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
    tmb = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age; // corrigido valor base
  } else {
    resultElement.innerHTML = "Selecione o sexo.";
    return;
  }

  return tmb;
}

function calculateGET() {
  const activeLevel = activeLevelValue.value;
  let get = 0;

  if (activeLevel === "sedentario") {
    get = tmb * 1.2;
  } else if (activeLevel === "leve") {
    get = tmb * 1.375;
  } else if (activeLevel === "moderado") {
    get = tmb * 1.55;
  } else if (activeLevel === "intenso") {
    get = tmb * 1.725;
  } else if (activeLevel === "muito-intenso") {
    get = tmb * 1.9;
  }

  return get;
}

function calculateMacros() {
  const weight = parseFloat(weightValue.value);
  const objective = objectiveValue.value;
  const tmbValue = calculateTBM();
  const getValue = calculateGET();

  // Proteínas
  let protein = 0;
  if (objective === "perder-peso") {
    protein = weight * 2.2;
  } else if (objective === "manter-peso") {
    protein = weight * 1.6;
  } else if (objective === "ganhar-massa") {
    protein = weight * 1.8;
  }

  //Carboidratos
  let carbs = 0;
  if (objective === "perder-peso") {
  }

  // Mostrar tudo junto
  resultElement.innerHTML = `
    Taxa Metabólica Basal (TMB): <strong>${tmbValue.toFixed(
      2
    )}</strong> calorias/dia.<br>
    Gasto Energético Total (GET) é: <strong>${getValue.toFixed(
      2
    )}</strong> calorias/dia.<br>
    Proteínas por dia: <strong>${protein.toFixed(2)}g</strong>
  `;
}

calculateButton.addEventListener("click", () => {
  calculateMacros();
});
