🟦🟥🟩🟨 SIMON DICE – Juego en Node.js
Un proyecto interactivo por consola desarrollado en JavaScript (Node.js) que recrea el clásico juego Simón dice, donde el jugador debe memorizar y repetir secuencias de colores cada vez más largas.

📌 Descripción del proyecto
Este proyecto implementa una versión por consola del juego Simón dice, utilizando el módulo readline de Node.js para interactuar con el usuario.
El programa:

Genera una secuencia aleatoria de 12 colores.

Muestra progresivamente secuencias cada vez más largas.

Pide al jugador que introduzca la secuencia memorizada.

Comprueba si los colores introducidos son correctos.

Finaliza cuando el jugador falla o completa todas las rondas.

Es un ejercicio perfecto para practicar:

Manejo de entrada/salida por consola

Funciones asíncronas con async/await

Arrays y estructuras de control

Lógica de juegos por turnos

🚀 Cómo ejecutar el proyecto
Asegúrate de tener Node.js instalado.

Guarda el archivo como index.js (o el nombre que prefieras).

Ejecuta el programa desde la terminal:

bash
node index.js
Sigue las instrucciones en pantalla.

🎮 Cómo se juega
El programa te pedirá tu nombre.

Al pulsar Enter, comenzará el juego.

Se mostrará una secuencia de colores (empezando por 3).

Memorízala y pulsa Enter.

Introduce los colores uno por uno usando las teclas:

Color	Letra
ROJO	R
AZUL	A
VERDE	V
DORADO	D


Si aciertas, pasarás a la siguiente ronda con una secuencia más larga.

Si fallas, el juego termina mostrando cuántas secuencias acertaste.

Si completas las 12 rondas, ganas la partida.

🧩 Estructura del código
🔹 Constantes y variables globales
tColores: Enum manual para representar colores como números.

MAX_COLORES_SEQ: Array donde se almacena la secuencia generada.

🔹 Función pregunta(rl, texto)
Envuelve rl.question() en una Promesa para poder usar await.
Permite una interacción fluida con el usuario.

🔹 Función main()
Inicializa readline.

Pide el nombre del jugador.

Espera a que pulse Enter.

Limpia la consola.

Llama a comenzarJuego().

Es el punto de entrada del programa.

🔹 Función generarSecuencia(numeroColoresSec)
Genera una secuencia aleatoria de 12 colores.

Pasos:

Genera un número aleatorio entre 0 y 3.

Lo convierte a un color con intToColor().

Lo transforma en texto con mostrarColor().

Lo añade al array global MAX_COLORES_SEQ.

Devuelve la secuencia completa.

🔹 Función intToColor(numero)
Convierte un número entero (0–3) en su valor correspondiente del enum tColores.

🔹 Función mostrarColor(valorTColor)
Convierte un valor del enum tColores en su nombre textual:

Código
ROJO, AZUL, VERDE, DORADO
🔹 Función charToColor(valorToColor)
Convierte una letra introducida por el usuario (r, a, v, d) en un valor tColores.

🔹 Función comprobarColor(secuencia, indice, color)
Comprueba si el color introducido coincide con el color correcto de la secuencia.

Devuelve true si el jugador falla.

Devuelve false si acierta.

🔹 Función mostrarSecuencia(secuencia, numero)
Muestra por consola los colores desde el inicio hasta la posición indicada.

🔹 Función comenzarJuego(nombre, rl)
Es el núcleo del juego.

Controla:

Rondas

Comprobación de colores

Mensajes de acierto/error

Finalización del juego

La secuencia empieza mostrando 3 colores y aumenta en cada ronda.

🏆 Objetivo del juego
Memorizar correctamente las 12 secuencias sin fallar.
Si lo consigues, el programa te felicita con un mensaje especial.

📂 Estructura recomendada del proyecto
Código
/simon-dice
│── index.js
│── README.md
🛠️ Mejoras futuras (ideas opcionales)
Añadir colores con códigos ANSI para hacerlo visual.

Guardar récords en un archivo JSON.

Añadir niveles de dificultad.

Crear una versión gráfica con HTML/CSS/JS.

Añadir sonidos como en el juego original.

👤 Autor
Proyecto desarrollado por Daniel Rodríguez Agudo como práctica de programación en Node.js.

Si quieres, puedo prepararte también:

✅ Un README en inglés
✅ Una versión más corta
✅ Una versión con imágenes ASCII
✅ Una versión estilo GitHub PRO con badges y tabla de contenidos

Solo dímelo y lo hago.
