const anonimo = process.argv.indexOf('-a') !== -1; //anonimo == true se a flag for '-a';
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('fala anonimo!\n');
} else {
    process.stdout.write('informe seu nome: ');
    process.stdin.on('data', data=> {
        const nome = data.toString().replace('\n','');
        process.stdout.write(`fala ${nome}!!\n`);
        process.exit();
    })
}