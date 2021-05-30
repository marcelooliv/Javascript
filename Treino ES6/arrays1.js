const heroi = {
    name: 'Steve Rogers',
    nickname: 'Captain America'
}

//mergear propriedades de objetos, mas só é útil com array, com dicionario fica uma merda
Object.assign(heroi,{weapon: 'shield'});

console.log('\n',heroi)