document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', function(event) {
        // Prevenir el envío real del formulario
        event.preventDefault(); 
        
        // Limpiar mensajes anteriores
        clearErrors();
        successMessage.textContent = '';
        
        // Obtener los valores de los campos
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const subject = form.querySelector('#subject');
        const message = form.querySelector('#message');
        let isValid = true;

        // 1. Validación del nombre
        if (name.value.trim() === '') {
            showError(name, 'El nombre es obligatorio.');
            isValid = false;
        }

        // 2. Validación del email
        if (email.value.trim() === '') {
            showError(email, 'El correo electrónico es obligatorio.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Por favor, ingresa un email válido.');
            isValid = false;
        }
        
        // 3. Validación del asunto
        if (subject.value.trim() === '') {
            showError(subject, 'El asunto es obligatorio.');
            isValid = false;
        }

        // 4. Validación del mensaje
        if (message.value.trim() === '') {
            showError(message, 'El mensaje no puede estar vacío.');
            isValid = false;
        }

        // Si todo es válido, muestra un mensaje de éxito
        if (isValid) {
            successMessage.textContent = '¡Gracias por contactarnos! Tu mensaje ha sido enviado.';
            form.reset(); // Limpia el formulario
        }
    });

    // Función para mostrar un error debajo del campo
    function showError(input, message) {
        const feedback = input.nextElementSibling;
        feedback.textContent = message;
        feedback.classList.add('error');
    }

    // Función para limpiar todos los mensajes de error
    function clearErrors() {
        const errorMessages = form.querySelectorAll('.form-feedback');
        errorMessages.forEach(function(msg) {
            msg.textContent = '';
            msg.classList.remove('error');
        });
    }

    // Función para validar el formato del email con una expresión regular
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
}); 