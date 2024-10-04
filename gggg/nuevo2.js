document.getElementById('botonBienvenida').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre) {
        mensaje.textContent = `¡Bienvenido, ${nombre}!`;
    } else {
        mensaje.textContent = 'Debe ingresar su nombre.';
    }
});

//boton Limpiar
document.getElementById('botonLimpiar').addEventListener('click', function() {
    document.getElementById('nombre').value =''; //limpia el texto en pantalla
    document.getElementById('mensaje').textContent = ''; // limpia el mensaje en pantalla
});