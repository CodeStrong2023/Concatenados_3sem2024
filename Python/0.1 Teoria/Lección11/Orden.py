from Producto import Producto


class Orden:
    contador_ordenes = 0

    def __init__(self, productos):
        Orden.contador_ordenes += 1
        self.id_orden = Orden.contador_ordenes
        self._productos = list(productos)

    def agregar_producto(self, producto):
        self._productos.append(producto)  # Esto es para agragar un nuevo producto

    def calcular_total(self):
        total = 0  # Variable temporal para almacenar el total temporal
        for producto in self._productos:
            total += producto.precio
        return total

    def __str__(self):
        productos_str = ''
        for producto in self._productos:
            productos_str += producto.__str__()+'|'
        return f'Orden: {self.id_orden}, \nProducto: {productos_str}'


if __name__ == '__main__':
    producto1 = Producto('Camiseta', 100.00)
    producto2 = Producto('Pantalon', 150.00)
    productos1 = [producto1, producto2]  # Lista de productos
    orden1 = Orden(productos1)  # Primer objeto orden pasando la lista de productos
    print(orden1)
    orden2 = Orden(productos1)
    print(orden2)

# Modificamos orden2 ingresando nuevos prodeuctos con sus nombres y precios
# Crear una nueva lista de productos y agregarla a la orden2

    producto3 = Producto('Guantes', 100.00)
    producto4 = Producto('Lentes', 200.00)
    producto5 = Producto('Sombrero', 125.00)
    producto6 = Producto('Joyeria', 300.00)

    productos3 = [producto3, producto4, producto5, producto6]
    orden2 = Orden(productos3)
    print(orden2)
