//Estrutura de decisão
/*
if--> se
if(condição){
    resposta verdadeira
}

if...else -->se não
if(condição){
    resposta verdadeira
}else{
    resposta falsa
}
*/
let ideda = 37
if(ideda >= 18){
    console.log("Maior de Idade") //TRUE
}else{
console.log("Menor de Idade") //FALSE
}

console.log("Escolha o Suco:\n1 - Laranja\n2 - Uva\n3 - Abacaxi")

let Suco = 1

if(Suco == 1){
    console.log("🍊")
}else if(Suco ==2){
    console.log("🍇")
}else if(Suco ==3){
    console.log("🍍")
}else{
    console.log("Opção Invalida")
}

switch(Suco){
    case 1:
        console.log("suco de 🍊")
        break
    case 2:
        console.log("suco de 🍇")
        break
    case 3:
        console.log("suco de 🍍")
        break
    default:
        console.log("Opção Invalida")
        break
}