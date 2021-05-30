const avioes = ['F22', 'Destroyer', 'F51']

avioes.pop() //remove o ultimo elemento do array
avioes.shift() //remove o primeiro elemento
console.log(avioes)

avioes.push('F21') //adiciona F21 no final do array
avioes.unshift('F12') // adiciona F12 no começo do array
console.log(avioes)

delete avioes[1] //deleta o índice 1 do array, deixando o índice 1 vazio
console.log(avioes)
console.log(avioes.slice(0, 2))

