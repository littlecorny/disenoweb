/*OBJETOS 1

let alumno1={ //esto es un objeto, conjunto de propiedades y métodos
    nombre:"Juan",
    apellido:"Perez",
    edad:20,
    curso:"JavaScript",
    notas: [8.5, 9, 7.75, 6.5, 10] , //calcular nota media (esto es un array)
    salir: function() {
        console.log("El alumno " + this.nombre + " puede salir del aula");}, //esto es un método, que es una función dentro de un objeto
    media: function() {
        let suma=0;
        for (let i=0; i<this.notas.length; i++){
            suma+=this.notas[i];
        }
        return suma /this.notas.length.toFixed(2); //toFixed(2) para que muestre 2 decimales
    }
}
        console.log(alumno1.media());



alumno1.salir();//llamada a la función





let alumno2={
    nombre:"Maria",
    apellido:"Gomez",
    edad:22,
    curso:"Python",

    salir: function() {
        console.log("El alumno " + this.nombre + " puede salir del aula");
    }
};

alumno2.salir();
*/

/*

//no me sirve
let edades=[alumno1.edad, alumno2.edad];
console.log(edades);

for (let propiedad in alumno1) {
    propiedad = "nombre" + "edad" + "curso"
    alumno1 [propiedad] = "nombre"
   
    console.log(propiedad + ": " + alumno1[propiedad]);
}

for (let propiedad in alumno1) {
    console.log(propiedad + ": " + alumno1[propiedad]);
}
 Ejemplo práctico: Validar campos vacíos en un formulario
// Datos de un formulario de registro
const formulario = {
    nombre: "Ana",
    email: "",           // ❌ Vacío
    telefono: "123456789",
    edad: "",             // ❌ Vacío
    acepta: true
};

// Validar TODOS los campos automáticamente
console.log("🔍 Validando formulario...");

let camposVacios = [];
let totalCampos = 0;

for (let campo in formulario) {
    totalCampos++;
    
    // Verificar si está vacío
    if (formulario[campo] === "" || formulario[campo] === null) {
        camposVacios.push(campo);
        console.log("❌ " + campo + ": VACÍO");
    } else {
        console.log("✅ " + campo + ": " + formulario[campo]);
    }
}

// Mostrar resumen final
console.log(`\n📊 RESUMEN: ${totalCampos - camposVacios.length}/${totalCampos} campos completos`);

if (camposVacios.length > 0) {
    console.log("⚠️🐡🐌🦐 Faltan: " + camposVacios.join(", "));
} else {
    console.log("🎉 ¡Formulario completo! 🐱‍🐉🐱‍💻🐱‍👤🐱‍🚀");
}

*/

/*ESTO ES IMPORTANTE

//añadir propiedad
alumno1.edad=25;
alumno1.telefono=653763397;

alumno1.asignatura="matematicas";

console.log(alumno1);

//borrar propiedad
delete alumno1.telefono;
console.log("Sin teléfono:", alumno1);
console.log("Telefono", alumno1.telefono);


//productos
let productos = [

id1= {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
    disponible: true
},

id2= {
    nombre: "Portátil 15 pulgadas",
    precio: 800,
    disponible: true
},

id3= {
    nombre: "Tablet 10 pulgadas",
    precio: 400,
    disponible: false
},

];

console.log("Tengo " + productos.length + " productos");

*/

///////////////////////

//Trabajo

let trabajadores = [
    {
        id: 1,
        nombre: "Carlos",
        puesto: "Desarrollador",
        salario: 50000
    },
    {
        id: 2,
        nombre: "Ana",
        puesto: "Diseñadora",
        salario: 45000
    },
    {
        id: 3,
        nombre: "Luis",
        puesto: "Product Manager",
        salario: 60000
    }
];

for (let i = 0; i < trabajadores.length; i++) {
    const datos = trabajadores[i];

    let suma=datos.salario;
    console.log(suma)
}
