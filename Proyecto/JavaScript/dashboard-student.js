document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    
    // Configuración del gráfico circular
    const attendanceChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Asistencia', 'Falta'],
            datasets: [{
                label: 'Porcentaje de Asistencia',
                data: [85, 15], // 85% de asistencia y 15% de falta
                backgroundColor: ['#36a2eb', '#ff6384'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // Manejo del menú desplegable
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownMenu = document.querySelector('.dropdown-content'); // Cambié a la clase correcta

    dropbtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show'); // Alterna la visibilidad del menú
        dropbtn.classList.toggle('active'); // Añade la clase activa para la animación
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
                dropbtn.classList.remove('active');
            }
        }
    });

    // Manejo del clic en "Cerrar sesión"
    const logoutLink = document.querySelector('.logout'); // Selecciona el enlace de cerrar sesión
    logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = 'login.html'; // Cambia a la ruta de tu página de inicio de sesión
    });
});
