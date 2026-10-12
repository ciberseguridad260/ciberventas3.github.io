// js/catalogo.js - Lógica e Interactividad para el Catálogo de TechPeru

document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo JavaScript del catálogo se ha enlazado de forma óptima!");

    // Buscamos todos los botones de compra que ya existen en el HTML
    const buyButtons = document.querySelectorAll('.btn-buy');

    // Le agregamos la acción interactiva de alerta a cada uno de ellos
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Buscamos el título <h4> del producto correspondiente a ese botón
            const productCard = event.target.closest('.product-card');
            const productTitle = productCard.querySelector('h4').innerText;
            
            // Lanzamos el mensaje emergente en pantalla
            alert(`¡Excelente elección! Has añadido "${productTitle}" a tu lista de cotización en TechPeru.`);
        });
    });
});
