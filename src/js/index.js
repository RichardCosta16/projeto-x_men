/* Qual o obejtivo do arquivo index.js? (JavaScript)

A ideia do JavaScript é dar vida, funcionalidade, interatividade para o nosso site

O que precisamos fazer? - quando passar o mouse em cima do personagem na lista, temos que adicionar a borda azul de seleção na imagem pequena do personageem e mostrar a imagem grande, o texto e o nome do personagem que está selecionado

OBJETIVO 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
    passo 1: pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

    passo 2: adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse

    passo 3: verificar se já existia um personagem selecionado, se sim, devmos remover a seleção dele

OBJETIVO 2: quando passar o mouse em cima do personagem na listagem, trocar imagem, o nome e a descrição do personagem grande
    passo 1: pegar o elemeno do personagem grande pra adicionar informações nele

    passo 2: alterar a imagem do personagem grande

    passo 3: alterar o nome do personagem grande

    passo 4: alterar a descrição do personagem grande                                 
*/

/* Amostragem */
// console.log(); mostra algo que eu desejo no console do inspecionar elemento do navegador

/* Variáveis */
// const não muda nunca no código, independente do que aconteça
// let pode mudar

/* Métodos para facilitar o uso */
// querySelectorAll() - busta todos os elementos que tenham a classe que eu colocar dentro do parênteses para não precisar ficar selecionando cada personagem, por exemplo


//  OBJETIVO 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//  passo 1: pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem'); 

//passo 2: adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

    if(window.innerWidth < 450){
        windows.scrollTo({top: 0, behavior: 'smooth'})
    }

    //passo 3: verificar se já existia um personagem selecionado, se sim, devmos remover a seleção dele 
    removerSelecaoDoPersonagem(); 

    personagem.classList.add('selecionado');

    //OBJETIVO 2: quando passar o mouse em cima do personagem na listagem, trocar imagem, o nome e a descrição do personagem grande
    
    //passo 1: pegar o elemeno do personagem grande pra adicionar informações nele
    //passo 2: alterar a imagem do personagem grande
    alterarImagemPersonagemSelecionado(personagem);

    //passo 3: alterar o nome do personagem grande
    alterarNomePersonagemSelecionado(personagem);

    //passo 4: alterar a descrição do personagem grande 
    alterarDescricaoPersonagemSelecionado(personagem); 

    })
});

//teste









function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
    
function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}
