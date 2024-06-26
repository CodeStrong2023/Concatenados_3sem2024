
package ar.com.system2023.mundopc;


public class Orden {
    
    // Atributos
    
    private final int idOrden;
    private static int contadorOrdenes;
    private Computadora computadora[]; // Arreglo de objetos
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadora;
    
    // Constructor vacio
    
    public Orden() {
        
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
        
    }
    
    // Método para agregar una nueva computadora
    
    public void agregarComputadora(Computadora computadora) {
        
        if (this.contadorComputadora < Orden.MAX_COMPUTADORAS) {
            
            this.computadora[this.contadorComputadora++] = computadora;
            
        } 
        else {
            System.out.println("Has superado el límite " + Orden.MAX_COMPUTADORAS);
        }
               
    }
    
    public void mostrarOrden() {
        
        System.out.println("Orden #: " + this.idOrden);
        System.out.println("Computadoras de la orden #: " + this.idOrden);
        for (int i = 0; i < this.contadorComputadora; i++) {
            
            System.out.println(this.computadora[i]);
            
        }
    }
    
}
