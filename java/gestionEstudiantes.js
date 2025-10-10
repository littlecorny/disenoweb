const alumnos = [
    {
        id: 1,
        nombre: "Juan Pérez",
        edad: 20,
        curso: "JavaScript",
        notas: [8.5, 9, 7.75, 6.5, 10],
        activo: true,
        email: "juan.perez@mail.com"
    },
    {
        id: 2,
        nombre: "María Gómez",
        edad: 22,
        curso: "Python",
        notas: [9, 8.5, 7, 9.5, 8],
        activo: false,
        email: "maria.gomez@mail.com"
    },
    {
        id: 3,
        nombre: "Luis Martínez",
        edad: 19,
        curso: "Java",
        notas: [7, 6.5, 8, 7.75, 9],
        activo: true,
        email: "luis.martinez@mail.com"
    }
];

//Funcion

console.log("LISTA ESTUDIANTES");

for (let i=0;i<alumnos.length;i++) {
    const est = alumnos [i];//le decimos que el array se recorra el indice de alumnos para que nos saque los datos, que los pondremos en el console.
    console.log("🐱‍👤 " + est.nombre + " " + est.edad + " años, " + "email: "+ est.email); //ahora los datos están metidos en la variable est.
}; //una variable tiene que imprimir dentro de un bucle o un método porque si no no conoce las variables declaradas

//Media notas

for (let i=0;i<alumnos.length;i++) {  //este "for" es para recorrer el array, que nos recorra la lista y coja los datos
    const est= alumnos [i]; //aquí decimos que la variable est es igual al array alumnos en la posición i, que es la que va a ir cambiando en cada vuelta del bucle.
    let suma= 0; //inicializamos la variable suma a 0 en cada vuelta del bucle para que nos sume las notas de cada alumno por separado.

    for (let a=0; a<est.notas.length; a++) { //este "for" es para recorrer el array de notas dentro del objeto est, que es el alumno actual en la vuelta del bucle.
        suma += est.notas[a]; //aquí sumamos las notas del alumno actual, que es est, en la posición a, que es la que va a ir cambiando en cada vuelta del bucle.
    }

    const media= suma / est.notas.length; //aquí calculamos la media haciendo la regla de tres. 
    console.log("📊 " + est.nombre + ": " + media.toFixed(2)); 

    for (let b=0; b<est.notas.length; b++) { 
        
    }   

}
