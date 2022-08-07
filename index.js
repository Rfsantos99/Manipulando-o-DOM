/* 1. Crie uma página HTML simples contendo uma div identificada com
um id e um botão, depois crie um arquivo javascript com uma
função addConteudo() que deve ser vinculado ao onclick do botão.
Ao clicar no botão adicionar na div o texto “Olá Mundo” */

function addConteudo() {
    const div = documento.getElementById("texto");
    div.innerHTML = 'Olá Mundo!';
}

/*2. Crie uma página HTML simples contendo um botão, depois crie um
arquivo javascript contendo uma função addImagem() que deve
ser vinculado ao onclick do botão. Ao clicar no botão deve ser
adicionado uma imagem qualquer na tela. */

function addImagem() {
    const img = document.createElement('img');
    img.src =
      'https://micropromarilia.com.br/wp-content/uploads/2021/08/Iain-Macmillan-610x610-1.jpg';
    img.width = 400;
    document.getElementsByTagName('div')[1].appendChild(img);
}    

function addImagem() {
        const img = `<img src="https://micropromarilia.com.br/wp-content/uploads/2021/08/Iain-Macmillan-610x610-1.jpg" width="400"/>`;
        
        document.getElementsByTagName('div')[1].innerHTML = img;
} 

/* 3. Crie uma página HTML que tenha um botão com o texto CLIQUE
AQUI PARA MUDAR O TEXTO e logo abaixo do botão um parágrafo
que tenha a seguinte frase AQUI VAI APARECER ALGUMA COISA...

Ao clicar no botão deve ser chamado o prompt para o usuário
digitar o nome dele, assim que o usuário digitar o nome dele o texto
do parágrafo deve ser alterado para "E aí
NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site
dinâmico." */

function pedirNome() {
    const nome = prompt('Qual o teu nome?');
    const texto = document.querySelector('#ex3');
    texto.innerText = `Opa ${nome}!  Você está deixando o seu site
    dinâmico!`;
}    

/*4. Crie uma página que tenha o título "Contador de Cliques". Na
página deve ter 2 botões, um deles deve estar escrito INCREMENTAR
e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos botões deve ter um parágrafo contendo a seguinte frase "O
contador está com 0 cliques". */
let contador = 0;

const paragrafo = document.getElementById('paragrafo');

function incrementar() {
  contador++; // contador= contador+1;

  if (contador === 1) {
    paragrafo.innerText = `O contador está com ${contador} clique.`;
  } else {
    paragrafo.innerText = `O contador está com ${contador} cliques.`;
  }
}

function zerar() {
  contador = 0;
  paragrafo.innerText = '';
}    