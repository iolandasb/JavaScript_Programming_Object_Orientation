/*
Ser autenticável significa ter o método "autenticar".

ducky typing: é comum em lingugagens fracamento tipadas. Ex do pato: se o objeto anda como um pato e atua como um pato, não interessa se ele é um pato efetivamente. Ou seja, não interessa o tipo dele, mas sim o que ele consegue fazer.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.eAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}