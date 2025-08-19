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

  // Gorduras
  let fat = 0;
  if (objective === "perder-peso") {
    fat = weight * 0.8;
  } else if (objective === "manter-peso") {
    fat = weight * 1.0;
  } else if (objective === "ganhar-massa") {
    fat = weight * 1.2;
  }

  // Calorias de proteína e gordura
  const proteinCalories = protein * 4;
  const fatCalories = fat * 9;

  // Carboidratos = calorias restantes até o GET
  let remainingCalories = getValue - (proteinCalories + fatCalories);
  let carbs = remainingCalories / 4; // 1g carbo = 4 kcal

  // Mostrar tudo junto
  let mensagemFinal = "Esses são os valores ideais para sua dieta!";

  resultElement.innerHTML = `
  <div class="result-card">
    <h2>📊 Resultado da sua dieta</h2>
    <table class="result-table">
      <tr><td>🔥 <strong>TMB:</strong></td><td>${tmbValue.toFixed(
        2
      )} cal/dia</td></tr>
      <tr><td>⚡ <strong>GET:</strong></td><td>${getValue.toFixed(
        2
      )} cal/dia</td></tr>
      <tr><td>🍗 <strong>Proteínas:</strong></td><td>${protein.toFixed(
        2
      )}g</td></tr>
      <tr><td>🥑 <strong>Gorduras:</strong></td><td>${fat.toFixed(2)}g</td></tr>
      <tr><td>🍞 <strong>Carboidratos:</strong></td><td>${carbs.toFixed(
        2
      )}g</td></tr>
      <tr><td>📦 <strong>Total de Calorias:</strong></td><td>${(
        proteinCalories +
        fatCalories +
        carbs * 4
      ).toFixed(2)} cal/dia</td></tr>
    </table>
    <p class="motivacao">${mensagemFinal}</p>
  </div>
`;
}

calculateButton.addEventListener("click", () => {
  calculateMacros();
});
