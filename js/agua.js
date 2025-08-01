const weightInput = document.getElementById("weight");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

function calculateWaterIntake() {
  const weight = parseFloat(weightInput.value);
  if (isNaN(weight) || weight <= 0) {
    resultDiv.innerHTML = "<p>Por favor, insira um peso válido.</p>";
    return;
  } else {
    const waterIntake = (weight * 0.035).toFixed(2);
    resultDiv.innerHTML = `<p>Você deve beber aproximadamente <strong>${waterIntake} litros</strong> de água por dia.</p>`;
  }
}

calculateButton.onclick = function () {
  calculateWaterIntake();
};
