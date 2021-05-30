function processo (x, y){
        if(typeof x !== 'number' || typeof y !== 'number')
        throw new Error('is not a Number');       //aqui se houver algum erro na operação o throw vai reportar e parar a operação
                                                  //e criei um objeto de erro usando a função construtora Error
        return x+y;
}

try{        //tentando rodar um código q não tem certeza se vai dar erro ou não
    console.log(processo("a", 4))
}catch(error){      //se der erro, o 'catch' guarda o erro na variável entre parênteses e faz o que estiver dentro da chave dele
    console.log(error);
}finally{
    //esse comando sempre será executado, dando erro ou não
    /*exemplo de funcionamento: se abrir um arquivo no 'try' e tentar manipulá-lo,
                                e der erro em alguma parte ele para o processo e ja vai direto pro 'catch' e não vai fechar o arquivo
                                então aqui vc pode colocar o comando pra fechar o arquivo ou finalizar a conexão
    */
}
