const valor = Number(prompt('digite um número:'))

let titulo = document.getElementById('titulo')
let resultado = document.getElementById('resultado')

titulo.innerHTML = `seu número é: ${valor}`;
resultado.innerHTML = `o número é NaN: ${isNaN(valor)}<br>o número arredondado pra cima: ${Math.ceil(valor)}<br>o número
arredondado pra baixo: ${Math.floor(valor)}<br>raiz quadrada do número: ${valor**0.5}
<br>o número com duas casas decimais: ${valor.toFixed(2)}
<br>o número é inteiro: ${Number.isInteger(valor)}`
