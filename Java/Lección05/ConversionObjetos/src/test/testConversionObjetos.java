
package test;

import domain.*;

public class testConversionObjetos {
    
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Matt", 5000, TipoEscritura.CLASICO);
        System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles()); // Si queremos acceder a métodos Escritor
        
        // Downcasting
        ((Escritor)empleado).getTipoEscritura(); // 1° Forma
        Escritor escritor = (Escritor)empleado; //  2° Forma
        escritor.getTipoEscritura();
        
        // Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
    
}
