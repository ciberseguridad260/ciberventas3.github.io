// js/firewall.js - Lógica e Interactividad para la sección de Firewalls de TechPeru

document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo JavaScript de Firewall se ha enlazado de forma óptima!");

    // 1. Control del formulario de búsqueda de Firewall
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que la página se refresque
            const query = searchInput.value.trim();

            if (query !== "") {
                alert(`Filtrando equipos de seguridad perimetral para: "${query}"...`);
            } else {
                alert("Por favor, introduce el modelo de Firewall que estás buscando.");
            }
        });
    }

    // 2. Interactividad para las tarjetas de productos (simulación de cotización/clic)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.style.cursor = 'pointer'; // Cambia el cursor para indicar que es interactivo
        card.addEventListener('click', () => {
            const productTitle = card.querySelector('.product-title').innerText;
            alert(`Has seleccionado el equipo: \n${productTitle}\n\nUn asesor de ciberseguridad validará el stock de este producto.`);
        });
    });
});
