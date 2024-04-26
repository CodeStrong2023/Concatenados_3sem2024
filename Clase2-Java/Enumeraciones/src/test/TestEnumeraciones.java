package test;

import enumeraciones.Continentes;
import  enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1: "+Dias.LUNES);
        System.out.println("Dia 2: "+Dias.MARTES);
        System.out.println("Dia 3: "+Dias.MIERCOLES);
        System.out.println("Dia 4: "+Dias.JUEVES);
        System.out.println("Dia 5: "+Dias.VIERNES);
        System.out.println("Dia 6: "+Dias.SABADO);
        System.out.println("Dia 7: "+Dias.DOMINGO);
        
        indicarDiaSemana(Dias.MARTES);//Las enumeraciones se tratan como cadenas
        indicarDiaSemana(Dias.LUNES);
        indicarDiaSemana(Dias.MIERCOLES);
        indicarDiaSemana(Dias.JUEVES);
        indicarDiaSemana(Dias.VIERNES);
        indicarDiaSemana(Dias.SABADO);
        indicarDiaSemana(Dias.DOMINGO);
        
        System.out.println("Continente No. 1: "+Continentes.AFRICA);
        System.out.println("Nro. de paises en el 1to. continentes: "+Continentes.AFRICA.getPaises());
        System.out.println("Nro. de habitantes en el 1to. continentes: "+Continentes.AFRICA.getHabitantes());
        
        System.out.println("Continente No. 2: "+Continentes.EUROPA);
        System.out.println("Nro. de paises en el 2to. continentes: "+Continentes.EUROPA.getPaises());
        System.out.println("Nro. de habitantes en el 2to. continentes: "+Continentes.EUROPA.getHabitantes());
        
        System.out.println("Continente No. 3: "+Continentes.ASIA);
        System.out.println("Nro. de paises en el 3to. continentes: "+Continentes.ASIA.getPaises());
        System.out.println("Nro. de habitantes en el 3to. continentes: "+Continentes.ASIA.getHabitantes());
        
        System.out.println("Continente No. 4: "+Continentes.AMERICA);
        System.out.println("Nro. de paises en el 4to. continentes: "+Continentes.AMERICA.getPaises());
        System.out.println("Nro. de habitantes en el 4to. continentes: "+Continentes.AMERICA.getHabitantes());
        
        System.out.println("Continente No. 5: "+Continentes.OCEANIA);
        System.out.println("Nro. de paises en el 5to. continentes: "+Continentes.OCEANIA.getPaises());
        System.out.println("Nro. de habitantes en el 5to. continentes: "+Continentes.OCEANIA.getHabitantes());
    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("Se agrego un dato que no corresponde");
        }
    }
    
}
