function createSimpleQueue() {
  let front = null;
  let rear = null;

  function push(value) {
    const newNode = { value, next: null };
    if (front === null) {
      front = newNode;
    } else {
      rear.next = newNode;
    }
    rear = newNode;
  }

  function pull() {
    if (front === null) throw new Error("La cola está vacía");
    const value = front.value;
    front = front.next;
    if (front === null) rear = null;
    return value;
  }

  function peak() {
    if (front === null) throw new Error("La cola está vacía");
    return front.value;
  }

  function isEmpty() {
    return front === null;
  }

  return { push, pull, peak, isEmpty };
}

module.exports = { createSimpleQueue };
