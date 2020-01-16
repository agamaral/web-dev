const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function () { // a cada 5 segundos, 14 significa as 14h (hora q fiz esse codigo), os dois asteriscos ignoram o mes e ano e o 2 significa terça feira;
    console.log('executando tarefa 1!', new Date().getSeconds()); //mostra os segundos exatos
})

setTimeout(function () {
    tarefa1.cancel();
    console.log('cancelando tarefa  1!');
},2000)

//setInmeniate
//setInterval

const regra = new schedule.RecurrenceRule();

regra.dayOfWeek = [new schedule.Range(1,5)];
regra.hour = 14;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa 2!', new Date().getSeconds())
})