# Requisitos previos

Para poder ejecutar archivos js (JavaScript) en VisualStudio tendremos que:

## 1. Instalar la extensión Code Runner
1. Abre Visual Studio Code.
2. Ve a la pestaña de **Extensiones** en el panel lateral izquierdo (`Ctrl + Shift + X`).
3. Busca **Code Runner** e instálala.

## 2. Instalar Node.js
1. Ve al sitio oficial de descargas: [Node.js Downloads](https://nodejs.org/en/download).
2. Descarga el instalador correspondiente a tu sistema operativo (para Windows de 64 bits, selecciona **Windows Installer (.msi) x64**).
3. Completa el asistente de instalación manteniendo marcadas las opciones por defecto.
4. **Reinicia VS Code** para que reconozca la instalación.

# Reglas en JavaScript

## 1. Manejo de Paquetes
A diferencia de Java, en JavaScript **no es necesario ni existe la declaración de paquetes (`package`)** al inicio de los archivos.

* **Sin `package`:** JavaScript no requiere declarar la ruta del paquete al principio del archivo como si es estrictamente necesario en **Java**.

* **Módulos por rutas:** La organización del código se maneja mediante el sistema de archivos local y las exportaciones/importaciones de Node.js:
  * Para exportar una función o estructura:

    ```javascript
    module.exports = { crearColaSimple };
    ```
  * Para importarla en otro archivo, basta con indicar la ruta relativa:

    ```javascript
    const { crearColaSimple } = require("../structures/cola_js/colaSimple");
    ```

 
### Guía de apoyo: [ `module.exports` e importaciones en Node.js](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)
## 2. Declaración de Clases
En **Java** es obligatorio envolver cualquier estructura dentro de una clase (`public class Queue`). En **JavaScript** existen dos formas principales de lograr este comportamiento:

### **A. Funciones Constructoras (Factory Functions)**
No se utiliza la palabra reservada `class`. Se define una función principal (`crearColaSimple`) que encapsula la lógica interna y retorna un objeto con las funciones expuestas al usuario:
```javascript
function crearColaSimple() {
    // Variables locales (equivalente a atributos)
    let frente = null;
    let ultimo = null;

    // Métodos de la estructura
    function push(valor) { /* ... */ }
    function pull(valor) { /* ... */ }
    function peek(valor) { /* ... */ }
    function isEmpty(valor) { /* ... */ }

    // Retorna solo la interfaz pública
    return { push, pull, peak, isEmpty };
}
```
#### Ventajas
* **No requieren new:** Reducen errores comunes relacionados con olvidar instanciar una clase.

* **Permiten composicion:** Se puede combinar funciones para extender comportamiento sin usar herencia

* **Soportan encapsulacion:** Es posible mantener ciertas variables fuera del alcance del objeto retornado.

### Guía de apoyo: [Factory functions en JavaScript](https://www.webtutoriales.com/articulos/2025/05/18/factory-functions-javascript/)
### **B. Sintaxis de Clases**
```javascript
class ColaSimple{
  constructor(){/* ... */ }
  // Métodos de la estructura
  push(valor) { /* ... */ }
  pull(valor) { /* ... */ }
  peek(valor) { /* ... */ }
  isEmpty(valor) { /* ... */ }
}
// Instanciación (requiere obligatoriamente la palabra clave 'new')
const miCola = new ColaSimple();
```
#### Ventajas
* **Sintaxis familiar**: Es muy intuitiva si ya se viene manejando un lenguaje orientado a objetos como Java.
* **Herencia directa**: Facilita la extension de clases mediante la palabra clave *extends* 

### Guía de apoyo: [Clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)

## Declaración de Variables

A diferencia de **Java**, donde las variables requieren **tipado estático** (`int`, `String`, `boolean`) y su alcance (*scope*) se delimita únicamente por bloques, **JavaScript** utiliza **tipado dinámico** y ofrece distintas palabras clave para declarar variables según el alcance, la mutabilidad y la gestión de recursos:

---

### 1. `let` (Alcance de bloque)
Declara variables locales reasignables restringidas únicamente al bloque `{}` en el que fueron definidas. Es el equivalente directo a la declaración de una variable local estándar en Java.

```javascript
let y = 13;
y = 20; // Permitido: reasignación de valor
```
En Java sería:
```java
int y = 13;
y = 20;
```
### 2. const (Constantes)

Declara variables de alcance de bloque que no pueden ser reasignadas tras su inicialización. Es el equivalente exacto a la palabra reservada final en Java.

```javascript
const limite = 10;
limite = 20; //Error: Valores no reasignables
```
En Java sería:
```java
final int limite = 20;
```

### 3. var (Alcance Global)
Esta posee un alcance global ignorando bloques de codigo como if o for.

```javascript
if (true) {
    var x = 42; 
}
console.log(x); // Imprime 42
```
En java no existe ningun equivalente al var de JS ya que cualquier variable declarada en Java muere al salir de su bloque **{ }**

### Guía de apoyo: [Gramatica y Tipos de Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

