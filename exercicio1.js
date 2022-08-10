//1. Crie 4 variáveis para armazenar os seguintes dados referentes a um carro:

let modelo;
let cor;
let ano;
let novo = true || false;

//2. Vamos explorar a criação de variáveis sem inicializa-las com um valor! Coloque como comentário no código o que acontece quando você executa os seguintes trechos de código:

var meuNome;
console.log(meuNome); //undefined

//Agora altere a variável e atribua a ela o seu nome:

meuNome = "Glauber Mendes Cardoso";
console.log(meuNome); //Glauber Mendes Cardoso

//3. Em Javascript, todos os nomes de variáveis são case sensitive. Isso significa que capitalização é importante. 

//`MYVAR`não é o mesmo que `MyVar`nem `myvar`. É possível ter várias variáveis distintas com o mesmo nome, mas com maiúsculas e minúsculas diferentes. É altamente recomendável que, por uma questão de clareza, você *não* use este recurso de linguagem.
//Boas práticas: Escreva nomes de variáveis em JavaScript em *camelCase* . Em *camelCase* , nomes de variáveis com várias palavras têm a primeira palavra em minúsculas e a primeira letra de cada palavra subsequente em maiúscula.

var umaVariavel;
var outraVariavel;
var esseNomeMuitoMasMuitoGrande;

// Variable declarations
//var VaRiAvElRuIM;
var variavelRuim;
//var variavelAdequada;
var variavelAdequada;
//var VariavelTitular;
var variavelTitular;

// Variable assignments

//VARIAVELCAPITALIZADA = 10;
variavelCapitalizada = 10;
//variavelAdequada = "A String";
variavelAdequada = "A String";
//VAriaVELTItular = 9000;
variavelTitular = 9000;

//console.log(VARIAVELCAPITALIZADA)
console.log(variavelCapitalizada)
//console.log(variavelAdequada)
console.log(variavelAdequada)
//console.log(VAriaVELTItular)
console.log(variavelTitular)

//4.Depois que um valor é atribuído a uma variável usando o operador de atribuição , você pode atribuir o valor dessa variável a outra variável usando o operador de atribuição, como no exemplo a seguir:

/*
var minhaVariavel;
minhaVariavel = 5;
var meuNumero;
meuNumero = minhaVariavel;
*/

//Atribua o conteúdo de salarioBase à variável salarioFuncionarioNovo

/*
var salarioBase; 
salarioBase = 2000;
var salarioFuncionarioNovo;
console.log(salarioBase)
console.log(salarioFuncionarioNovo)
*/

var salarioBase;
salarioBase = 2000;
var salarioFuncionarioNovo;
salarioFuncionarioNovo = salarioBase;

console.log(salarioBase);
console.log(salarioFuncionarioNovo);

//5. Crie uma variável para armazenar o resultado de cada das operações e imprima o resultado delas.

/*

Lembrando que alguns dos operadores matemáticos de javascript são:

(+) para somas;
(-) para subtração;
(*) para multiplicação;
(/) para divisão.

*/

let soma = 3 + 7;
console.log(soma);

let subtracao = 135 - 29;
console.log(subtracao);

let multiplicacao = 4 * 8;
console.log(multiplicacao);

let divisao = 225 / 5;
console.log(divisao);

//6. Vamos explorar atribuições composta em operações matemáticas! Imprima o valor de cada uma das operações a seguir:

/*
var saldo = 50;
var saldoComBonus = saldo + 20;
var saldoComDesconto = saldoComBonus / 0.5;
var saldoFinal = saldoComDesconto;
*/

var saldo = 50;
console.log(saldo);

var saldoComBonus = saldo + 20;
console.log(saldoComBonus);

var saldoComDesconto = saldoComBonus / 0.5;
console.log(saldoComDesconto);

var saldoFinal = saldoComDesconto;
console.log(saldoFinal);