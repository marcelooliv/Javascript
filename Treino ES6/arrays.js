const herois = [];

herois.CaptainAmerica = {nome: 'Steve Roger', weapon: 'shield'}
herois.IronMan = {nome: 'Tony Stark', weapon: 'armor'}
console.log(herois)

//recupera as chaves do objeto
console.log('\npropriedades do objeto:', Object.keys(herois))

//recupera os valores das chaves do objeto
console.log('\nvalores das propiedades:', Object.values(herois))

//retorna um array de arrays
console.log('\nlista de propriedades e valores:', Object.entries(herois))