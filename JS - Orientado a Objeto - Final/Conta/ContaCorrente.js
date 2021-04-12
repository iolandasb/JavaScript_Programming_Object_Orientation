import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{ //Aqui o "extends" traz a programação da classe "conta" do arquivo "Conta.js" para esta classe. Isso é o que chamado "herança".
    
    static numeroDeContas = 0;
    //O "#" significa que o atributo vem após esse símbolo é privado. Tal funcionalidade ainda não foi aprovada como comando JS. Poderia-se em vez de "#" colocar "_", que é a convenção aceita em JS para indicar que aquele atributo é privado (ele não muda o comando e não o torna privado efetivamente, mas quem o lê entende que se trata de um atributo que não deve ser alterad).
    constructor(cliente, agencia) {
        super(0, cliente, agencia); //Aqui o "super" está chamando o "constructor()" da classe pai, que no caso é a classe "Conta".
        ContaCorrente.numeroDeContas += 1; //Considerando que inicialmente "numeroDeContas" foi igualado a "0", com este comando, sempre que a classe "ContaCorrente" for construída, será adicionado "1" ao "numeroDeContas". Ou seja, ele irá verificar quantas contas foram adicionadas no "index.js". Como o atributo "numeroDeContas" é estático e não está relacionado a uma conta específica e sim a todas, deve ser precedido do nome da classe, para que se aplique em todas as contas.
    }

    sacar(valor) { //Esse método está sobrescrevendo o método "sacar" da classe pai ("Conta").
        let taxa = 1.1;
        return this._sacar(valor, taxa); //Nesse caso, tanto o "this" como o "super" funcionam. Ademais, só se pode chamar o atributo privado da classe "Conta" porque ela é a classe pai de "ContaCorrente".
    }

}