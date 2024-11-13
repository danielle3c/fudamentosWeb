// La función será validada para que el número de celular no esté registrado previamente en la tabla
function validarCelular(celular) {
    // Selecciona todos los elementos <td> de la quinta columna (N° de Celular) en las filas del cuerpo de la tabla
    const tablaCelular = Array.from(document.querySelectorAll('#tablaPersonas tbody tr td:nth-child(5)'))
                    .map(td => td.textContent.trim()); // Crea un arreglo con el contenido de texto de cada celda de celular, eliminando espacios en blanco

  // Verifica si el correo ya está en el erreglo; si existe, devuelve false no es valido y devuelve elnumero  en el regristro     // Si no está en el arreglo, devuelve true (celular válido para registro)
     // Si no está en el arreglado, devuelve true y valida el correo para el regristro 
    return !tablaCelular.includes(celular);
}
