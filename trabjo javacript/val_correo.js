//la  Función sera  validado para  que el correo no esté registrado previamente en la tabla
function validarCorreo(correo) {
    // Selecciona todos los elementos <td> de la cuarta columna (Correo Electrónico) en las filas del cuerpo de la tabla
    const tablaCorreo = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(4)'))
            .map(td => td.textContent.trim()); // Crea un areglado el  con el contenido de texto de cada celda de correo, eliminando espacios en blanco

    // Verifica si el correo ya está en el erreglo; si existe, devuelve false no es valido y devuelve el correo en el regristro 
    // Si no está en el arreglado, devuelve true y valida el correo para el regristro 
    return !tablaCorreo.includes(correo);
}
