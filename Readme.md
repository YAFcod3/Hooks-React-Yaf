## Hooks Básicos:

1. *useState*: Este hook permite agregar estado a un componente funcional en React. Se utiliza para almacenar y actualizar valores en el estado del componente.

2. *useEffect*: Este hook se utiliza para realizar efectos secundarios en un componente funcional. Puede ser utilizado para suscribirse a eventos, realizar peticiones HTTP, limpiar recursos, entre otros.

3. *useContext*: Este hook permite acceder al contexto de un componente funcional en React. Se utiliza para compartir datos entre componentes sin necesidad de pasar props manualmente.

## Hooks Adicionales:

1. *useReducer*: Este hook se utiliza para manejar estados más complejos en un componente funcional. Permite definir un estado inicial y una función reductora para actualizar dicho estado.

2. *useMemo*: Este hook se utiliza para memorizar el resultado de una función costosa en términos de rendimiento. Evita que la función se ejecute en cada renderizado del componente.

3. *useCallback*: Este hook se utiliza para memorizar una función y evitar que se cree una nueva instancia en cada renderizado del componente.

4. *useRef*: Este hook se utiliza para crear una referencia mutable que persiste a lo largo de los renderizados del componente. Puede ser utilizada para acceder a elementos del DOM o almacenar valores que no causen un nuevo renderizado.En general, se debe usar useRef cuando se necesite crear una referencia a un elemento del DOM o a un componente de React y luego utilizar esa referencia para manipular ese elemento o componente en algún momento después

5. *useLayoutEffect*: Este hook es similar a useEffect, pero se ejecuta de forma síncrona después de todas las mutaciones del DOM. Se utiliza cuando se necesita medir o manipular el DOM inmediatamente después de que se realice una actualización.

6. *useImperativeHandle*: se utiliza para exponer funciones o métodos de un componente funcional hacia su componente padre; útil cuando se trabaja con componentes funcionales que envuelven componentes de clase o bibliotecas externas que requieren un acceso imperativo.

