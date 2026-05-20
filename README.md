# Desafío Técnico: Simuladores Interactivos con Lógica Matemática

Este proyecto consiste en una plataforma web interactiva desarrollada para resolver dos casos prácticos de naturaleza física y probabilística mediante la aplicación de funciones lógicas en JavaScript.

## Enlace de la Aplicación en Producción
La demostración en vivo de la aplicación se encuentra disponible en la siguiente dirección: [Insertar aquí la URL de GitHub Pages]

## Descripción de los Módulos

* **Ejercicio 1: Simulador de Transferencia de Calor (Ley de Enfriamiento)**
  Este módulo determina la temperatura final de un objeto tras transcurrir un tiempo específico dentro de una atmósfera a temperatura constante. El procesamiento matemático se realiza mediante `Math.exp()` y el resultado se redondea al entero más cercano a través de `Math.round()`.

* **Ejercicio 2: Calculador de Combinaciones Complejas (Caso Sorteo)**
  Este componente computa el total de combinaciones posibles para un sorteo de selección simultánea en dos grupos independientes. Se implementa una función propia para el cálculo iterativo del factorial mediante el uso de `BigInt`, previniendo así desbordamientos numéricos ante cifras elevadas.

## Requisitos Técnicos Implementados

* **HTML5 Semántico:** Uso obligatorio de las etiquetas `<form>`, `<input>`, `<label>` y `<button>`, incorporando sus respectivas validaciones nativas de tipo de dato.
* **JavaScript Limpio:** Captura de datos estructurada mediante `document.getElementById().value` junto con validaciones orientadas a evitar valores incompatibles.
* **Estilos y Presentación (CSS):** Control riguroso del Box Model estándar (márgenes, rellenos y bordes), garantizando una alineación prolija de los formularios y un realce estético en los bloques de resultados.

## Instrucciones de Ejecución Local

1. Descargue o clone los archivos de este repositorio de manera local.
2. Asegúrese de mantener los archivos `index.html`, `styles.css` y `script.js` dentro del mismo directorio.
3. Ejecute el archivo `index.html` utilizando cualquier navegador web compatible.
