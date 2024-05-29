
package mundopc;

import ar.com.system2023.mundopc.*;


public class mundoPc {
    
    public static void main(String[] args) {
        
        Monitor monitorAsus = new Monitor("Asus", 13); // Importar clase
        Teclado tecladoAsus = new Teclado("Bluetooth", "Asus");
        Raton ratonAsus = new Raton("Bluetooth", "Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);
        
        // Creamos objetos de diferente marca
        
        Monitor monitorGamer = new Monitor("Gamer", 32); // Importar clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        Monitor monitorLenovo = new Monitor("Lenovo", 19); // Importar clase
        Teclado tecladoLenovo = new Teclado("Cable", "Lenovo");
        Raton ratonLenovo = new Raton("Cable", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
        Monitor monitorMsi = new Monitor("Msi", 32); // Importar clase
        Teclado tecladoMsi = new Teclado("Bluetooth", "Msi");
        Raton ratonMsi = new Raton("Bluetooth", "Msi");
        Computadora computadoraMsi = new Computadora("Computadora Msi", monitorMsi, tecladoMsi, ratonMsi);
        
        Monitor monitorAsrock = new Monitor("Asrock", 17); // Importar clase
        Teclado tecladoAsrock = new Teclado("Bluetooth", "Asrock");
        Raton ratonAsrock = new Raton("Bluetooth", "Asrock");
        Computadora computadoraAsrock = new Computadora("Computadora Asrock", monitorAsrock, tecladoAsrock, ratonAsrock);
        
        Monitor monitorSamsung = new Monitor("Samsung", 44); // Importar clase
        Teclado tecladoLogitech = new Teclado("Bluetooth", "Logitech");
        Raton ratonRedDragon = new Raton("Bluetooth", "Red Dragon");
        Computadora computadoraSuperGamer = new Computadora("Computadora Super Gamer", monitorSamsung, tecladoLogitech, ratonRedDragon);
        
        Monitor monitorDell = new Monitor("Dell", 17); // Importar clase
        Teclado tecladoDell = new Teclado("Cable", "Dell");
        Raton ratonDell = new Raton("Cable", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);
        
        Monitor monitorNvidia = new Monitor("Nvidia", 44); // Importar clase
        Teclado tecladoNvidia = new Teclado("Bluetooth", "Nvidia");
        Raton ratonNvidia = new Raton("Bluetooth", "Nvidia");
        Computadora computadoraNvidia = new Computadora("Computadora Nvidia", monitorNvidia, tecladoNvidia, ratonNvidia);
        
        Monitor monitorIntel = new Monitor("Intel", 32); // Importar clase
        Teclado tecladoIntel = new Teclado("Bluetooth", "Intel");
        Raton ratonIntel = new Raton("Bluetooth", "Intel");
        Computadora computadoraIntel = new Computadora("Computadora Intel", monitorIntel, tecladoIntel, ratonIntel);
        
        Monitor monitorAmd = new Monitor("Amd", 32); // Importar clase
        Teclado tecladoAmd = new Teclado("Bluetooth", "Amd");
        Raton ratonAmd = new Raton("Bluetooth", "Amd");
        Computadora computadoraAmd = new Computadora("Computadora Amd", monitorAmd, tecladoAmd, ratonAmd);
        
        
        
        // Inicializamos un arreglo vacio
        
        Orden orden1 = new Orden();
        orden1.agregarComputadora(computadoraAsus);
        orden1.agregarComputadora(computadoraGamer);
        
         // Agregamos computadoras para llegar a los 10 elementos 
         
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraMsi);
        orden1.agregarComputadora(computadoraSuperGamer);
        orden1.agregarComputadora(computadoraDell);
        orden1.agregarComputadora(computadoraNvidia);
        orden1.agregarComputadora(computadoraIntel);
        orden1.agregarComputadora(computadoraAmd);
        orden1.agregarComputadora(computadoraAsrock);
        
        // Agregamos una mas para pasar el limite 
        
        orden1.agregarComputadora(computadoraAsrock);
        orden1.mostrarOrden();
        
        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas" , monitorAsus, tecladoGamer, ratonAsus);
        Orden orden2 = new Orden(); // Nueva lista
        orden2.agregarComputadora(computadorasVarias);
        orden2.mostrarOrden();
        
        // Crear mas objetos del tipo computadora con todos sus elementos
        // Completar una lista en el objeto orden que llegue a los 10 elementos
        // Probar de esta manera los métodos al máximo rendimiento
        
        
    }
    
}
