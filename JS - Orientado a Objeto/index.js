import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309); //Essa estrutura é possível devido a inserção da função "constructor()" em "Cliente.js".
const cliente2 = new Cliente("Alice", 88822233309); //Essa estrutura é possível devido a inserção da função "constructor()" em "Cliente.js".

let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(500); //Aqui foi inserido 500 na conta do Ricardo.

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2); //Aqui Ricardo está transferindo 200 para a conta da Alice.

console.log(ContaCorrente.numeroDeContas);
