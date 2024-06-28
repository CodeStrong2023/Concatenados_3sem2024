from logger_base import log

class Persona:
    def __init__(self,id_persona=None, nombre=None, apellido=None, email=None):
        self._id_persona = id_persona
        self._nombre = nombre
        self._apellido = apellido
        self._email = email

    def __str__(self):
        return f'''
            Id Persona: {self._id_persona},
            Nombre: {self._nombre},
            Apellido: {self._apellido},
            Email: {self._email}
        '''

    # Métodos Getters and Setters

    @property
    def id_persona(self):
        return self._id_persona

    @id_persona.setter
    def id_persona(self, id_persona):
        self._id_persona = id_persona

    @property
    def nombre(self):
        return self._nombre

    @id_persona.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def apellido(self):
        return self._apellido

    @id_persona.setter
    def apellido(self, apellido):
        self._apellido = apellido

    @property
    def email(self):
        return self._email

    @id_persona.setter
    def email(self, email):
        self._email = email


if __name__ == '__main__':
    persona1 = Persona(1, 'Franco', 'Pieroni', 'fpiero@mail.com')
    log.debug(persona1)
    persona2 = Persona(nombre='Jose', apellido='Lepez', email='jlepez@mail.com')
    log.debug(persona2)
    persona1 = Persona(id_persona = 1)
    log.debug(persona1)