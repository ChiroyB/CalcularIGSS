document.getElementById('form-jubilacion').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar los valor del formulario 
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const anios = parseInt(document.getElementById('anios').value);
    const salario = parseFloat(document.getElementById('salario').value);

    // Valisdaciones basicas
    if (edad < 60) {
        alert("Debe tener al menos 60 años para poder jubilarse.");
        return;
    }
    if (anios < 15) {
        alert("Debe haber cotizado al menos 180 meses (15 años) para recibir jubilación.");
        return;
    }

    // Calculo bsico de la jubilación
    const porcentaje = (anios >= 180 && anios <= 240) ? 0.5 : 0.7; // Ejemplo: 50% o 70%
    const jubilacion = salario * porcentaje;

    // Redirigir a la pgina de resultados con los datos en la URL 
    window.location.href = `resultado.html?nombre=${nombre}&edad=${edad}&anios=${anios}&salario=${salario}&jubilacion=${jubilacion}`;
});
