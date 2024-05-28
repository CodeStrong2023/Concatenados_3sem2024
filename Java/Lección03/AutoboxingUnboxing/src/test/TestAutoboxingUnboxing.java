package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
        Clases envolventes de tipos primitivos
        int = la clase envolvente es Integer
        long = la clase envolvente Long
        float = la clase envolvente Float
        double = la clase envolvente Double
        boolean = la clase envolvente Boolean
        byte = la clase envolvente Byte
        char = la clase envolvente Character
        short = la clase envolvente Short
        */
        
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo objet con la clase Integer
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing
        
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
