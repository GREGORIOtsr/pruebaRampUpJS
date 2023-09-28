// 1.
/* Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase */

// Solución 1. (Bucle for y condicionales)
function searchLetter(word, letter) {
    if (typeof word == 'string' && typeof letter == 'string') {     //Condicional para evaluar que los valores introducidos son palabras/letra(string).
        let wordLC = word.toLowerCase();                            //Variable para convertir la palabra a minúscula (Evitar problemas de comparación con minus y mayus).
        let letterLC = letter.toLowerCase();                        //Variable para convertir la letra a minúscula.
        let total = 0;                                              //Variable para guardar el resultado de la función.
        for (i = 0; i < word.length; i++) {                         //Bucle que itere la longitud de la palabra dada.
            if (wordLC[i] == letterLC) {                            //Condicional para evaluar que el index de la palabra por el que itere sea igual a la palabra dada.
                total++;                                            //Si es igual, sumar 1.
            }
        }
        return total;                                               //Regresar valor total.
    } else {
        return 'Error!! Valor/es introducido/s no son palabra/s.'   //Regresar mensaje de error en caso de que los valores no sean palabras/letra(string).
    }
}

// Solución 2. (Arrays)
function searchLetter(word, letter) {
    let wordLC = word.toLowerCase();
    let letterLC = letter.toLowerCase();
    let arr = Array.from(wordLC);
    return arr.filter((i) => i == letterLC).length;
}


// 2.
/* Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números */

// Solución 1. (Bucle for y condicionales)
function numImpares(num) {
    if (typeof num == 'numbers') {      //Condicional para evaluar que el valor sea un número.
        for (i = 0; i <= 50; i++) {     //Bucle que itere 50 veces luego del valor dado.
            if (num % 2 == 1) {         //Condicional que evalue si el número es impar.
                console.log(num);       //Imprimir número.
                num++;                  //Sumar 1 al número
            } else {                    //Si el número no es impar, sumar 1.
                num++;
            }
        }
    } else {
        return 'Error!! Valor introducido no es un número'  //Regresar mensaje de error en caso de que el valor introducido no sea un número.
    }
}

// Solución 2. (Bucle while y condicional ternario)
function numImpares(num) {
    let numInicial = num;
    while (num <= numInicial + 50) {
        num % 2 == 1 ? (console.log(num), num++) : num++;
    }
}
