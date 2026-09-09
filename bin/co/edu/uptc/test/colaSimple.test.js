const {
  crearColaSimple
} = require("../structures/cola_js/colaSimple");

// Test 1: cola vacía al inicio
const cola = crearColaSimple();
console.log("Test 1: cola vacía al inicio ->", cola.isEmpty() === true ? "OK" : "FALLO");

// Test 2: push de varios valores
cola.push("442");
cola.push("503");
cola.push("312");
console.log("Test 2: push de '442', '503', '312' -> OK");

// Test 3: pull en orden FIFO
const primero = cola.pull();
const segundo = cola.pull();
const tercero = cola.pull();
console.log("Test 3: pull en orden FIFO ->");
console.log("  pull() ->", primero, primero === "442" ? "OK" : "FALLO");
console.log("  pull() ->", segundo, segundo === "503" ? "OK" : "FALLO");
console.log("  pull() ->", tercero, tercero === "312" ? "OK" : "FALLO");

// Test 4: cola vacía tras vaciar y error en pull extra
console.log("Test 4: isEmpty() tras vaciar cola ->", cola.isEmpty() === true ? "OK" : "FALLO");

try {
  cola.pull();
  console.log("Test 4b: pull() en cola vacía -> FALLO (debió lanzar Error)");
} catch (e) {
  console.log("Test 4b: pull() en cola vacía lanza Error ->", e.message === "La cola está vacía" ? "OK" : "FALLO");
  console.log("  Mensaje:", e.message);
}

// Test 5: peak no modifica la cola
const cola2 = crearColaSimple();
cola2.push("A");
cola2.push("B");
const visto = cola2.peak();
console.log("Test 5: peak() retorna frente sin extraer ->", visto === "A" ? "OK" : "FALLO");
console.log("  Tamaño lógico intacto, pull() siguiente ->", cola2.pull() === "A" ? "OK" : "FALLO");

// Test 6: peak en cola vacía lanza Error
const cola3 = crearColaSimple();
try {
  cola3.peak();
  console.log("Test 6: peak() en cola vacía -> FALLO (debió lanzar Error)");
} catch (e) {
  console.log("Test 6: peak() en cola vacía lanza Error ->", e.message === "La cola está vacía" ? "OK" : "FALLO");
}
