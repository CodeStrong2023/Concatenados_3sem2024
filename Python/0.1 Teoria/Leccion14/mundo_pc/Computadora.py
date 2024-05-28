from mundo_pc.Monitor import Monitor
from mundo_pc.Raton import Raton
from mundo_pc.Teclado import Teclado


class Computadora:

    contador_computadoras = 0

    def __init__(self, nombre, monitor, teclado, raton):
        Computadora.contador_computadoras += 1
        self._id_computadora = Computadora.contador_computadoras
        self.nombre = nombre
        self.monitor = monitor
        self.teclado = teclado
        self.raton = raton
        self._raton = raton

    def __str__(self):
        return f'''
            {self.nombre}: {self._id_computadora}
            Monitor: {self.monitor}
            Teclado: {self.teclado}
            Ratón: {self.raton}
        '''


if __name__ == '__main__':
    teclado1 = Teclado('HP', 'USB')
    monitor1 = Monitor('HP', '15"')
    raton1 = Raton('HP', 'USB')
    computadora1 = Computadora('HP', teclado1, monitor1, raton1)
    print(computadora1)

    teclado2 = Teclado('Gamer', 'Bluetooth')
    monitor2 = Monitor('Acer', '27"')
    raton2 = Raton('Razr', 'Bluetooth')
    computadora2 = Computadora('Acer', teclado2, monitor2, raton2)
    print(computadora2)
