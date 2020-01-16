//let e const
{
    var a = 2;
    let b = 3;
}
console.log(a); //consigo
//console.log(b); //undefined


//template String
const produto = 'iPad';
console.log(`${produto} é caro`);


//destructuring...
const [l, e, ...tras] = "Cod3r"

console.log(l, e , tras) // C o ['d', '3', 'r'];

const [x,y] = [1,2,3];
console.log(x,y);

const {idade, nome } = { nome: 'Ana', idade: 9}
console.log(idade, nome)