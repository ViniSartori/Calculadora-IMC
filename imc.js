function calcular() {
    var nome = window.document.getElementById('nome').value    
    var peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var calcular = window.document.getElementById('calcular')
    var n1 = Number(peso.value)
    var n2 = Number(altura.value)
    var s = n1 / (n2 * n2)
    var s = s.toFixed(2)
    calcular.innerHTML = `Ola ${nome}, o seu IMC é de ${s}.`

    if (s <18.5) {
        calcular.innerText += ` Você está Abaixo do Peso.`;
    } else if (s >18.5 && s <24.99) {
        calcular.innerText += ` Você está com Peso Ideal.`;
    } else if (s >25 && s <29.99) {
      calcular.innerText += ` Você está com Sobrepeso.`;
    } else if (s >30 && s <34.99) {
        calcular.innerText += ` Você está com Obesidade Grau I.`;
    } else if (s >35 && s <39.99) {
        calcular.innerText += ` Você está com Obesidade Grau II.`;
    } else {
      calcular.innerText += ` Você está com Obesidade Grau III.`;
    }
}
  