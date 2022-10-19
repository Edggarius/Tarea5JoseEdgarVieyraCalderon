
let numx, numy, r;
numx = window.prompt("Dame el primer numero", "0");
parseFloat(numx);
numy = window.prompt("Dame el segundo numero", "0");
parseFloat(numy);
if(numx>numy){
    document.write(`<br/> <br/> El numero ${numx} es mayor que el numero ${numy}`);
}else if(numy>numx){
    document.write(`<br/> <br/> El numero ${numy} es mayor que el numero ${numx}`);
}else{
    document.write(`<br/> <br/> El numero ${numx} es igual que el numero ${numy}`);
}