class Persona{ // Creamos una clase. Clase padre

    static contadorPersonas = 0; //Atributo estatico
    //email = 'Valor default email'; //Atributo no estatico

    static get MAX_OBJ(){ //Este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){ // Definimos un cosntructor, si no definimos un constructor
        this._nombre = nombre; // Se definirá automaticamente
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('Se a superado el máximo de objetos permitidos')
        }
        //this.idPersona = ++Persona.contadorPersona;
        //console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
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
        return this.idPersona+' '+this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }
    
    static saludar() {
        console.log('Saludos desde este método static');
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);

    }

}

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

let persona1 = new Persona('Richi','Core');
console.log(persona1.nombre);
persona1.nombre = 'Guido'
console.log(persona1.nombre);
let persona2 = new Persona('Leandro','Vivi');
console.log(persona2.apellido);
persona2.nombre = 'Rosario';
console.log(persona2._nombre);

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);
let persona3 = new Persona ('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

//Clase 8 Parte 7

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; No se puede modificar, ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());
let persona5 = new Persona('Lili', 'Paz');
console.log(persona5.toString());
