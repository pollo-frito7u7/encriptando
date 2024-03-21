document.addEventListener('DOMContentLoaded', function() {
    console.log("Hola");

    function verificarCampos() {
        // Obtener los valores de los campos del formulario
        const nombreCarpeta = document.getElementById('idcarpeta').value;
        const textoOriginal = document.getElementById('encryptText').value;
        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmPassword').value;

        // Verificar si alguno de los campos está vacío
        if (nombreCarpeta === '' || textoOriginal === '' || contraseña === '' || confirmarContraseña === '') {
            alert('Por favor, complete todos los campos del formulario.');
            return false; // Detener la ejecución si hay campos vacíos
        }

        // Verificar si las contraseñas coinciden
        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden. Por favor, verifique.');
            return false; // Detener la ejecución si las contraseñas no coinciden
        }

        // Si se llega hasta aquí, los campos están llenos y las contraseñas coinciden
        return true;
    }

    function ocultarElemento(elemento) {
        elemento.style.display = 'none';
    }

    function mostrarElemento(elemento) {
        elemento.style.display = 'block';
    }

    function verificarContraseña() {
        const contraseñaIngresada = document.getElementById('passwordDisplay').value;
        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmPassword').value;

        if (contraseñaIngresada === contraseña && contraseñaIngresada === confirmarContraseña) {
            mostrarElemento(document.querySelector('.carpetaabierta')); // Mostrar la sección
            ocultarElemento(document.getElementById('mensajeContraseñaIncorrecta')); // Ocultar mensaje de contraseña incorrecta
            
            // Actualizar el texto desencriptado si la contraseña es correcta
            const textoDesencriptadoElement = document.querySelector('.textoDesencriptado');
            const textoOriginal = document.getElementById('encryptText').value;
            textoDesencriptadoElement.textContent = textoOriginal;

            // Agregar evento de copiar al botón "Copiar"
            document.querySelector('.copiar-button').addEventListener('click', copiarTextoDesencriptado);
        } else {
            ocultarElemento(document.querySelector('.carpetaabierta')); // Ocultar la sección
            mostrarElemento(document.getElementById('mensajeContraseñaIncorrecta')); // Mostrar mensaje de contraseña incorrecta
        }
    }

    // Función para copiar el texto desencriptado al portapapeles
    function copiarTextoDesencriptado() {
        const textoDesencriptado = document.querySelector('.textoDesencriptado').textContent;

        // Crear un elemento temporal de textarea para copiar el texto
        const textarea = document.createElement('textarea');
        textarea.value = textoDesencriptado;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Mostrar mensaje de éxito
        alert('Texto copiado al portapapeles');
    }

    // Función para ocultar la carpeta abierta
    function ocultarCarpetaAbierta() {
        ocultarElemento(document.querySelector('.carpetaabierta'));
        // Limpiar el campo de contraseña
        document.getElementById('passwordDisplay').value = '';
    }

    document.getElementById('creandocarpeta').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Verificar los campos del formulario
        if (!verificarCampos()) {
            return; // Detener la ejecución si hay campos vacíos o las contraseñas no coinciden
        }

        // Ocultar el audio y mostrar la carpeta
        ocultarElemento(document.querySelector('.cosasderelleno'));
        mostrarElemento(document.querySelector('.carpeta'));

        // Ocultar mensaje y otros elementos de cosasderelleno
        ocultarMensajeCosasDeRelleno();
    });

    document.getElementById('passwordDisplay').addEventListener('input', verificarContraseña);

    // Agregar evento para ocultar la carpeta al hacer clic en "Salir"
    document.querySelector('.guardar-salir-button').addEventListener('click', ocultarCarpetaAbierta);
});
