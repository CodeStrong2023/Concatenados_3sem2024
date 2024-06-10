miFuncion(8, 2); // Esto se conoce como Hosting

function miFuncion(a, b){

    // console.log("Sumamos: " + (a + b));
    return a + b;

}

// Llamando a la función
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

// Declaramos una función del tipo expresión
let x = function(a, b){ return a + b}; // necesita cierre con punto y coma ;
resultado = x(5, 6); // al llamarla se pone la variable y parentesis
console.log(resultado);

//  Funciones del tipo self y invoking
(function(a, b){
    console.log('Ejecutando la función: '+ (a + b))
})(9, 6); // No se puede reutilizar

console.log(typeof miFuncion)

function miFuncionDos(a, b){
    console.log(arguments.length);
}

miFuncionDos(5, 7, 8, 10);

// toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto)

// Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b; 
resultado = sumarFuncionFlecha(5, 10); // Asignamos el valor a una variable
console.log(resultado)


// Argumentos y Parametros
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // Muestra el parametro de a
    console.log(arguments[1]); // Muestra el parametro de b
    console.log(arguments[2]); // Muestra el parametro de c
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5, 4, 13, 10, 9);
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {

        suma+= arguments[i]; // Arguments es para arreglos
        
    }
    return suma;
}
console.log(respuesta)

// Paso por valor (Se pasa una copia) 
// Tipos primitivos
let k = 10;
function cambiarValor(a){
    a = 20;
}

cambiarValor(k); 
console.log(k) // La función no modifica la variable k, sino a una copia

// Paso por referencia (Se pasa la referencia hexadecimal de la ubicacion de la variable en la memoria) 
const persona = {
    nombre: 'Fran',
    apellido: 'Piero'
}
// Se modificará la variable en su ubicación, es decir la variable original y no una copia
function cambiarValorObjeto(p1){
    p1.nombre = 'Guido';
    p1.apellido = 'Pieroni';
}

cambiarValorObjeto(persona);
console.log(persona);