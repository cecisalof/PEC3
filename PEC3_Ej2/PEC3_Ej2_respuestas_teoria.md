## Ejercicio 2: Teoría:

A. En la siguiente imagen se muestra un error de tipo detectado por typescript en el archivo core1.ts. El error es provocado en la constante a ```const a = 1 + '2';``` al convertir un número a una cadena de texto. 
Gracias a que Typescript infiere el tipo de todas las variables del archivo, detecta el valor de ```apple```como string y lanza error de tipo en la constante ```d```, misma que intenta hacer una operación aritmética sobre tipo string: ```const d = c.apple * 4;```. 

Lo que hace Typescript en este ejemplo es útil ya que detecta errores de tipo antes de que el código se ejecute, lo que facilita la identificación y corrección de errores, así como la colaboración y la integración de código.

![TypeError](./img/noInterface_example.png)


B.

1. (1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.

- a => number: El valor proporcionado de ``a`` es un número, por lo que Typescript infiere que es de tipo number.
- b => string: El valor proporcionado de ```b``` es una cadena de texto, por lo que Typescript infiere que es de tipo string.
- c => string: El valor proporcionado de ```c``` es una cadena de texto, por lo que Typescript infiere que es de tipo string.
- d => boolean[]: El valor proporcionado es un array de booleanos, por lo que TypeScript infiere que ```d``` es de tipo boolean[].
- e => {
    type: string;
} :  El valor es un objeto con una propiedad type que contiene una cadena, por lo que TypeScript infiere que ```e``` es de tipo { type: string }.
- f => (number | boolean)[]: El array contiene elementos de tipos diferentes (número y booleano), por lo que TypeScript infiere un tipo de array que puede contener tanto números como booleanos.
- g => number[]: Aunque el array contiene un solo elemento, ese elemento es un número, por lo que TypeScript infiere que ```g``` es de tipo number[].
- h => null: TypeScript infiere que ```h``` es de tipo null porque el valor proporcionado es null.

2. (1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?
3. (0.5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?

