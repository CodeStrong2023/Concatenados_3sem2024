let x = 10; // Variable del tipo primitiva
console.log(x.lenght);
console.log('Tipos primitivos');

// 1° forma de crear un Objeto en JS
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 29,
    idioma: 'ES',
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minúsculas en mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function () { // Método o función en JavaScript
        return this.nombre + ' ' + this.apellido
    },
    get nombreEdad(){
        return 'El nombre es: ' + this.nombre + ', Edad: ' + this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

//  2° forma de crear un Objeto en JS

let persona2 = new Object(); // Debe crear un nuevo objeto en la memoria
// Luego podemos crear los atributos y métodos
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '0234122356';
console.log('Creamos un nuevo objeto');
console.log(persona2.telefono);

// Como acceder a las propiedades de los Objetos
console.log(persona['apellido']) // Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in ');
// Usamos un ciclo for in para acceder a la propiedad y luego a su valor
for(propiedad in persona){
    console.log(propiedad); // Propiedad
    console.log(persona[propiedad]); // Valor
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Pieroni'; // Cambiamos dinámicamente el valor de un objeto
delete persona.apellida // Borramos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: la mas sencilla: Concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre + ', ' + persona.apellido)

//Número 2: A traves del ciclo for in 
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Número 3: La función Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

// Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona); // Pasamos nuestro objeto y lo convierte en una cadena
console.log(personaString);

// Usamos el Get
console.log('Comenzamos a utilizar el método Get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método Get y Set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ // Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.telefono = '0124125678';
padre.nombre = 'Juan'; // Modificamos el nombre
console.log(padre);
console.log(padre.nombreCompleto()); // Utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com')
console.log(madre);
console.log(madre.telefono); // La propiedad no está definida
console.log(madre.nombreCompleto());

// Diferentes formas de crear objetos
// caso número 1 
let miObjeto = new Object(); // Esta es una opción formal
// caso número 2
let miObjeto2 = {}; // Esta opción es breve y recomendada

// caso String
let miCadena1 = new String('Hola');
// caso String 2 
let miCadena2 = 'Hola'; // Esta es la sintaxis simplificada y recomendada

// caso con números 1
let miNumero = new Number(1); // Esta forma no es recomendada
// caso con números 2
let miNumero2 = 1; // Sintaxis recomendada

// caso boolean 1
let miBoolean1 = new Boolean(false); // Esta forma no es recomendada
// caso boolean 2
let miBoolean2 = false; // Sintaxis recomendada

// caso Arreglos 1
let miArreglo1 = new Array(); //Formal
// caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

// caso function 1
let miFuncion1 = new function(){}; // Todo despues de new es considerado objeto
// caso function 2
let miFuncion2 = function(){}; // Notación simplificada y recomendada

// Uso de prototype
Persona3.prototype.telefono = '0223455689';
console.log(padre);
console.log(madre);
madre.telefono = '150223455689'
console.log(madre.telefono);

// Uso del método call 
let persona4 = {
    nombre: 'Franco',
    apellido: 'Pieroni',
    nombreCompleto2: function(titulo, telefono){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
       // return this.nombre + ' ' + this.apellido;
    }
}

let persona5 = {
    nombre: 'Guido',
    apellido: 'Pieroni'
}

// Método call permite llamar un método en un objeto que no tiene definido cierto método pasando directamente los argumentos
console.log(persona4.nombreCompleto2('Lic.', '1234567845'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '02246152356'));

// Método Apply permite llamar un método en un objeto que no tiene definido cierto método
// La única diferencia con el método call es la forma en que se pasan los argumentos
// En el método apply usaremos un arreglo para pasar los argumentos
let arreglo = ['Ing.', '0114523564'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));
