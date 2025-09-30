
let temperatura=35;

if(temperatura>30) {
    console.log("Muy caluroso");
} else if (temperatura>20) {
     console.log("Temperatura agradable");
} else if 
    (temperatura>10) {
     console.log("Fresco");
} else {
    (temperatura<10);
     console.log("Frío"); 
}

let edad=50;
console.log(edad >= 18 ? "Eres mayor de edad" : "NO eres mayor de edad");



let mayorDeEdad=false; 
let acompañado=true;
let carnet=true;
if ((carnet == true && acompañado == true) || mayorDeEdad == true){console.log ("Puedes entrar");} else {
    console.log("No puedes entrar")
}


let day = 2;
let diaSemana = "miércoles";
switch(day) {
    case 0:
        console.log("Hoy es lunes");
        break;
    case 1:
        console.log("Hoy es martes");
        break;
    case 2:
        console.log("Hoy es miércoles");
        break;
    case 3:
        console.log("Hoy es jueves");
        break;
    case 4:
        console.log("Hoy es viernes");
        break;
    default:
        console.log("buen finde"); 

}

//

let jugador = "Mario";
let puntos = 1250;
let moneda = "oro";

if (puntos>2000) {console.log("Maestro");

} else if (puntos>1000) {console.log("Experto");

} else if (puntos>500) {console.log("Intermedio");

} else if (puntos<500) {console.log("Novato")};

//

let oro=0;
switch(moneda) {
    case 0:
        puntos=puntos+=100;
        break;
    case 1:
        puntos=puntos+=50;
        break;
    case 2:
        puntos=puntos+25;
        break;
    default:
        console.log(+0);
}

//

console.log(jugador + " Nivel " + " Puntos " + puntos + " Bono " + moneda)

//


let estudiante = "Ana";
let examen = 7.5;
let trabajos = 8.2;
let asistencia = 85;

//

let notaFinal = (examen*0.6)+(trabajos*0.4)

//

if (notaFinal >= 9) {console.log("Excelente")
    
} else if (notaFinal >= 7) {console.log("Notable")
    
} else if (notaFinal >= 5) {console.log("Aprobado")

} else if (notaFinal >= 4.9) {console.log ("Suspenso")};

//

if (notaFinal >= 5 && asistencia >= 80) {console.log("aprobado")

} else (notaFinal <=4.9 && asistencia <=80) (console.log("No aprobado"));

//
let notaRedondeada = Math.ceil(notaFinal);

let finalCurso = (notaRedondeada >= 5 && asistencia >= 80)
console.log(finalCurso > 4.9 ? "curso no aprobado" : "curso aprobado");

//

let recomendacion = ""
switch(notaFinal) {

    case "Excelente":
        notaFinal >= 9;
        console.log("Perfecto!")
        break;
    case "Notable":
        notaFinal >= 7;
        console.log("Estupendo, eres mu listo pero la proxima mejor")
        break;

    case "Aprobado":
        notaFinal >= 5;
        console.log ("Por los pelos, a la próxima hay que estudiar más")
        break;

    case "Suspenso":
        notaFinal >= 3;
        console.log ("Chacho estabila")
        break;
        
}