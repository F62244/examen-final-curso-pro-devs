const {
    cambioMinimoMonedas,
    puedePartirse,
    TextEditor,
    encontrarConVecinos,
    caminosUnicos
} = require('../checkpoint');


describe('Problema del Cambio de Monedas', () => {
    test('Debe devolver la cantidad mínima de monedas necesarias para alcanzar el monto dado', () => {
        expect(cambioMinimoMonedas([1, 2, 5], 11)).toBe(3); 
    });

    test('Debe devolver -1 si no es posible obtener el monto exacto con las monedas disponibles', () => {
        expect(cambioMinimoMonedas([2], 3)).toBe(-1); 
    });

    test('Debe manejar correctamente casos con montos moderadamente grandes', () => {
        expect(cambioMinimoMonedas([1, 5, 10, 25], 100)).toBe(4); // 25+25+25+25
    });
});



describe('puede partirse - Partición Equitativa', () => {
    test('Debe devolver true si el array puede dividirse en dos subconjuntos con la misma suma', () => {
        expect(puedePartirse([1, 5, 11, 5])).toBe(true); 
    });

    test('Debe devolver false si no se puede dividir en dos subconjuntos iguales', () => {
        expect(puedePartirse([1, 2, 3, 5])).toBe(false); 
    });

    test('Debe devolver false cuando solo hay un número en el array', () => {
        expect(puedePartirse([7])).toBe(false);
    });

    test('Debe devolver false si la suma total es impar', () => {
        expect(puedePartirse([3, 3, 3])).toBe(false);
    });

    test('Debe manejar un array vacío correctamente', () => {
        expect(puedePartirse([])).toBe(false);
    });
});



describe('Editor de Texto con Deshacer/Rehacer', () => {
    test('Debe permitir insertar texto', () => {
        let editor = new TextEditor();
        editor.insertar("hola");
        expect(editor.obtenerTexto()).toBe("hola"); 
    });

    test('Debe permitir agregar más texto', () => {
        let editor = new TextEditor();
        editor.insertar("hola");
        editor.insertar(" mundo");
        expect(editor.obtenerTexto()).toBe("hola mundo"); 
    });

    test('Debe permitir borrar caracteres', () => {
        let editor = new TextEditor();
        editor.insertar("hola mundo");
        editor.eliminar(6);
        expect(editor.obtenerTexto()).toBe("hola"); 
    });

    test('Debe permitir deshacer la última acción', () => {
        let editor = new TextEditor();
        editor.insertar("hola mundo");
        editor.eliminar(6);
        editor.deshacer();
        expect(editor.obtenerTexto()).toBe("hola mundo"); 
    });

    test('Debe permitir rehacer la última acción deshecha', () => {
        let editor = new TextEditor();
        editor.insertar("hola mundo");
        editor.eliminar(6);
        editor.deshacer();
        editor.rehacer();
        expect(editor.obtenerTexto()).toBe("hola"); 
    });
});



describe('Encontrar con Vecinos', () => {
    test('Debe devolver el número con sus vecinos cuando está en medio', () => {
        expect(encontrarConVecinos([3, 5, 7, 10, 12, 15], 7)).toEqual([5, 7, 10]);
    });

    test('Debe devolver el número con solo el vecino siguiente si está al inicio', () => {
        expect(encontrarConVecinos([3, 5, 7, 10, 12, 15], 3)).toEqual([3, 5]);
    });

    test('Debe devolver el número con solo el vecino anterior si está al final', () => {
        expect(encontrarConVecinos([3, 5, 7, 10, 12, 15], 15)).toEqual([12, 15]);
    });

    test('Debe manejar el caso donde el array está vacío', () => {
        expect(encontrarConVecinos([], 7)).toBe("El número no está en la secuencia");
    });

    test('Debe manejar el caso donde el número es el único elemento', () => {
        expect(encontrarConVecinos([10], 10)).toEqual([10]);
    });
});



describe('Caminos Únicos', () => {
    test('Debe calcular correctamente el número de caminos en un tablero 3x7', () => {
        expect(caminosUnicos(3, 7)).toBe(28);
    });

    test('Debe calcular correctamente el número de caminos en un tablero 3x2', () => {
        expect(caminosUnicos(3, 2)).toBe(3);
    });

    test('Debe calcular correctamente el número de caminos en un tablero 1x1', () => {
        expect(caminosUnicos(1, 1)).toBe(1);
    });

    test('Debe calcular correctamente el número de caminos en un tablero 2x2', () => {
        expect(caminosUnicos(2, 2)).toBe(2);
    });

    test('Debe calcular correctamente el número de caminos en un tablero grande 10x10', () => {
        expect(caminosUnicos(10, 10)).toBe(48620);
    });

    test('Debe calcular correctamente el número de caminos en un tablero 1x5', () => {
        expect(caminosUnicos(1, 5)).toBe(1);
    });
});
