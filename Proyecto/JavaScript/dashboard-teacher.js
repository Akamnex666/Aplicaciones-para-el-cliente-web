document.addEventListener("DOMContentLoaded", function() {
    // Manejo del menú desplegable
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownMenu = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show'); // visibilidad del menú
        dropbtn.classList.toggle('active'); // 
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
        window.location.href = 'login.html'; 
    });
});
