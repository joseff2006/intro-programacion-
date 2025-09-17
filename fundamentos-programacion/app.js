let nombre = "Juan Pérez";
let edad = 30;
let tienePermiso = false;
const PI = 3.14159;

console.log("--- 1. Variables y Tipos de Datos ---");
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Tiene permiso? ${tienePermiso}`);
console.log(`El valor de PI es: ${PI}`);
console.log(`Tipo de dato de 'edad': ${typeof edad}`);

console.log("\n--- 2.1 Condicionales ---");
const calificacion = 85;

if (calificacion >= 70) {
  console.log("¡Aprobado!");
} else {
  console.log("Reprobado.");
}

console.log("\n--- 2.2 Bucles ---");
console.log("Bucle for:");
const frutas = ["manzana", "banana", "cereza"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Me gusta la ${frutas[i]}`);
}

console.log("Bucle while:");
let contador = 0;
while (contador < 3) {
  console.log(`El contador es: ${contador}`);
  contador++;
}

console.log("\n--- 3. Funciones ---");
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

function sumar(a, b) {
  return a + b;
}

saludar("Ana");
const resultadoSuma = sumar(5, 10);
console.log(`La suma de 5 y 10 es: ${resultadoSuma}`);