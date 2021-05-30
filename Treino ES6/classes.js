//código usando function
/*
'use strict';

function Animal(qtdPatas){
    this.qtdPatas = qtdPatas;
}
function Cachorro(morde){
    Animal.call(this,4);
    this.morde = morde;
}
const pug = new Cachorro(false);
console.log(pug);
*/

//mesmo código usando classes
'use strict';

class Animal {
    constructor(qtdPatas){
        this.qtdPatas = 4;
    }
}
class Cachorro extends Animal {
       constructor(morde){
           super()
           this.morde = morde;
       }
}
const pug = new Cachorro(false);
console.log(pug);