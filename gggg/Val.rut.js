// Función para validar si el RUT ingresado es válido y tiene el formato correcto
function validarRUT(rut) {
    // Elimina los espacios en blanco del RUT y lo convierte a mayúsculas para asegurar uniformidad
    rut = rut.replace(/\s+/g, '').toUpperCase();
   
    // Define un patrón para verificar el formato del RUT (7 entre 8 dígitos, un - y un dígito de  entre 0-9  o sino sera una  letra K)
    const rutPattern = /^\d{7,8}-[0-9Kk]$/;
   
    // Si el RUT no coincide con el patrón esperado, devuelve false y devuelvara el regristro  el rut y vuelvera todo el inicio 
    if (!rutPattern.test(rut)) {
        return false; 
    }
   
    // Divide el RUT en dos partes: la parte numérica y el dígito verificador que sera entre 0-9 o letra sera K
    const [numero, verificador] = rut.split('-');
   
    // Verifica que el verificador sea un número o la letra K; si no, devuelve false  devuelvara el regristro  el rut y vuelvera todo el inicio
    if (!verificador || !/^[0-9Kk]$/.test(verificador)) {
        return false; 
    }

    // Calcula la suma ponderada de los dígitos del número RUT utilizando un algoritmo de validación
    const suma = [...numero].reverse().reduce((acc, digit, index) => {
        // Define el multiplicador en base al índice, repitiéndose en el patrón que muestra en codigo
        const multiplicador = [2, 3, 4, 5, 6, 7, 2, 3][index];
        return acc + (parseInt(digit) * multiplicador);
    }, 0);

    // Calcula el módulo 11 de la suma para obtener el dígito verificador
    const modulo = suma % 11;
    const calculado = 11 - modulo;

    // Determina el dígito verificador esperado según el cálculo (0 para 11, "K" para 10, o el número restante)
    let digitoCalculado = calculado === 11 ? '0' : calculado === 10 ? 'K' : calculado.toString();

    // Compara el dígito verificador calculado con el ingresado; si coinciden, devuelve true (RUT válido)
    return verificador.toUpperCase() === digitoCalculado;
}

// Función para verificar si el RUT ya está registrado en la tabla
function rutExisteEnTabla(rut) {
    // Selecciona todos los elementos <td> de la primera columna (RUT) en las filas del cuerpo de la tabla
    const tablaRUT = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(1)'))
                         .map(td => td.textContent.trim()); // Crea un arreglo con el contenido de texto de cada celda de RUT, eliminando espacios en blanco

    // Verifica si el RUT ya está en el arreglo; si existe, devuelve true (ya registrado); si no, devuelve false
    return tablaRUT.includes(rut);
}
