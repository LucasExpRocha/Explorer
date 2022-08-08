/* Variables */

let userNumberOne = Number(prompt("Digite o primeiro numero..."));
let userNumberTwo = Number(prompt("Digite o segundo numero..."));

/* Functions required */

let sum = (NumberOne, NumberTwo) => {return NumberOne + NumberTwo}
let subtraction = (NumberOne, NumberTwo) => {return NumberOne - NumberTwo}
let multiple = (NumberOne, NumberTwo) => {return NumberOne * NumberTwo}
let split = (NumberOne, NumberTwo) => {return NumberOne / NumberTwo}
let rest = (NumberOne, NumberTwo) => {return NumberOne % NumberTwo}
let evenOrOdd = (NumberOne, NumberTwo) => {return (rest(NumberOne, NumberTwo) == 0) ? "Par" : "Impar"}
let equal = (NumberOne, NumberTwo) => {return NumberOne === NumberTwo ? "Iguais" : "Diferentes"}

alert(`
A soma dos numeros foi de: ${sum(userNumberOne, userNumberTwo)}
A subtração dos numero foi de: ${subtraction(userNumberOne, userNumberTwo)}
A multiplicação dos numero foi de: ${multiple(userNumberOne, userNumberTwo)}
Resultado da 56divisão dos numero foi de: ${split(userNumberOne, userNumberTwo)}
E o resto da divisão foi de: ${rest(userNumberOne, userNumberTwo)}
A soma dos numeros é: ${evenOrOdd(userNumberOne, userNumberTwo)}
Os numeros são: ${equal(userNumberOne, userNumberTwo)}
`)