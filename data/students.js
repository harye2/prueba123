const STUDENTS = [
    "Samuel Acosta", "Ruth Aguirre", "Yorjana Aleman", "Michel Anaya", "Juan Betancur",
    "Daniela Arevalo", "Sara Berrocal", "Catalina Bran", "Sofia Cano", "Samuel Castro",
    "Linda Chica", "Saray Cochero", "Sofia Correa", "Samuel Delgado", "Isabella Escamilla",
    "Juan Espinal", "Samuel Garces", "Yeniffer Garcia", "Luis Garcia", "Jhon Garcia",
    "Esteban Gonzalez", "Susana Losada", "Nicol Mangonez", "Angela Martinez", "Juan Martinez",
    "Mariana Mercado", "Jose Monterroza", "Sara Montiel", "Paulina Nuñez", "Avril Oviedo",
    "Dulce Oviedo", "Ximena Padilla", "Andres Palencia", "Julian Peñate", "Gustavo Pereira",
    "Leidys Perez", "Ana Perez", "Alice Ramos", "Alejandro Rivera", "Abraham Rodriguez",
    "Jhon Rojas", "Johan Salgado", "Sofia Sanchez", "Linda Santana", "Nathalia Santos",
    "Maria Torregrosa", "Darcy Urrutia", "Anna Viana"
];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
