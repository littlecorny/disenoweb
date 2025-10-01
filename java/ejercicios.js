/*let numeros=[10, 20, 30, 40, 50]; //array



while (numero > 10) {
    resta= numero - 1;
    console.log(`restamos ${numero}, total: ${resta}`);
    numero--;
}
//
for (let numero= 10; numero > 20; numero--) {console.log(numero)}
*/


//ejercicio 1
function pares() {

    for(let numero=2; numero<=30;numero+=2) {console.log(numero)}};

pares()

//ejercicio 2
function countdown() {

    for(let numero=10; numero>=1;numero--) {console.log(numero)}};

countdown ()

//ejercicio 3

function arrayAnimales () {
    let animales=["perro", "gato", "conejo", "pajaro", "abeja", "león", "tigre", "pez", "mariposa", "polilla"];
    for(let ind=0; ind < animales.length; ind++) {console.log("Animal " + animales[ind])}};
arrayAnimales()

//ejercicio 4 
/*
function paresArray () {
    let numeros= [10,20,30,40,50,60];
    for(let ind=0; ind < numeros.indexOf());
};

console.log(miLista.indexOf("ondiole"))

*/


//tabla multi

function tablaMulti () {

    for (let numero=1;numero<=10;numero++)
    {console.log(numero*6)}};

tablaMulti()

//opcion2

function tablaX(x){
    for (let i = 1; i<=10;i++) 
    {console.log (i*x)}};

tablaX(3)

//opcion3

function tablaMul(numX) {

    for (let i= numX; i <= (numX*10); i+=numX) {
    console.log(`${numX} * ${i/numX} = ${i}.`);}}

tablaMul(7);