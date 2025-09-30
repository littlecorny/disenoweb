let miLista = []
let miLista2 = ["Ana", 25, true, "desarrolladora"];

console.log(miLista2[3]);


miLista2.length;
console.log(miLista2.length)

console.log(miLista2[miLista2.length -2])

miLista.push("holi","que sueño")
console.log(miLista[1]);
console.log(miLista);
miLista.unshift("adio");
console.log(miLista)

let ultimoElemento = miLista.pop();
console.log(ultimoElemento);
console.log(miLista)

console.log(miLista.indexOf("holi"))
console.log(miLista.indexOf("adio"))

console.log(miLista.includes("adio"))



miLista.splice(1,0,"ondiole")
console.log(miLista)
console.log(miLista.indexOf("ondiole"))

miLista.splice(0,1,"chao")
console.log(miLista)

miLista.forEach(function(elemento) {
  console.log("Holi", elemento);
});

/*map=modifica un arrray, los datos; te da algo nuevo


let contador=-1;
while (contador<=10) {
    console.log(contador)
    contador++;
}


let colores= ["rojo", "azul", "verde", "amarillo"];
let posicion= 0;
while (posicion < colores.length) {
    console.log(`Color ${posicion + 1}: ${colores[posicion]}`);
    posicion++;
}

let numero=0;
let suma=0;

while (suma < 20) {
    suma= suma + numero;
    console.log(`sumamos ${numero}, total: ${suma}`);
    numero++;
}

for (numero=0; numero<3; numero++) {console.log(numero)}*/




let numero=10;
while (numero>0) {
    console.log(numero)
    numero--;
}

while (numero > 10) {
    resta= numero - 1;
    console.log(`restamos ${numero}, total: ${resta}`);
    numero--;
}
//
for (let numero= 10; numero > 20; numero--) {console.log(numero)}
//
for (let numero1=1; numero1 <= 3; numero1++) {console.log(numero1)}

//
let animales = ["perro", "gato", "pajaro", "conejo"];

for (let i = 0; i < animales.length; i++) {
    console.log(`Animal ${i + 1}: ${animales[i]}`);
};


let numeros=[10, 20, 30, 40, 50];
let suma = 0;

for (let i=0; i< numeros.length;i++) {
    suma += numeros[i]
    console.log(`Suma parcial: ${suma}`);
}