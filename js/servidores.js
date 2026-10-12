// js/servidores.js - Lógica e Interactividad para la sección de Servidores de TechPeru

document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo JavaScript de Servidores se ha enlazado de forma óptima!");

    // Seleccionamos todas las tarjetas de servidores disponibles en el HTML
    const serverCards = document.querySelectorAll('.product-card');

    serverCards.forEach(card => {
        // Hacemos que cambie el puntero del mouse para indicar que es clickeable
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', () => {
            // Extraemos los datos específicos de la tarjeta cliqueada
            const title = card.querySelector('.product-title').innerText;
            const specs = card.querySelector('.product-specs').innerText;
            const price = card.querySelector('.product-price').innerText;

            // Mostramos una alerta interactiva con el resumen técnico
            alert(`🖥️ DETALLES DE INFRAESTRUCTURA DE SERVIDOR:\n\n` +
                  `Model: ${title}\n` +
                  `Procesador / RAM: ${specs}\n` +
                  `${price}\n\n` +
                  `Tu solicitud ha sido guardada. Un ingeniero de TechPeru se comunicará para evaluar los requerimientos de tu Data Center.`);
        });
    });
});
