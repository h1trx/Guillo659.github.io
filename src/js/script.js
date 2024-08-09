fetch('https://l6s0tvkl-3000.use2.devtunnels.ms/')
.then(response => {
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.text(); // Interpretar la respuesta como texto
})
.then(data => {
    console.log(data); // Mostrar el contenido de la respuesta en la consola
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
