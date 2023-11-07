/*
OPERADORE ARITIMETICOS
+ --> adição ou concatenação
- * /
% --> modulo, pega o resto da divisão
** --> espontenciação
++ --> incrementar 1
-- --> decrementar
*/
let i = 0
console.log(i)
i ++ //i = i+i
console.log(i)

/*
OPERADORES RELACIONAIS
== --> Igual
!= --> diferente
> < >= <=
*/

/*
OPERADORES LOGICOS
&& --> E
|| --> OU
! --> NÃO
*/

let usuario = "fran", senha = 123
//u: admin s:123

if ( usuario == "admin" && senha == 123) {
    console.log("pode entrar")
} else {
    console.log("Usuario ou senha invalido")
}

let a = 60, b = 10, c = 80

if ( a > b && a > c){
    console.log(" A é maior")
}else if( b > a && b > c){
    console.log(" B é maior")
}else if( c > a && c > b){
console.log(" C é maior")
}

let meia_entrada = " trabalhador"
if(meia_entrada == "estudante" || meia_entrada == "idoso" || meia_entrada == "pcd" || meia_entrada == "baixa renda"){
    console.log ("Você possui meia entrada")
}else{
    console.log("Você paga inteira")
}




