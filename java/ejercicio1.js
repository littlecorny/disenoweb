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
