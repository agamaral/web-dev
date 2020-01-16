// não aceita repetição/ não indexada

const times = new Set();

times.add('vasco');
times.add('são paulo').add('palmeiras').add('corinstians');

times.add('flamengo');

times.add('vasco');

console.log(times);

console.log(times.size);

console.log(times.has('vasco'));

times.delete('flamengo');

console.log(times.has('flamengo'));

const nomes = ['raquel', 'lucas', 'julia', 'lucas'];

const nomesSet = new Set(nomes);

console.log(nomesSet);