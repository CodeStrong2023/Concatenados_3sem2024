
package ar.com.system2023.mundopc;


public class DispositivoEntrada {
    
    // Atributos
    private String tipoEntrada;
    private String marca;
    
    // Constructor
    public DispositivoEntrada (String tipoEntrada, String marca){
        
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
        
    }
    
    //Getter and Setter

    public String getTipoEntrada() {
        return this.tipoEntrada;
    }

    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    // To String

    @Override
    public String toString() {
        return "DispositivoEntrada{" + "tipoEntrada=" + tipoEntrada + ", marca=" + marca + '}';
    }
    
    
    
}
