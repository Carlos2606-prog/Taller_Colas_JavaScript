package co.edu.uptc.structures.cola_java;

public class Queue<E> {

    private Node<E> head;
    private Node<E> tail;

    public Queue() {
        this.head = null;
        this.tail = null;
    }

    public boolean push(E e) {
        Node<E> newNode = new Node<>(e);
        if (isEmpty()) {
            head = newNode;
            tail = newNode;
        } else {
            tail.setNext(newNode); tail = newNode;       
        }
        return true;
    }
    public E pop() {
        E e = null;
        if (!isEmpty()) {
            e = head.getValue();
            head = head.getNext(); 
            
            if (head == null) {
                tail = null;
            }
        }
        return e;
    }

    public E peek() {
        E e = null;
        if (!isEmpty()) {
            e = head.getValue();
        }
        return e;
    }

    public boolean isEmpty() {
        return head == null;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        Node<E> current = head;
        while (current != null) {
            sb.append(current.getValue()).append(" ");
            current = current.getNext();
        }
        return sb.toString().trim();
    }
}