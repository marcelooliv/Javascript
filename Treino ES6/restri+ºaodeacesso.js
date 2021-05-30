//com function
'use restrict';

function Person(initialName) {
    let name = initialName;

    this.getName = function () {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }

}
const p = new Person('Dumbledore');

console.log(p);
console.log(p.name);
console.log(p.getName());
p.setName('Thiago');
console.log(p.getName());

//com classe
'use restrict'

class Person {
    #name = '';
    constructor(initialName){
        this.#name = initialName;
    }
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }
}
