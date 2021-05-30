
var operacao = process.argv[2];

var n1 = parseInt(process.argv[3]);
var n2 = parseInt(process.argv[4]);
var resultado = 0;
switch(operacao)
{

    case "soma":
        resultado = n1+n2;
        break;
    case "subtração":
        resultado = n1-n2;
        break;
    case "divisão":
        resultado = n1/n2;
        break;
    case "multiplicação":
        resultado = n1*n2;
        break;
    default:
       resultado = null;        
}
console.log(resultado);