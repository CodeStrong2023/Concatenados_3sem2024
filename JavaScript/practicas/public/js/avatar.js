const mostrarReiniciar = document.getElementById('reiniciar');
const mostrarAtaque = document.getElementById('seleccionar-ataque');
const mostrarMensaje = document.getElementById('mensajes');
let ataqueJugador;
let ataqueEnemigo;
let personajes = document.getElementsByName('personaje');
let personajeSeleccionado = null;
let personajeEnemigo;
let resultado;
let spanVidasJugador = document.getElementById("vida-jugador");
let spanVidasEnemigo = document.getElementById("vida-enemigo");
let vidasJugador = 3;
let vidasEnemigo = 3;

document.addEventListener('DOMContentLoaded', function() {
    const mostrarBtn = document.getElementById('boton-reglas');
    const textoMostrado = document.getElementById('texto-reglas');
  
    mostrarBtn.addEventListener('click', function() {
        if(textoMostrado.style.display == 'block') {
            textoMostrado.style.display = 'none';
        } else if (textoMostrado.style.display == 'none'){
            textoMostrado.style.display = 'block';
        }
    });
});



function iniciarJuego(){
    deshabilitarBotonesAtaque();
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
    botonPersonajeJugador.addEventListener('click', habilitarBotonesAtaque);
    botonPersonajeJugador.addEventListener('click', mostrarJuego);
    

    let strVidasJugador = vidasJugador.toString();
    let strVidasEnemigo = vidasEnemigo.toString();

    spanVidasJugador.innerHTML = strVidasJugador;
    spanVidasEnemigo.innerHTML = strVidasEnemigo;
    
    let  botonPunio = document.getElementById('boton-punio');
    if(botonPunio){
        botonPunio.addEventListener('click', ataquePunio);
    }
    
    let  botonPatada = document.getElementById('boton-patada');
    if(botonPatada){
        
        botonPatada.addEventListener('click', ataquePatada);
    }
    
    let  botonBarrida = document.getElementById('boton-barrida');
    if(botonBarrida){
        botonBarrida.addEventListener('click', ataqueBarrida);
    }
    
    

}

function seleccionarPersonajeJugador(){ //tarea agregar activad a la funcion al alegior el personaje
    
    let spanPersonajeJugador = document.getElementById("personaje-jugador");

    for (personaje of personajes) {
        if (personaje.checked) {
            personajeSeleccionado = personaje.id;
            break;
        }
    }
    
    if (personajeSeleccionado == null){
        alert('Debes seleccionar un personaje');
    } else {
        alert('El personaje que elegiste fue: ' + personajeSeleccionado );
        spanPersonajeJugador.innerHTML = personajeSeleccionado;
        seleccionarPersonajeEnemigo();
    }

    
}

function seleccionarPersonajeEnemigo(){
    let numero_aleatorio = numeroRandom(1, 4); 
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");

    switch (numero_aleatorio) {
    case 1:
        spanPersonajeEnemigo.innerHTML = 'Aang';
        personajeEnemigo = 'Aang';
        break;
    case 2:
        spanPersonajeEnemigo.innerHTML = 'Katara';
        personajeEnemigo = 'Katara';
        break;
    case 3:
        spanPersonajeEnemigo.innerHTML = 'Toph';
        personajeEnemigo = 'Toph';
        break;
    case 4:
        spanPersonajeEnemigo.innerHTML = 'Zuko';
        personajeEnemigo = 'Zuko';
        break;
    }
  
}

function mostrarJuego() {
    
    mostrarAtaque.style.display = 'block';
    mostrarMensaje.style.display = 'block';
    
}

function ataquePunio() {
    ataqueJugador = 'Punio';
    ataqueAleatorioEnemigo();
}

function ataquePatada() {
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
}

function ataqueBarrida() {
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = numeroRandom(1, 3);

    switch(ataqueAleatorio){
    case 1:
        ataqueEnemigo = 'Punio';
        break;
    case 2:
        ataqueEnemigo = 'Patada';
        break;
    case 3:
        ataqueEnemigo = 'Barrida';
        break;
    }

    mostrarResultado();
    crearMensaje();
    finJuego();

}

 function mostrarResultado(){
    if (ataqueJugador == ataqueEnemigo){
        resultado = 'Empate';
    } else if (ataqueJugador == 'Punio'){
        switch(ataqueEnemigo){
        case 'Patada':
            resultado = 'Derrota😵‍💫';
            break;
        case 'Barrida':
            resultado = 'Victoria✌️';
            break;
        }
    } else if (ataqueJugador == 'Patada'){
        switch(ataqueEnemigo){
        case 'Punio':
            resultado = 'Victoria✌️';
            break;
        case 'Barrida':
            resultado = 'Derrota😵‍💫';
            break;
        }
    } else if (ataqueJugador == 'Barrida'){
        switch(ataqueEnemigo){
        case 'Punio':
            resultado = 'Derrota😵‍💫';
            break;
        case 'Patada':
            resultado = 'Victoria✌️';
            break;
        }
    } 


    if(resultado == 'Victoria✌️'){
        vidasEnemigo--;
        strVidasEnemigo = vidasEnemigo.toString();
        spanVidasEnemigo.innerHTML = strVidasEnemigo;

    } else if (resultado == 'Derrota😵‍💫'){
        vidasJugador--;
        strVidasJugador = vidasJugador.toString();
        spanVidasJugador.innerHTML = strVidasJugador;
    }

 }

 function  finJuego(){
    
    let sectionMensaje = document.getElementById('mensajes');

    let parrafo = document.createElement('p');

    if (vidasJugador == 0){

        parrafo.innerHTML= 'El personaje del enemigo ' + personajeEnemigo + ' ha ganado! 😵';
        sectionMensaje.appendChild(parrafo);
        deshabilitarBotonesAtaque();
        mostrarReiniciar.style.display = 'block';

    } else if (vidasEnemigo == 0){

        parrafo.innerHTML= 'Su personaje ' + personajeSeleccionado + ' ha ganado! 🎉';
        sectionMensaje.appendChild(parrafo);
        deshabilitarBotonesAtaque();
        mostrarReiniciar.style.display = 'block';
    }
 }

 function deshabilitarBotonesAtaque() {
    document.getElementById('boton-punio').disabled = true;
    document.getElementById('boton-patada').disabled = true;
    document.getElementById('boton-barrida').disabled = true;
}

function habilitarBotonesAtaque() {
    document.getElementById('boton-punio').disabled = false;
    document.getElementById('boton-patada').disabled = false;
    document.getElementById('boton-barrida').disabled = false;
}

 function crearMensaje(){
    let sectionMensaje = document.getElementById('mensajes');

    let parrafo = document.createElement('p');

    parrafo.innerHTML= 'Tu personaje '+ personajeSeleccionado +' atacó con ' + ataqueJugador + ', el personaje enemigo '+ personajeEnemigo +' atacó con ' + ataqueEnemigo + ', el resultado es: ' + resultado;

    sectionMensaje.appendChild(parrafo);
 }

 // Función 
 function numeroRandom(min, max){
    num =  Math.floor(Math.random() * (max - min + 1) + min);
    return num;
 }

 function reiniciarJuego() {
    // Reiniciar variables de juego
    vidasJugador = 3;
    vidasEnemigo = 3;
    personajeSeleccionado = null;
    personajeEnemigo = null;
    resultado = null;
    ataqueJugador = null;
    ataqueEnemigo = null;

    // Reiniciar elementos visuales y mensajes
    spanVidasJugador.innerHTML = vidasJugador.toString();
    spanVidasEnemigo.innerHTML = vidasEnemigo.toString();

    let spanPersonajeJugador = document.getElementById("personaje-jugador");
    spanPersonajeJugador.innerHTML = "";

    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");
    spanPersonajeEnemigo.innerHTML = "";

    let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.innerHTML = "";

    // Habilitar botones de ataque
    document.getElementById('boton-punio').disabled = false;
    document.getElementById('boton-patada').disabled = false;
    document.getElementById('boton-barrida').disabled = false;

    // Reiniciar juego: seleccionar personaje
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
    mostrarAtaque.style.display = 'none';
    mostrarMensaje.style.display = 'none';
    mostrarReiniciar.style.display = 'none';
    iniciarJuego();
}

// Tarea agregar las reglas: Seleccionar personajes, cada uno tiene 3 vidas, explicar que ataqué le gana a cual
window.addEventListener('load', iniciarJuego);



