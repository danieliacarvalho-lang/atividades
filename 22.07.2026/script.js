const inputDividendo = document.querySelector("#dividendo");
const inputDivisor = document.querySelector("#divisor");
const btnCalcular = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", function () {
  try {
    // Converta os valores dos dois inputs para Number.
    const dividendo = Number(inputDividendo.value);
    const divisor = Number(inputDivisor.value);


    if (dividendo == '' || divisor == '') {
      throw new Error('Prencha os dois campos');
    }


    // Se o divisor for 0, lance:
    // throw new Error("Não é possível dividir por zero.");

    if (divisor === 0) {
      throw new Error('Não e´possível dividir por zero');
    }
    let resultado_divisao = dividendo / divisor

    resultado.textContent = resultado_divisao;
    resultado.classList.add('mensagem', 'sucesso');

    // Calcule dividendo / divisor.
    // Mostre o resultado na tela e use a classe "mensagem sucesso".
  } catch (erro) {
   resultado.textContent = erro;
   resultado.classList.add('erro');
    // Mostre "Erro: " junto de erro.message.
    // Use a classe "mensagem erro".
    // Envie o erro completo ao Console.
  }
});
