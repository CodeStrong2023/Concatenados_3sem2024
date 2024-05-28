
package ar.com.system2023.mundopc;


public class Monitor {
    
    // Atributos
    
    private final int idMonitor;
    private static int contadorMonitores;
    private String marca;
    private double tamano;
    
    // Constructor
    
    private Monitor() {
        
        this.idMonitor = ++Monitor.contadorMonitores;
        
    }
    
    public Monitor(String marca, double tamano) {
        this(); // llamado al constructor vacio
        this.marca = marca;
        this.tamano = tamano;
    }
    
    // Getter and Setter

    public String getMarca() {
        return 
                this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamano() {
        return this.tamano;
    }

    public void setTamano(double tamano) {
        this.tamano = tamano;
    }
    
    // Ingresamos manualmente el getIdMonitor
    
    public int getIdMonitor() {
        
        return this.idMonitor;
        
    }
    
    // To String

    @Override
    public String toString() {
        return "Monitor{" + "idMonitor=" + idMonitor + ", marca=" + marca + ", tamano=" + tamano + '}';
    }
    
    
}
