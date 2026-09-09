function crearColaSimple() {
  let frente = null;
  let ultimo = null;

  function push(valor) {
    const nuevo = { dato: valor, siguiente: null };
    if (frente === null) {
      frente = nuevo;
    } else {
      ultimo.siguiente = nuevo;
    }
    ultimo = nuevo;
  }

  function pull() {
    if (frente === null) throw new Error("La cola está vacía");
    const valor = frente.dato;
    frente = frente.siguiente;
    if (frente === null) ultimo = null;
    return valor;
  }

  function peak() {
    if (frente === null) throw new Error("La cola está vacía");
    return frente.dato;
  }

  function isEmpty() {
    return frente === null;
  }

  return { push, pull, peak, isEmpty };
}

module.exports = { crearColaSimple };
