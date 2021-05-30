const newObject = {
    nome_carro: 'Jetta',
    ano_de_lançamento: '2018'
}

//previne todas as alterações do objeto
Object.freeze(newObject)
console.log(newObject)

newObject.nome_carro = 'Camaro'
console.log('\n', newObject)
//////////////////////////////////////////////////////////////////////////////////////////////separa////////////////////
const banda = {
    nome: 'Bring Me the Horizon',
    melhor_album: "That's the Spirit ",
    melhor_musica: 'Drown'
}
console.log(banda)

//permite apenas alterar as propriedades existentes, não deixa deletar ou criar novas
Object.seal(banda)

banda.nome = 'Arctic Monkeys\n'
banda.melhor_album = 'AM\n'
banda.melhor_musica = '505'

//tentando criar uma nova propriedade no objeto "banda"
banda.segundaMelhorMusica = 'R U Mine?'
//tentando deletar uma propriedade
delete banda.nome;

//agora logando o objeto depois das mudanças, perceba que que só as alterações em propriedades existentes foram aplicadas
console.log(banda)