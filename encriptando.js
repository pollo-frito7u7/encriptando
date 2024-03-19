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

    function ocultarAudioMostrarCarpeta() {
        // Ocultar el audio
        const audio = document.querySelector('.cosasderelleno audio');
        audio.style.display = 'none';

        // Mostrar la carpeta
        const carpeta = document.querySelector('.carpeta');
        carpeta.style.display = 'block';
    }

    function ocultarMensajeCosasDeRelleno() {
        // Ocultar el mensaje y otros elementos de cosasderelleno
        const cosasDeRelleno = document.querySelector('.cosasderelleno');
        cosasDeRelleno.style.display = 'none';
    }

    document.getElementById('creandocarpeta').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Verificar los campos del formulario
        if (!verificarCampos()) {
            return; // Detener la ejecución si hay campos vacíos o las contraseñas no coinciden
        }

        // Ocultar el audio y mostrar la carpeta
        ocultarAudioMostrarCarpeta();

        // Ocultar mensaje y otros elementos de cosasderelleno
        ocultarMensajeCosasDeRelleno();
    });
});
