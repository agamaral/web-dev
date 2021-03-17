console.log(this === global); //falso pq this aponta pra module.exports e nao para global

console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

console.log( exports === module.exports); //true!! :)

function logThis() {
    console.log('dentro de uma funcao...');
    console.log(this === exports);
    console.log(this === module.exports);
    //dentro de uma funcao, o this aponta pra globallll !!!! :0
    console.log(this === global);
    this.perigo = 'perigo will robinson!';
    
}

logThis();
