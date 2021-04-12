export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha) { //Com esse comando é mantido o encapsulamento se "senha", só sendo possível dar uma atribuição a ela através do "cadastrarSenha".
        return senha == this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

}