// No cambiar nombre de funciones.

function cambioMinimoMonedas(monedas, monto) {
    /*
    Dado un conjunto de monedas con diferentes denominaciones y un monto objetivo (monto),
    implementa la función cambioMinimoMonedas(monedas, monto) que determine el 
    mínimo número de monedas necesarias para obtener exactamente ese monto.

    - Si es posible alcanzar el monto con las monedas disponibles, la función debe devolver 
      el número mínimo de monedas necesarias.
    - Si no es posible formar el monto exacto, la función debe devolver -1.

    Ejemplo:
    cambioMinimoMonedas([1, 2, 5], 11) → 3  (5 + 5 + 1)
    cambioMinimoMonedas([2], 3) → -1  (No se puede obtener 3 con solo monedas de 2)
    */
 //tu codigo:

    
}


function puedePartirse(nums) {
    // Dado un array de números enteros positivos, esta función determina si es posible dividir el conjunto
    // en dos subconjuntos disjuntos cuya suma sea exactamente la misma.

    // Consideraciones:
    // 1️ Si la suma total de los elementos es impar, no es posible hacer la partición y la función retorna `false`.
    // 2️ Si la suma es par, el problema se reduce a determinar si existe un subconjunto cuya suma sea igual a la mitad de la suma total.
    // 3️ Se utiliza una técnica de programación dinámica para explorar todas las posibles sumas alcanzables con los elementos del array.
    
    // tu codigo:

  
}


class TextEditor {
    // Clase `TextEditor` que representa un editor de texto simple.
    // 
    // Este editor permite realizar las siguientes acciones:
    // - **Agregar texto** al final del contenido.
    // - **Eliminar caracteres** desde el final del texto.
    // - **Deshacer la última acción** realizada (ya sea una inserción o eliminación).
    // - **Rehacer una acción deshecha** previamente.
    // - **Obtener el texto actual** del editor.
    //
    // El editor mantiene un historial de cambios para permitir las funciones de deshacer y rehacer.
    
    constructor() {
        // Inicializa el estado del editor.
        // con texto string, historial tiene que ser un array, futuro tambien un array
      
    }

    insertar(texto) {
        // Agrega el texto proporcionado al final del contenido del editor.
        
    }

    eliminar(n) {
        // Elimina los últimos `n` caracteres del texto.
        // Si `n` es mayor que la longitud del texto actual, elimina todo el contenido.
       
    }

    deshacer() {
        // Revierte la última acción realizada.
       
    }

    rehacer() {
        // Restaura la última acción deshecha.
 
    }

    obtenerTexto() {
        // Devuelve el texto actual del editor.
     
    }
}





function encontrarConVecinos(lista, numero) {
    // Dada una lista de números y un número específico, la función `encontrarConVecinos(lista, numero)`
    // debe encontrar el número en la lista y devolver un array con dicho número junto a sus vecinos 
    // (el número anterior y el número siguiente, si existen).
    // 
    // Si el número no se encuentra en la lista, la función debe devolver el mensaje: 
    // "El número no está en la secuencia".
    //
    // Ejemplos:
    // encontrarConVecinos([1, 2, 3, 4, 5], 3) → [2, 3, 4]
    // encontrarConVecinos([10, 20, 30, 40], 10) → [10, 20]
    // encontrarConVecinos([5, 15, 25], 50) → "El número no está en la secuencia"

    //tu codigo:


}




function caminosUnicos(filas, columnas) {
    // Un robot se encuentra en la esquina superior izquierda de un tablero de tamaño `filas x columnas`.
    // Solo puede moverse hacia la derecha o hacia abajo en cada paso.
    // Implementa la función `caminosUnicos(filas, columnas)` que devuelva el número total de caminos 
    // únicos que puede tomar el robot para llegar a la celda inferior derecha.
    
    //tu codigo:


}










module.exports = {
    cambioMinimoMonedas,
    puedePartirse,
    TextEditor,
    encontrarConVecinos,
    caminosUnicos

};
