const botaoAlterarTema = document.getElementById('botao-alterar-tema')

//Buscando o body no elemento
const body = document.querySelector('body')

const imagemBotaoTrocaTema = document.querySelector('.imagem_botao')

//Clique do usuário no botãp / 1o Evento - Clique / 2o Evento Ação disparada / 3o Adiciona o o classList com a classe desejada
botaoAlterarTema.addEventListener('click', () => {

     //Verificar se contém a class modo-escuro

    const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')

    //Para melhorar o código, foram removidas do if e else as classList.remove e add com o uso do toggle que vai dar o mesmo efeito alternando os modos
    body.classList.toggle('modo-escuro')

    //
    if (modoEscuroEstaAtivo){
        //body.classList.remove('modo-escuro') 
        imagemBotaoTrocaTema.setAttribute('src', './src/imagens/sun.png')    
    }else{
        //body.classList.add('modo-escuro')
    
        //Alterando imagem do botão
        //1o Qual atributo quer aterar / 2o Qual o caminho da fonte
        imagemBotaoTrocaTema.setAttribute('src', './src/imagens/moon.png')
    }

   
})
