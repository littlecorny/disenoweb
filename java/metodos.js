let precio = 17.85;

//tipos de redondeo
console.log(Math.round(precio)); 
console.log(Math.ceil(precio)); //siempre hacia arriba
console.log(Math.floor(precio)); //siempre hacia abajo

let precioFinal= Math.round(precio * 100) / 100;
console.log(precioFinal)

//max min

let notas = [7, 8, 6, 7, 9, 7, 8];

console.log(Math.max(...notas));
console.log(Math.min(...notas));


//replace
let texto= "Hola, soy Ana y me gusta programar en Java";
let textoNuevo = texto.replace("Java", "JavaScript");
console.log(textoNuevo);

//split. sirve para separar texto en un array

let listaNombres= "Ana,Carlos,Pepe,Lorena";
let nombres = listaNombres.split("a")
console.log(nombres)

//toFixed (). Para limitar los decimales usados

let pi= 3.141592653589793;
console.log(pi.toFixed(4))

//FECHAS

let hoy= new Date();
console.log("Fecha completa", hoy)

console.log("Solo fecha", hoy.toDateString());

console.log("Fecha en español:", hoy.toLocaleDateString("es-ES"));

let año = hoy.getFullYear();
console.log("Año:", año);  // 2025

// Obtener el MES (¡CUIDADO! Los meses van de 0 a 11)
let mes = hoy.getMonth() + 1;  // +1 para que sea normal (1-12)
console.log("Mes:", mes);    

// Obtener el DÍA del mes
let dia = hoy.getDate();
console.log("Día:", dia);   

// Obtener la HORA
let hora = hoy.getHours();
console.log("Hora:", hora);

// Obtener los MINUTOS
let minutos = hoy.getMinutes();
console.log("Minutos:", minutos);


console.log(`Hoy es ${dia}/${mes}/${año} y son las ${hora}:${minutos}`);

//DIAS HASTA NAVIDAD
function diasHastaNavidad() {
    let hoy = new Date();
    let navidad = new Date(hoy.getFullYear(), 11, 25); // 25 de diciembre
    
    // Si ya pasó Navidad este año, calcular para el próximo
    if (hoy > navidad) {
        navidad = new Date(hoy.getFullYear() + 1, 11, 25);
    }
    
    // Calcular diferencia en días
    let diferencia = navidad.getTime() - hoy.getTime();
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    
    return dias;
}

// Uso

/*let diasNavidad = diasHastaNavidad();
console.log(`Faltan ${diasNavidad} días para Navidad! 🎄`);
alert(`Faltan ${diasNavidad} días para Navidad! 🎄`);

diasHastaNavidad()*/

function mostrarDias() {
    let dias = diasHastaNavidad();
    document.getElementById("resultado").innerHTML = `Faltan ${dias} días 🎄`;
}

//

// Función para sumar dos números
function sumar() {
    // Obtener los valores de los inputs
    let numero1 = parseInt(document.getElementById("numero1").value) ;
    let numero2 = parseInt(document.getElementById("numero2").value) ;
   
    // Calcular el resultado
    let resultado = numero1 + numero2;
   
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
 