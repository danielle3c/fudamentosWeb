// Escuchar el evento 'submit' del formulario y ejecutar la función cuando el formulario se envíe
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario para procesar los datos manualmente

    // Obtener y limpiar los valores de los campos de entrada
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const celular = document.getElementById('celular').value.trim();

    // Validar  el RUT tenga el formato correcto usando la función
    if (!validarRUT(rut)) {
        alert('El RUT ingresado no es válido o tiene un formato incorrecto.');
        return; //flinalizar la accion cuando o no es  un rut valido 
    }

    // Verificar si el RUT ya existe en la tabla para evitar duplicados
    if (rutExisteEnTabla(rut)) {
        alert('El RUT ingresado ya ha sido registrado.');
        return; // Finaliza la funcion de rut si esta ya registrado
    }

    // Validar que el correo no esté registrado previamente usando la función 
    if (!validarCorreo(correo)) {
        alert('El correo electrónico ya ha sido registrado.');
        return; // Finaliza la funcion de correo si esta ya registrado
    }

    // Validar que el número de celular no esté registrado previamente usando la función 
    if (!validarCelular(celular)) {
        alert('El número de celular ya ha sido registrado.');
        return; // Finaliza la funcion de celular si esta ya registrado
    }

    // Seleccionar el cuerpo de la tabla donde se agregarán las nuevas filas
    const tablaBody = document.getElementById('tablaPersonas').querySelector('tbody');
    const nuevaFila = document.createElement('tr'); // Crear una nueva fila para la tabla

    // Insertar las columnas con los valores capturados en la nueva fila
    nuevaFila.innerHTML = `
        <td>${rut}</td>
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${correo}</td>
        <td>${celular}</td>
    `;

    // Añade  nuevas fila en tabla
    tablaBody.appendChild(nuevaFila);

    // Limpiar el formulrio para agregar otros regristro de otras personas 
    document.getElementById('form').reset();
});
