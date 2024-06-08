class Persona{ // Creamos una clase
    constructor(nombre, apellido){ // Definimos un cosntructor, si no definimos un constructor
        this._nombre = nombre; // Se definirá automaticamente
        this._apellido = apellido;
    }

    // Métodos Get and Set

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

}

let persona1 = new Persona('Franco','Pieroni');
console.log(persona1.nombre);
persona1.nombre = 'Guido'
console.log(persona1.nombre);
let persona2 = new Persona('Fernando','Vivori');
console.log(persona2.apellido);
persona2.nombre = 'Rosario';
console.log(persona2._nombre);

/* Cuando estamos trabajando con clases no se aplica el concepto de Hosting, 
   no es posible declarar objetos antes de definir la clase*/

class Empleado extends Persona{ // Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura, modificamos el comportamiento de algún método definido en la clase padre

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());