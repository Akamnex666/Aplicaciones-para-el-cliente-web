document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        // Validación de usuarios y contraseñas
        if ((user === "e1317863445" && password === "1234") || 
            (user === "p1317863445" && password === "abcd")) {
            if (user === "e1317863445") {
                window.location.href = "dashboard-student.html"; // Redirigir a dashboard de estudiante
            } else if (user === "p1317863445") {
                window.location.href = "dashboard-teacher.html"; // Redirigir a dashboard de profesor
            }
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
