# JavaScript_Programming_Object_Orientation
Creation of bank account system with object-oriented concepts in JavaScript.

# Conceitos e Funcionalidades

•	const: variável que não é alterada.

•	Atributos/campos: são as variáveis dentro das classes. Eles podem ser adicionados de forma dinâmica a um objeto em JS, o que não é tão comum em outras linguagens. Ou seja, o atributo não precisa ser declarado antes como uma variável (por exemplo), podendo ser inserido após um objeto separado por um “.”.

•	Classes: geralmente são utilizadas quando existem códigos que se repetem. O nome de uma classe costuma iniciar em letra maiúscula. Ao ser chamada, é importante que antes da classe conste a palavra “new” (conforme abaixo).

•	new (nome da classe)(): cria um novo elemento usando as informações da classe. A variável onde esse novo elemento será contido é um objeto. No exemplo abaixo, “clliente1” é um objeto e “cliente” é a classe:
  - <img>![image](https://user-images.githubusercontent.com/60974082/113928070-a99db000-97c4-11eb-9c90-61b1810c30e5.png)</img>

•	-=: subtrai.

•	+=: adiciona.

•	this.(nome da variável): this se relaciona com quem realizou a operação.

•	#: colocar esse símbolo antes do atributo o torna privado. Com isso, o elemento com a “#” não pode ser alterado. No entanto, essa funcionalidade ainda é apenas uma proposta de JS, não tendo passaod pela aprovação final. Esse link contém a proposta para essa funcionalidade: [Flex Grid] (https://github.com/tc39/proposal-class-fields#private-fields). 

•	_: convenção em JS que se esse símbolo aparecer antes de um atributo, significa que tal atributo é privado e não deve ser alterado.

•	Método: sinônimo de função. Define o que um objeto sabe fazer, define seu comportamento, a maneira de fazer algo. Pode receber qualquer quantidade de parâmetros. Exemplo:
  - <img>![image](https://user-images.githubusercontent.com/60974082/113928121-bcb08000-97c4-11eb-9ae0-db12a2b34c69.png)</img>

•	return: para a operação onde ele ocorre.

•	export (nome da funcionalidade): exporta um módulo, uma funcionalidade, um arquivo.

•	import {(nome da funcionalidade. Apenas o nome mesmo, sem o comando em si)} from “./(nome do arquivo que está sendo importado)”: importa m módulo, uma funcionalidade, um arquivo.

•	Módulo: código separado em compartimentos/arquivos. Isso ajuda a organizar o código como um todo.

•	Node.js: aqui está sendo usado para verificar os resultados no JS. Porém, ele por padrão não compreende quando existe mais de um arquivo JS a ser analisado. Para que o Node.js entenda isso, é necessário seguir estes passos:
  - Todo projeto Node possui um arquivo de configuração contendo uma série de informações sobre o pacote com que estamos trabalhando, e ele é chamado de package.json. Diversos frameworks, como o React, possuem esse arquivo nativamente.
  - É possível criar o arquivo package.json por meio de um comando, que pode ser executado no Prompt de Comando, no Powershell ou no próprio terminal do VSCode (que é aberto com "trl + J").
  - Após abrir o terminal do Node.js, deve ser executado o comando “npm init”, que inicializará um gerenciador de pacotes que irá auxiliar na criação do pacote. Esse gerenciador fará uma série de perguntas, começando pelo nome do pacote, que será aqui nomeado de "bytebank".
  - Ao pressionar "Enter", é possível avançar para as próximas definições, como “version”, onde será mantida a sugestão “1.0.0”; “description”, que será definido como "Projeto do bytebank para seus clientes"; “entry point”, que define o arquivo inicial de execução do programa (o padrão do JavaScript); “test command”, um comando para testes que será mantido vazio; “git repositor”, que permite adicionar um repositório do GitHub, etapa que será pulada; “keywords”, para definir palavras-chave para o projeto, e que também será pulada aqui; “author”, que pode ser preenchido com o nome do usuário e “license”, que será mantidaa sugestão padrão.
  - Finalizadas as configurações, será gerado um arquivo “package.json” na raiz do projeto (VS). Esse arquivo é muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação.

•	Gerenciador de pacotes: são locais que comportam diversos códigos montados por várias pessoas, arquivados de forma organizada. O mais famoso em JS é o https://www.npmjs.com/. 

•	Tipos primitivos: são os valores mais simples que a linguagem consegue trabalhar e geralmente são implementados no nível mais baixo da linguagem. Isso significa que eles não são representados como um objeto e por isso não possuem métodos ou atributos. Exemplos: strings, números, booleanos, etc. Quando esses tipos são declarados por parâmetro dentro de um método, eles prevalecem em relação a outros comandos, pois ao chamar o parâmetro em questão, é como se uma cópia dele estivesse sendo criada. São sempre passados como um valor.

•	Tipos não primitivos: são mutáveis por natureza e podem conter uma estrutura de dados grande e complexa. Exemplos: objetos, arrays, etc. Quando esses tipos são declarados, eles fazem referência ao espaço de memória onde uma variável está guardada. São sempre passados por referência. Essa variável "guarda" um objeto para um método dentro do JS, ou seja, o que é passado é apenas o endereço de memória que aquela função deve usar para acessar os valores do objeto.
o	Heap: quando um objeto dentro do JS é criado, ele reserva um espaço de memória no local, que é o chamado “Heap”. Ao fazer isso, o que o objeto guarda na variável criada não é o valor do objeto e sim o endereço de memória onde os valores estão salvos.

•	Tipos primitivos x não primitivos: [Flex Grid] (https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239). 

•	undefined: não definido.

•	null: comando que indica que nada deve ser inserido naquele espaço. É uma indicação intencional, diferente do “undefined”.

•	set (nome do atributo): é um assessor que atribui um valor ao atributo. Importante destacar que um assessor sempre é público (não comporta “_” ou “#”).

•	get (nome do atributo): é um assessor que acessa valor do atributo. Importante destacar que um assessor sempre é público (não comporta “_” ou “#”).

•	Instanceof: nova instância.

•	constructor (): é uma função especial para criar e inicializar um objeto criado a partir de uma classe, e recebe esse nome específico de “constructor”. Ele facilita a compreensão do código.

•	static (nome do atributo): torna o valor do atributo estático, não mutável.
