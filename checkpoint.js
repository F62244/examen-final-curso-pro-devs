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
    //
    // Tu código:

    monedas.sort((a,b)=> b - a);
    
    let cantidad = 0;

    for(let moneda of monedas){
        while(monto >= moneda){
            monto -= moneda;
            cantidad++ ;
        }
    }
    return monto === 0 ? cantidad : -1;

    
}


function puedePartirse(nums) {
    // Dado un array de números enteros positivos, esta función determina si es posible dividir el conjunto
    // en dos subconjuntos disjuntos cuya suma sea exactamente la misma.

    // Consideraciones:
    // Si la suma total de los elementos es impar, no es posible hacer la partición y la función retorna `false`.
    // Si la suma es par, el problema se reduce a determinar si existe un subconjunto cuya suma sea igual a la mitad de la suma total.
    // Se utiliza una técnica de programación dinámica para explorar todas las posibles sumas alcanzables con los elementos del array.
       //
    // Tu código:
  
    let sumaTotal = nums.reduce((a,b)=> a + b, 0);

        if(sumaTotal % 2 !== 0) return false;

        let objetivo = sumaTotal / 2;
        let posiblesSumas = new Set([0]);

        for(let num of nums){
            let nuevasSumas = new Set();
            
            for(let suma of posiblesSumas){
                let nuevaSuma = suma + num;

                if(nuevaSuma === objetivo) return true;
                nuevasSumas.add(nuevaSuma);
            }
            posiblesSumas = new Set([...posiblesSumas, ...nuevasSumas]);
        }
        return false;
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
      this.texto = "";
      this.historial = [];
      this.futuro = [];
    }

    insertar(texto) {
        // Agrega el texto proporcionado al final del contenido del editor.

        this.historial.push(this.texto);
        this.texto += texto;
        this.futuro = [];
        
    }

    eliminar(n) {

        if(n > this.texto.length) n = this.texto.length;
        this.historial.push(this.texto);

        this.texto = this.texto.slice(0,this.texto.length - n).trimEnd();
        this.futuro =[];
        // Elimina los últimos `n` caracteres del texto.
        // Si `n` es mayor que la longitud del texto actual, elimina todo el contenido.
       
    }

    deshacer() {
        if(this.historial.length > 0 ){
            this.futuro.push(this.texto);
            this.texto = this.historial.pop();
            
        } 
        // Revierte la última acción realizada.
       
    }

    rehacer() {
        // Restaura la última acción deshecha.
        if(this.futuro.length > 0){
            this.historial.push(this.texto);
            this.texto = this.futuro.pop();
        }
 
    }

    obtenerTexto() {
        // Devuelve el texto actual del editor.
        return this.texto;
     
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
    //
    // Tu código:

    let indice = -1;

    for(let i = 0; i < lista.length; i++){
        if(lista[i]=== numero){
            indice = i;
            break;
        } 
    }

    if( indice === -1) return "El número no está en la secuencia.";

    let resultado = [];

    if(indice > 0) resultado.push(lista[indice - 1]);
    resultado.push(lista[indice]);
    if(indice < lista.length - 1) resultado.push(lista[indice + 1]);

    return resultado;
}




function caminosUnicos(filas, columnas) {
    // Un robot se encuentra en la esquina superior izquierda de un tablero de tamaño `filas x columnas`.
    // Solo puede moverse hacia la derecha o hacia abajo en cada paso.
    // Implementa la función `caminosUnicos(filas, columnas)` que devuelva el número total de caminos 
    // únicos que puede tomar el robot para llegar a la celda inferior derecha.
       //
    // Tu código:

    let caminos = 1;

    let menor = Math.min(filas - 1, columnas - 1);
    let mayor = filas + columnas - 2;
   
    for(let i = 1; i <= menor; i++){
        caminos = (caminos*(mayor - i + 1)) / i;
    }
    return caminos;

}


// No modificar nada debajo de esta línea
// =======================================================================


module.exports = {
    cambioMinimoMonedas,
    puedePartirse,
    TextEditor,
    encontrarConVecinos,
    caminosUnicos

};
