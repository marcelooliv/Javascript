//elementos symbols são unicos, mesmo se possuírem o mesmo valor, e não serão enumeráveis

const symbol1 = Symbol('name')
const symbol2 = Symbol('name')

console.log('os dois symbols são iguais:', symbol1 == symbol2)

//unico uso útil que eu vi foi pra criar um 'enum':

const direction = {
    UP: Symbol('UP'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
    DOWN: Symbol('DOWN')
}