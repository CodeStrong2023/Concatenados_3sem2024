from Empleado import Empleado

class Gerente(Empleado): # La clase gerente hereda de la clase empleado

    def __init__(self, nombre, sueldo, departamento):
        super().__init__(nombre, sueldo)
        self.departamento = departamento

    def __str__(self):
        return f'Gerente [ Depertamento: {self.departamento}] {super().__str__()}'
    