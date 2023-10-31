console.log("Logica de Programação")
console.log("Com Javascript")

// Variavel
/*
3 Formas de declarar uma variavel
1º sem declarar
2º ultilizando var
*** 3º ultilizando let
*/
//1º sem declarar (string)
nome = "Fran"

//2º ultilizando var (number)
var idade = 38

//3º ultilizando let
let email = "francislene.msouza@senacsp.edu.br"

console.log(nome, idade, email)

//constante
const escola = "Senac Americana"
//escola = "senac Piracicaba" Constante só usa uma vez se não dara erro
console.log(escola)

//Tipos de dados
/*
String - texto
Number - inf, float
Boolean - True / False
Function, Undefined, null, object, symbol
*/
console.log("Nome => " + typeof nome )
console.log("idade => " + typeof idade)
console.log("email => " + typeof email)
console.log("escola => " + typeof escola)

nome = "Francislene"
let sobrenome = "Souza"

console.log("Nome completo: " + nome + " " + sobrenome)

