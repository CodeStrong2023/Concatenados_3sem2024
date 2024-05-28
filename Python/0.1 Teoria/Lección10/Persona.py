class Persona:
    # Contexto static
    contador_personas = 0 # Variable de clase

    @classmethod
    def generar_siguiente_valor(cls): # Método de clase
        cls.contador_personas += 1 # Vamos incrementando, el contador_personas se relaciona con la clase y no con el objeto, por eso no se reinicia
        return cls.contador_personas

    # Contexto dinamic
    def __init__(self, nombre ,edad): # Método Dunder init (Método Constructor)
        self.id_persona = Persona.generar_siguiente_valor()
        self.nombre = nombre
        self.edad = edad

    def __str__(self): # Método str (toString)
         return f'Persona [ID: {self.id_persona}, Nombre: {self.nombre}, Edad: {self.edad}]'
print('----------------------------------')
persona1 = Persona('Franco',29)
print(persona1)
persona2 = Persona('Fernando', 30)
print(persona2)
persona3 = Persona('Guido', 27)
print(persona3)
Persona.generar_siguiente_valor()
persona4 = Persona('Miguel', 64)
print(persona4)
print('----------------------------------')
print(f'Valor contador de personas: {Persona.contador_personas}')
