// js/login.js - Lógica y Validación para el Portal de Login de TechPeru

document.addEventListener('DOMContentLoaded', () => {
    console.log("¡El archivo JavaScript de Login se ha enlazado de forma óptima!");

    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Evitamos que la página se refresque automáticamente
            event.preventDefault();

            // Capturamos las credenciales ingresadas
            const userInput = document.getElementById('user').value.trim();
            const passInput = document.getElementById('pass').value;

            // 1. Validación básica de contraseña (ejemplo: mínimo 6 caracteres)
            if (passInput.length < 6) {
                alert("Error: La contraseña debe contener al menos 6 caracteres por seguridad.");
                return;
            }

            // Si pasa los filtros simulamos el ingreso exitoso
            alert(`¡Autenticación procesada!\nBienvenido al portal de TechPeru: ${userInput}`);
            
            // Redirigimos al usuario a la página principal después de iniciar sesión
            window.location.href = 'index.html';
        });
    }
});
