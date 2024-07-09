from logger_base import log
from conexion import Conexion

class CursorDelPool:
    def _init_(self):
        self._conexion = None
        self._cursor = None

    def _enter_(self):
        log.debug('Inicio del método with y _enter_')
        self._conexion = Conexion.obtenerConexion()
        self._cursor = self._conexion.cursor()
        return self._cursor

    def _exit_(self, tipo_exception, valor_exception, detalle_exception):
        log.debug('Se ejecuta el método exit')
        if valor_exception:
            self._conexion.rollback()
            log.debug(f'Ocurrió una excepción: {valor_exception}')
        else:
            self._conexion.commit()
            log.debug('Commit de la transacción')
        self._cursor.close()
        Conexion.liberarConexion(self._conexion)

if _name_ == '_main_':
    with CursorDelPool() as cursor:
        log.debug('Dentro del bloque with')
        cursor.execute('SELECT * FROM persona')
        log.debug(cursor.fetchall())
