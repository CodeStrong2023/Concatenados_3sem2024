# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8')  # La w es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt. \n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('Como por ejemplo: acción, ejecución, y producción\n')
    archivo.write('Las letras son:\nr leer, \na anexa, \nw write, \nx crea un archivo')
    archivo.write('\nt esta es para texto o text, \nb es para archivos binarios, \nw+,r+ lee y escribe, \n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # Con esto se debe cerrar el archivo
# archivo.write('Todo quedó perfecto') este es un error ya que el archivo está cerrado