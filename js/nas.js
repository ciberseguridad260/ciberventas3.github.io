// js/nas.js - Lógica e Interactividad para el Catálogo de Servidores NAS de TechPeru

document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo JavaScript de NAS se ha enlazado de forma óptima!");

    // 1. Control del formulario de búsqueda de equipos NAS
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que la página se reinicie
            const query = searchInput.value.trim();

            if (query !== "") {
                alert(`Filtrando sistemas de almacenamiento NAS para: "${query}"...`);
            } else {
                alert("Por favor, escribe el modelo de NAS o marca que deseas buscar.");
            }
        });
    }

    // 2. Interactividad para las tarjetas de productos (simulación de cotización de hardware)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.style.cursor = 'pointer'; // Visualizador interactivo de clic
        card.addEventListener('click', () => {
            const productTitle = card.querySelector('.product-title').innerText;
            const productPrice = card.querySelector('.product-price').innerText;
            alert(`Detalles del servidor NAS:\n\n📌 Modelo: ${productTitle}\n💰 Cotización: ${productPrice}\n\nUn especialista de TechPeru validará el stock de bahías y discos de almacenamiento.`);
        });
    });
});
