document.addEventListener("DOMContentLoaded", function() {
    // Manejo del menú desplegable
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownMenu = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show'); // Alterna la visibilidad del menú
        dropbtn.classList.toggle('active'); // Añade la clase activa para la animación
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
                dropbtn.classList.remove('active');
            }
        }
    });

    // Acción de cerrar sesión
    document.querySelector('.logout').addEventListener('click', function() {
        // Redirigir a la página de login
        window.location.href = 'login.html'; // Cambia esta ruta según tu estructura de carpetas
    });
});
