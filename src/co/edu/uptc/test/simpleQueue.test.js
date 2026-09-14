const { createSimpleQueue } = require("../structures/cola_js/simpleQueue");

// Test 1: cola vacía al inicio
const queue = createSimpleQueue();
console.log("Test 1: cola vacía al inicio ->", queue.isEmpty() === true ? "OK" : "FALLO");

// Test 2: push de varios valores
queue.push("442");
queue.push("503");
queue.push("312");
console.log("Test 2: push de '442', '503', '312' -> OK");

// Test 3: pull en orden FIFO
const first = queue.pull();
const second = queue.pull();
const third = queue.pull();
console.log("Test 3: pull en orden FIFO ->");
console.log("  pull() ->", first, first === "442" ? "OK" : "FALLO");
console.log("  pull() ->", second, second === "503" ? "OK" : "FALLO");
console.log("  pull() ->", third, third === "312" ? "OK" : "FALLO");

// Test 4: cola vacía tras vaciar y error en pull extra
console.log("Test 4: isEmpty() tras vaciar cola ->", queue.isEmpty() === true ? "OK" : "FALLO");

try {
  queue.pull();
  console.log("Test 4b: pull() en cola vacía -> FALLO (debió lanzar Error)");
} catch (e) {
  console.log("Test 4b: pull() en cola vacía lanza Error ->", e.message === "La cola está vacía" ? "OK" : "FALLO");
  console.log("  Mensaje:", e.message);
}

// Test 5: peak no modifica la cola
const queue2 = createSimpleQueue();
queue2.push("A");
queue2.push("B");
const seen = queue2.peak();
console.log("Test 5: peak() retorna frente sin extraer ->", seen === "A" ? "OK" : "FALLO");
console.log("  Tamaño lógico intacto, pull() siguiente ->", queue2.pull() === "A" ? "OK" : "FALLO");

// Test 6: peak en cola vacía lanza Error
const queue3 = createSimpleQueue();
try {
  queue3.peak();
  console.log("Test 6: peak() en cola vacía -> FALLO (debió lanzar Error)");
} catch (e) {
  console.log("Test 6: peak() en cola vacía lanza Error ->", e.message === "La cola está vacía" ? "OK" : "FALLO");
}
