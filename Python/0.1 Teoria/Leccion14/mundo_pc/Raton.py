from mundo_pc.Dispositivo_entrada import DispositivoEntrada


class Raton(DispositivoEntrada):

    contador_ratones = 0

    def __init__(self, marca, tipo_entrada):
        Raton.contador_ratones += 1
        self._id_raton = Raton.contador_ratones
        super().__init__(marca, tipo_entrada)

    def __str__(self):
        return f'Id: {self._id_raton}, Marca: {self.marca}, Tipo Entrada: {self.tipo_entrada}'


# Pruebas
if __name__ == '__main__':
    raton1 = Raton('HP', 'USB')
    print(raton1)
    raton2 = Raton('Razr', 'Bluetooth')
    print(raton2)
