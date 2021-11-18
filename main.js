function random(n){
    return (Math.floor(Math.random() * n + 1))
}

let imgTiempo = ["img/Lluvia.jpg", "img/Nublado.jpg", "img/Soleado.jpg"];

var hoy = new Date();
var diaHoy = hoy.getDate();
var mesHoy = hoy.getMonth();
var yearHoy = hoy.getFullYear();
var horaActual = hoy.getHours();
var minutos = hoy.getMinutes();
var horaText = document.getElementById("hour");
var pTiempo = document.getElementById("diaActual");


pTiempo.innerHTML += `${diaHoy} / ${mesHoy} + 1 / ${yearHoy}`
// horaText.innerHTML += `${horaActual}: ${minutos}`;
horaText.innerHTML += reloj();


function cambiar(){
    document.getElementById("imgTiempo").src = imgTiempo[random(3) - 1]
}


function reloj() {
    if(horaActual < 10) {
        horaActual = "0" + horaActual;
    }
    if(minutos < 10) {
        minutos = "0" + minutos;
    }

    miReloj = horaActual + " : " + minutos;
    return miReloj;
} 
