const datos = {
    nombre: "Democorp",
    direccion: "Los lobos # 8750, Santiago",
    telefono: "+56 9 95830719",
    email: "soporte@democorp.cl",
    website: "www.democorp.com"
};

const divDatos = document.getElementById('datos-empresa');

divDatos.innerHTML = `
    <h2>Datos de la Empresa</h2>
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Dirección:</strong> ${datos.direccion}</p>
    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
    <p><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></p>
    <p><strong>Sitio Web:</strong> <a href="https://liceovvh.cl" target="_blank">${datos.website}</a></p>
`;

const btnMostrar = document.getElementById('mostrar');
const btnOcultar = document.getElementById('ocultar');

btnMostrar.addEventListener('click', () => {
    divDatos.style.display = 'block';
});

btnOcultar.addEventListener('click', () => {
    divDatos.style.display = 'none';
});