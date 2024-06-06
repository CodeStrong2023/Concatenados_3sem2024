
class Persona:

    def __init__(self, nombre, edad):
        self. nombre = nombre
        self. edad = edad

    # Sobreescribir metodo

    def __add__(self, other):
        return f'{self.nombre} {other.nombre}'


persona1 = Persona('Yvette', 24)
persona2 = Persona('Frites', 29)

# persona1.__add__(persona2) Sintaxis interna y automática

print(persona1 + persona2)
