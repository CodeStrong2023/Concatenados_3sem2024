
package ar.com.system2023.mundopc;


public class Raton extends DispositivoEntrada{
    
    // Atributos
    
    private final int idRaton;
    private static int contadorRatones;
    
    //Constructor
    
    public Raton(String tipoEntrada, String marca) {
        // Llamamos a la clase padre con super
        super(tipoEntrada, marca);
        // Inicializamos el contador
        this.idRaton = ++Raton.contadorRatones;
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton +", " + super.toString() +  '}';
    }
    
    
    
}
