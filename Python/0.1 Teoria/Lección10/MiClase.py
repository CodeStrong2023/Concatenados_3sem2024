class MiClase:

    variable_clase = 'Esta es una variable de clase'

    def __init__(self, variable_instancia): # La variable instancia, da diferentes valores
        self.variable_instancia = variable_instancia

    # Los métodos estáticos se asocian a la clase y se utilizan a traves de ésta
    @staticmethod # Usamos un decorador, el método static no utiliza la palabra self ya que no referencia al objeto, sino a la clase
    def metodo_estatico():
        print(MiClase.variable_clase)

    @classmethod # El método de clase si recibe un contexto de clase
    def metodo_clase(cls): # El cls es una referencia a la clase
        print(cls.variable_clase)

    def metodo_instancia(self):
        self.metodo_clase()
        self.metodo_estatico()
        print(self.variable_clase)
        print(self.variable_instancia)


print(MiClase.variable_clase)
miClase1 = MiClase('Esta es una variable de instancia')
print(miClase1.variable_instancia)
print(miClase1.variable_clase)
miClase2 = MiClase('Esta es otra prueba de variable de instancia')
print(miClase2.variable_instancia)
print(miClase2.variable_clase)

MiClase.variable_clase2 = 'Valor de variable de clase 2' # La variable de clase se puede crear como atributo o llamando a la misma clase
print(MiClase.variable_clase2)
print(miClase1.variable_clase2)
print(miClase2.variable_clase2)

MiClase.metodo_estatico()

MiClase.metodo_clase()
miObjeto1 = MiClase('variable de instancia')
miObjeto1.metodo_clase()
miObjeto1.metodo_instancia()