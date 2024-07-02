
package ar.com.system2023.mundopc;


public class Teclado extends DispositivoEntrada{
    
    // Atributos
    
    private final int contadorTeclados;
    private static int idTeclado;
    
    //Constructor
    
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.contadorTeclados = ++Teclado.idTeclado;
    }
    
    // To String

    @Override
    public String toString() {
        return "Teclado{" + "contadorTeclados=" + contadorTeclados +", " + super.toString() + '}';
    }
    
    
}
