
package test;

import domain.*;

public class testClaseObject {
    
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 5000);
        Empleado empleado2 = new Empleado("Juan", 5000);
        
        if(empleado1 == empleado2){ // Verificamos la referencia de memoria
            System.out.println("Tienen la misma referencia de memoria");
        }
        else{
            System.out.println("Tienen distinta referencia de memoria");
        }
        
        
        if(empleado1.equals(empleado2)){ // Verificamos el contenido
            System.out.println("Los objetos son iguales en contenido");
        }
        else{
            System.out.println("Los objetos son distintos en contenido");
        }
        
        if(empleado1.hashCode() == empleado2.hashCode()){ // Verificamos la referencia de memoria
            System.out.println("El valor del hashCode es igual");
        }
        else{
            System.out.println("El valor del hashCode es diferente");
        }
        
    }
    
}
