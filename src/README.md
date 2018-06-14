### Diagrama de Flujo

1. Investigar Cifrado César
2. Creación de estructura HTML
3. Crear tres campos de texto: Palabra a cifrar, offset, palabra cifrada.
4. Crear app.js
5. Dentro de app.js, crear dos funciones: `` cipher.encode(offset, string): offset `` y ``cipher.decode(offset, string): offset``
6. Demostrar funcionalidad.
7. Reconocer tipo de usuario, de servicio y cómo el programa afecta en el usuario.
8. Analizar datos y aplicar el diseño correspondiente.
9. Crear prototípo funcional
10. Someter el proyecto a code y peer review.
11. Volver a cualquier punto si es necesario.
11. Entrega final.

## Definition Of Done
* Mediante texto fijo:
    1. Encriptar, usando  formula, ``charCodeAt()`` y ``String.fromCharCode``


### Razonamiento

Primero, obtener funcionalidad de encripción. Para esto, utilizamos una palabra o letra fija facilitando las pruebas iniciales del programa.
Luego, creamos una función que tome la posición de cada una de las letras; esto se consigue mediante un for, osease un bucle. Cada que una letra pase por este bucle, se buscará su código ASCII mediante ``charCodeAt()``. Ya teniendo el còdigo, podemos aplicar la fórmula de Cifrado Cesar 

> (x - 65 + n)%26 + 65

Esto nos devolverá un código ASCII que ha sido desplazado la cantidad de veces que el usuario haya indicado (Offset). Para las pruebas iniciales, este valor ha sido fijado de antemano.
Añadimos estos resultados a un arreglo.
Creamos una nueva función para poder deshacer dicha encripción. Logramos esto mediante métodos semejantes a los utilizados en las funciones anteriores, pero modificamos la fórmula

> (x + 65 - n)%26 + 65

De esta forma revertimos el cifrado. Guardamos este valor en un nuevo arreglo.

## Investigación de Usuario

Esta aplicación fue creada al rededor de las necesidad de tener conversaciónes privadas. 
Para lograr esto, los usuarios pueden escribir lo que deseen que se mantenga oculto, elegir un número(clave), y cifrar su mensaje. Dentro de esta misma aplicación, podemos descifrar mensajes siempre y cuando tengamos la clave.

En específico, el creador diseña ésta aplicación para amigos y familiares, con el motivo de tener una fiesta sorpresa, debido a ésto, y que su información no está del todo protegida, tiene la necesidad de cifrar sus mensajes y que los mensajes que recibe acerca de la fiesta, estén cifrados. 

Los usuarios en éste caso serán los amigos y familiares. Asumimos que tienen entre 20 y 30 años, con conocimientos básicos de computación y navegación en el Internet e hispanohablantes.
De todas formas, mantenemos el diseño de forma clara e intuitiva, mostrando instrucciones mediante íconos.

En cuanto a colores, elegimos una gama de colores pasteles, con pequeños detalles que nos recuerden el motivo de la conversación: fiesta sorpresa.
Al ser sorpresa, no queremos que la página nos revele el misterio, pero queremos que tenga el sentimiento representado.

En resumen, nuestra aplicación va dirigida a adultos jóvenes, hispanohablantes con la necesidad de mantener mensajes o conversaciones privadas.