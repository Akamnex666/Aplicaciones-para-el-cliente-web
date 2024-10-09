document.addEventListener("DOMContentLoaded", function() {
    const semesterSelect = document.getElementById("semester");
    const parallelSelect = document.getElementById("parallel");
    const studentCheckboxesDiv = document.getElementById("studentCheckboxes");
    const parallelContainer = document.getElementById("parallelContainer");
    const dateContainer = document.getElementById("dateContainer");
    const studentCheckboxesContainer = document.getElementById("studentCheckboxesContainer");
    const submitBtn = document.getElementById("submitBtn");

    // Función para llenar los paralelos según el nivel seleccionado
    semesterSelect.addEventListener("change", function() {
        const semester = this.value;

        // Limpiar el contenido anterior
        parallelSelect.innerHTML = "<option value='' style='color: gray;'>Seleccione un paralelo</option>"; 
        studentCheckboxesDiv.innerHTML = "";

        // Ocultar todos los campos inicialmente
        parallelContainer.style.display = "none";
        dateContainer.style.display = "none";
        studentCheckboxesContainer.style.display = "none";
        submitBtn.style.display = "none";

        if (semester) {
            // Mostrar el contenedor de paralelos
            parallelContainer.style.display = "block";

            // Llenar los paralelos A y B
            const parallels = ["A", "B"];
            parallels.forEach(parallel => {
                const option = document.createElement("option");
                option.value = parallel;
                option.textContent = `Paralelo ${parallel}`;
                parallelSelect.appendChild(option);
            });
        }
    });

    // checkboxes de estudiantes
    parallelSelect.addEventListener("change", function() {
        const parallel = this.value;

        // Limpiar el contenido anterior
        studentCheckboxesDiv.innerHTML = "";

        // Ocultar los checkboxes y el botón de submit inicialmente
        studentCheckboxesContainer.style.display = "none";
        submitBtn.style.display = "none";
        dateContainer.style.display = "block"; // Mostrar el campo de fecha

        if (parallel) {
            // Mostrar el contenedor de checkboxes
            studentCheckboxesContainer.style.display = "block";

            // Definir los estudiantes según el paralelo
            let students;
            if (parallel === "A") {
                students = [
                    "NATHALIA ARACELY ANGULO MEDRANDA",
                    "WILLIAM ANDRES CABRERA PALACIOS",
                    "CARLOS ALBERTO DELGADO CAMPUZANO",
                    "GONZALO ALEXANDER DELGADO MACIAS",
                    "ANTHONY ROMAN FUENTES CHONILLO",
                    "JORDY ALEXANDER FRANCO ROSADO",
                    "ROBINSON OMAR MOREIRA DELGADO",
                    "WALTHER JAVIER GUTIERREZ LOOR",
                    "MICHAEL AGUSTIN INTRIAGO BENITEZ",
                    "LUIS EMILIO FIGUEROA ARTEAGA"
                ];
            } else if (parallel === "B") {
                students = [
                    "EMILIO SLEIMEN CARDENAS AVILA",
                    "CARLOS JUNIOR CHILE SILVA",
                    "JESUS ARIEL MONTES TORO",
                    "LUIS ANTONIO MEDRANDA FLORES",
                    "MAYKEL JOSUE MENENDEZ VELEZ",
                    "MARCELO ISRAEL MEJIA CHAMORRO",
                    "ELISA ZHARICK RUIZ LAVAYEN",
                    "LENIN ALEXANDER SUAREZ CARRERA",
                    "VICTOR HUGO ZAMBRANO MARTINEZ",
                    "YEIKER ALEXANDER LOPEZ PACHAY",
                    "JERENY JOHNAYKER VERA MERO",
                    "CINTHIA DAYANNA ZAMBRANO GAVILANES"
                ];
            }
            students.forEach(student => {
                const label = document.createElement("label");
                label.innerHTML = `<input type="checkbox" name="student" value="${student}"> ${student}`;
                studentCheckboxesDiv.appendChild(label);
            });
            submitBtn.style.display = "block";
        }
    });
});
