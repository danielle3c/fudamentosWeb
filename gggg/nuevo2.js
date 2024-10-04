document.getElementById('botonBienvenida').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre) {
        mensaje.textContent = `¡Bienvenido, ${nombre}!`;
    } else {
        mensaje.textContent = 'Debe ingresar su nombre.';
    }
});