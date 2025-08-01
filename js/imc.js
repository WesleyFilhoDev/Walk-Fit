const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

calculateButton.onclick = function () {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convertendo cm para metros

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    resultDiv.textContent = "Por favor, insira valores válidos.";
    return;
  }

  const imc = weight / (height * height);
  //console.log("IMC calculado:", imc);

  let classification = "";
  if (imc < 18.5) {
    classification = "Abaixo do peso";
  } else if (imc < 25) {
    classification = "Peso normal";
  } else if (imc < 30) {
    classification = "Sobrepeso";
  } else if (imc < 35) {
    classification = "Obesidade grau I";
  } else if (imc < 40) {
    classification = "Obesidade grau II";
  } else {
    classification = "Obesidade grau III";
  }

  resultDiv.innerHTML = `
  <strong>Seu IMC:</strong> ${imc.toFixed(2)}<br>
  <strong>Classificação:</strong> ${classification}
`;
};
