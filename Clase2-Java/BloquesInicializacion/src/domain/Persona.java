package domain;

public class Persona {

    private final int idPersona;
    private static int contadorPersonas;

    static { // Bloque de inicialización estático
        System.out.println("Ejecución del bloque estático");
        ++Persona.contadorPersonas;
        // idPersona = 10; No es estático un atributo, por esto tenemos un error
    }
    
    {//Bloque de inicialización NO estático (contexto dinámico)
        System.out.println("Ejecución del bloque NO estático");
        this: idPersona = Persona.contadorPersonas++; //Incrementamos el atributo
    }

    //Los bloques de incialización se ejecutan antes del contructor

    public Persona() {      
        System.out.println("Ejecución del constructor");
    }
    
    public int getdPersona(){
        return this.idPersona;
    }
}