const form = document.querySelector('.form');

form.addEventListener('submit', function (event){
    event.preventDefault();
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }
    const IMC = getIMC(peso, altura);
    if(IMC<18.5){
        setResultado('Abaixo do Peso', true)
    }else if(IMC>=18.5&&IMC<=24.9){
        setResultado('Peso normal', true)
    }else if(IMC>=25&&IMC<=29.9){
        setResultado('Sobrepeso', true)
    }else if(IMC>=30&&IMC<=34.9){
        setResultado('Obesidade grau 1', true)
    }else if(IMC>=35&&IMC<=39.9){
        setResultado('Obesidade grau 2', true)
    }else{
        setResultado('Obesidade grau 3', true)
    }
    
});


function getIMC(peso, altura){
    const imc = peso/(altura**2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isfalse){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if(!isfalse){ 
        p.classList.add('paragrafo-falso')
    }else{
        p.classList.add('paragrafo-verdadeiro')
    }
    
    resultado.appendChild(p);
    p.innerHTML = mensagem;
}