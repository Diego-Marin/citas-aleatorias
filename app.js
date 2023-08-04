let elementoBoton = document.getElementById('boton-cambiar-cita');
let elementoFrase = document.getElementById('frase');
let elementoAutor = document.getElementById('autor');

// Para generar indices aleatorios.
function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  // Incluye el minimo pero no el maximo.
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// Seleccionar una cita aleatoria.
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  elementoFrase.textContent = `"${citas[indiceAleatorio].texto}"`;
  elementoAutor.textContent = citas[indiceAleatorio].autor;
}

// Para seleccionar una cita de forma aleatoria
// cuando se inicia la aplicacion.
let indiceAleatorioInicial = generarEnteroAleatorio(0, citas.length);
cambiarCita();

// Para cambiar la cita al hacer click en el boton.
elementoBoton.addEventListener('click', cambiarCita);