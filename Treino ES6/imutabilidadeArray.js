const user = {
    name: 'Virion',
    lastname: 'Eralith'
}

function getAge (berimbolo){
    return{
        ...berimbolo,
        age: '1000+'
    }
}

const newuser = getAge(user);

console.log(user,'\n')
console.log(newuser)

//fazendo esse paranauê todo só pra criar um novo objeto com as alterações desejadas sem modificar a referencia original