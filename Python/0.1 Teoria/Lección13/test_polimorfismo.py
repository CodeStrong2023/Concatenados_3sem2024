from Empleado import Empleado
from Gerente import Gerente

def imprimir_detalles(objeto):
    # print(objeto)
    # De manera indirecta estamos llamando al str de la clase Empleado o Gerente
    print(type(objeto)) # Esto es para saber el tipo de dato que recibe
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)

empleado = Empleado('Yvette', 300000.00)
imprimir_detalles(empleado)

gerente = Gerente('Agus', 1000000.00, 'Dueño')
imprimir_detalles(gerente)
