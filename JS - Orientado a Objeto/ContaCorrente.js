import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;

    _saldo = 0; //O "#" significa que o atributo "saldo" é privado. Tal funcionalidade ainda não foi aprovada como comando JS. Poderia-se em vez de "#" colocar "_", que é a convenção aceita em JS para indicar que aquele atributo é privado (ele não muda o comando e não o torna privado efetivamente, mas quem o lê entende que se trata de um atributo que não deve ser alterad).

    //O código abaixo protege o atributo "_cliente", de modo que quando "cliente" for chamado em "index.js", só será válido se o elemento inserido fizer parte da classe "Cliente".
    set cliente(novoValor) { //Importante destacar que um assessor ("set") sempre é público (não comporta “_” ou “#”).
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    //O código abaixo trabalha como um "assessor" de "cliente". Com eles, as informações mostradas serão apenas relativas a "cliente", quando for chamado.
    get cliente() { //Importante destacar que um assessor ("get") sempre é público (não comporta “_” ou “#”).
        return this._cliente;
    }

    get saldo() { //Destaca-se que esse é um assessor de acesso, não de atribuição. Ou seja, o valor de saldo não pode e não será alterado.
        return this._saldo;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; //Considerando que inicialmente "numeroDeContas" foi igualado a "0", com este comando, sempre que a classe "ContaCorrente" for construída, será adicionado "1" ao "numeroDeContas". Ou seja, ele irá verificar quantas contas foram adicionadas no "index.js". Como o atributo "numeroDeContas" é estático e não está relacionado a uma conta específica e sim a todas, deve ser precedido do nome da classe, para que se aplique em todas as contas.
    }

    depositar(valor) {
        if(valor <= 0){
            return; //Aqui o que se está dizendo é "se o valor for menor ou igual a 0, sair da função".
        }
            this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}