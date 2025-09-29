
/*vamos a crear una frase que primero ponga
Hola
Luego ponga Hola Pepe
después Hola Pepe estas
despues Hola Pepe estas en clase
 */


let mensaje2="Hola ";
console.log;
//concatena y asigna
mensaje2 +="Pepe";//ahora mensaje2 vale "Hola Pepe"
console.log(mensaje2);
//concatena y asigna
mensaje2 += " estas";
console.log(mensaje2);
//concatena y asigna
mensaje2 +=" en clase";
//mensaje para mostrar en terminal
console.log(mensaje2);
 


/*Vamos a enviar un paquete
El peso máximo permitido para envío estándar es 20 kg.
Para usar envío exprés no puede superar los 10 kg.
Los paquetes que pesen menos de 2 kg tienen descuento especial.
Además, se quiere comprobar si el paquete es considerado pesado (más de 30 kg).
nuestro paquete 1 pesa 5 kilos*/

let pesomax=20;
let express=10;
let especial=2;
let pesado=30;
let paquete=5;

console.log(paquete>pesomax)
console.log(paquete>=express)
console.log(paquete<=especial)
console.log(paquete>pesado)
