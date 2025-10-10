let boton=document.getElementById("boton");

boton.addEventListener("click", function() {
    alert("Has hecho click");
});


    let boton2=document.getElementById("boton2");

    boton2.addEventListener("click", function() {
        if (boton2.textContent == 'Texto original') {
        boton2.textContent = 'Texto cambiado';
        } else {
        boton2.textContent = 'Texto original';
        }
        });

         // Botón que va a cambiar el texto
    let boton3 = document.getElementById('boton3');
    boton3.addEventListener('click', function() {
    boton3.textContent = 'Texto cambiado';
    })



const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector(".importante");



let boton4 = document.getElementById('boton4');
let parrafo1 = document.querySelector('#p1');
boton4.addEventListener('click', function() {
parrafo1.style.backgroundColor = 'yellow';
});


let boton5 = document.getElementById("boton5");
boton5.addEventListener("click", function () {
    let parrafos = document.querySelectorAll("p");
    parrafos.forEach (function(parrafo) {
        parrafo.style.backgroundColor = "blue";
    });
});

let boton6 = document.getElementById("boton6");
boton6.addEventListener("click", ejemploSetTimeOut);
function ejemploSetTimeOut () {
    var texto = document.getElementById("demo-settimeout");
    texto.textContent = "Texto cambiado! Volverá en 2 segundos...";

    setTimeout(function() {
        texto.textContent = "Este texto cambiará en dos segundos...";
    
    }, 2000);
}

