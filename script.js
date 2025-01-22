document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');
    const button = document.getElementById('button');

    // Manejar el evento de click en el botón de agregar tarea
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar que recargue la página

        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert("Por favor, escribe algo.");
            return;
        }

        // Crear tarea directamente
        const li = document.createElement("li");
        li.innerText = taskText;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("delete-btn");
        li.appendChild(span);

        listContainer.appendChild(li);

        inputBox.value = ''; 
    });

    listContainer.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName === "LI") {
            target.classList.toggle("checked"); 
        } else if (target.tagName === "SPAN") {
            target.parentElement.remove(); 
        }
    });
});
