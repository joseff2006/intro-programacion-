console.log("--- 1. Arreglos y Objetos ---");
const numeros = [10, 20, 30, 40, 50];
console.log(`El tercer elemento del arreglo es: ${numeros[2]}`);

const persona = {
  nombre: "Carlos",
  edad: 45,
  profesion: "Ingeniero"
};
console.log(`La profesión de la persona es: ${persona.profesion}`);

console.log("\n--- 2. Métodos de Arreglos ---");
numeros.push(60);
console.log(`Arreglo después de .push(): ${numeros}`);

numeros.pop();
console.log(`Arreglo después de .pop(): ${numeros}`);

console.log("Iterando con .forEach():");
numeros.forEach(numero => {
  console.log(numero);
});

const numerosDuplicados = numeros.map(numero => numero * 2);
console.log(`Arreglo original: ${numeros}`);
console.log(`Arreglo duplicado con .map(): ${numerosDuplicados}`);

const numerosMayoresDe30 = numeros.filter(numero => numero > 30);
console.log(`Números mayores de 30: ${numerosMayoresDe30}`);

console.log("\n--- 3. Manipulación del DOM (Document Object Model) ---");
const titulo = document.getElementById('tituloPrincipal');
const lista = document.querySelector('.lista');

if (titulo) {
  titulo.textContent = '¡DOM en Acción!';
  titulo.style.color = 'blue';
}

if (lista) {
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = 'Nuevo Item';
  lista.appendChild(nuevoItem);
}