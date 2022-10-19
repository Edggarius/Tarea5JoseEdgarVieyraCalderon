var numx, numy, numz;
var r;

numx = window.prompt("Ingresa tu calificación 1","0");
parseFloat(numx);
numy = window.prompt("Ingresa tu calificación 2","0");
parseFloat(numy);
numz = window.prompt("Ingresa tu calificación 3","0");
parseFloat(numz);
r= (Number(numx)+Number(numy)+Number(numz))/3;



document.write(`<br/>Calif = ${numx} <br/>Calif2 = ${numy} <br/>Calif3 = ${numz} <br/>Tu promedio es: ${r}` );
if(r>=6.0 || r<=10){
    document.write(`<br/> <br/>Aprobaste rey` );
}else if(r<=5.9 || r>=0){
    document.write(`<br/> <br/>Reprobaste amigue` );
}else{
    document.write(`<br/> <br/>Oh no` );
}