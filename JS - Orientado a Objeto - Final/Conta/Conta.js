//Classe abstrata: foi criada apenas para ser herdada, e não instanciada.
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto tipo Conta diretamente, pois essa é uma classe abstrata."); //Com esse comando, é criado um erro que para o comando caso essa classe "Conta" tente ser alterada ou chamada em algum outro lugar, considerando que ela foi criada apenas para ser herdada.
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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
    
    //O método abaixo é abstrato, ou seja, não foi feito para ser chamado diretamente, e sim sobrescrito.
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato.");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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