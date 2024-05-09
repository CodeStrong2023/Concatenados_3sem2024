package domain;

public class Persona {

    private String nombre;

    //Constructor
    public Persona(String nombre) {
        this.nombre = nombre;
    }

    //Getters and setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + '}';
    }

}
