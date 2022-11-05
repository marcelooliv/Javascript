const criaPessoa = (nome,sobrenome,idade) => {
    return{
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Mateus','Almeida','22')
const pessoa2 = criaPessoa('Marcelo','Oliveira','20')
const pessoa3 = criaPessoa('Miriam','Vieira','37')
const pessoa4 = criaPessoa('Izilda','Costa','66')

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

//usando THIS para referenciar os atributos do objeto, senão dá undefined
const pessoa5 = {
    nome: 'David',
    sobrenome: 'Miranda',
    idade: 22,
    fala() {
        console.log(`a minha idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade +=2;
    }
};

pessoa5.fala()
pessoa5.incrementaIdade()
pessoa5.fala()