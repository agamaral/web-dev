const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

function chineses (f) {
    return f.pais === 'China';
}
const mulheres = f=> f.genero === "F";

const menorSalario = ( func, funcAtual) => {
    if (funcAtual.salario > func.salario) {
        return func;
    } else {
        return funcAtual;
    }
}

axios.get(url).then(response => {
    const funcionarios = response.data;

    //mulher chinesa do menor salário?
    const funcMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    console.log(funcMenorSalario);
})