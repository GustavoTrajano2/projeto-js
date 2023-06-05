const playBoard = documento . querySelector ( ".play-board" ) ;
const scoreElement = document . consultaSeletor ( ".score" ) ;
const highScoreElement = documento . querySelector ( ".high-score" ) ;
controles const = documento . querySelectorAll ( ".controls i" ) ;
deixe gameOver = false ;
deixe comidaX, comidaY;
deixe cobraX = 5 , cobraY = 5 ;
deixe velocidadeX = 0 , velocidadeY = 0 ;
let snakeBody = [ ] ;
deixe setIntervalId;
deixe pontuação = 0 ;
// Obtendo alta pontuação do armazenamento local
deixe highScore = localStorage. getItem ( "pontuação máxima" ) || 0 ;
highScoreElement. innerText = `Pontuação máxima: ${highScore} ` ;
const updateFoodPosition = ( ) => {  
    // Passando um valor aleatório de 1 a 30 como posição de comida
    comidaX = Math. andar ( Math. aleatório ( ) * 30 ) + 1 ;
    comidaY = Math. andar ( Math. aleatório ( ) * 30 ) + 1 ;
}
const handleGameOver = ( ) => {  
    // Limpando o cronômetro e recarregando a página no fim do jogo
    clearInterval ( setIntervalId ) ;
    alert ( "Fim do jogo! Pressione OK para repetir..." ) ;
    localização. recarregar ( ) ;
}
const changeDirection = e => { 
    // Alterando o valor da velocidade com base no pressionamento da tecla
    if ( e. tecla === "ArrowUp" && velocidadeY != 1 ) { 
        velocidadeX = 0 ;
        velocidade Y = -1 ;
    } else if ( tecla e. === "ArrowDown" && velocidadeY != -1 ) {   
        velocidadeX = 0 ;
        velocidade Y = 1 ;
    } else if ( tecla e. === "ArrowLeft" && velocidadeX != 1 ) {   
        velocidadeX = -1 ;
        velocidade Y = 0 ;
    } else if ( e. tecla === "ArrowRight" && velocidadeX != -1 ) {   
        velocidadeX = 1 ;
        velocidade Y = 0 ;
    }
}
// Chamando changeDirection em cada clique de tecla e passando o valor do conjunto de dados da chave como um objeto
controles. forEach ( botão => botão. addEventListener ( "clique" , ( ) => changeDirection ( { chave: botão. conjunto de dados . chave } ) ) )) ;   
const initJogo = ( ) => {  
    if ( gameOver ) return handleGameOver ( ) ;  
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX} "></div>` ;
    // Verificando se a cobra atingiu a comida
    if ( cobraX === comidaX && cobraY === comidaY ) { 
        atualizarFoodPosition ( ) ;
        cobraBody. push ( [ comidaY,comidaX ] ) ; // Empurrando a posição do alimento para o array do corpo da cobra
        pontuação++; // incrementa pontuação em 1
        highScore = pontuação >= highScore ? pontuação: pontuação máxima;
        localStorage. setItem ( "pontuação máxima" , pontuação máxima ) ;
        scoreElement. innerText = `Pontuação: ${pontuação} ` ;
        highScoreElement. innerText = `Pontuação máxima: ${highScore} ` ;
    }
    // Atualizando a posição da cabeça da cobra com base na velocidade atual
    cobraX += velocidadeX;
    cobraY += velocidadeY;
    
    // Deslocando para frente os valores dos elementos no corpo da cobra em um
    for ( let i = snakeBody. length - 1 ; i > 0 ; i-- ) {  
        corpocobra [ i ] = Corpocobra [ i- 1 ] ;
    }
    corpocobra [ 0 ] = [ cobraX,cobraY ] ; // Configurando o primeiro elemento do corpo da cobra para a posição atual da cobra
    // Verificando se a cabeça da cobra está fora da parede, se estiver, definindo gameOver como true
    if ( cobraX <= 0 || cobraX > 30 || cobraY <= 0 || cobraY > 30 ) { 
        return gameOver = true ;
    }
    for ( let i = 0 ; i < snakeBody. length ; i++ ) {  
        // Adicionando um div para cada parte do corpo da cobra
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>` ;
        // Verificando se a cabeça da cobra atingiu o corpo, se sim, defina gameOver como verdadeiro
        if ( i !== 0 && snakeBody [ 0 ] [ 1 ] === snakeBody [ i ] [ 1 ] && snakeBody [ 0 ] [ 0 ] === snakeBody [ i ] [ 0 ] ) {  
            gameover = verdadeiro ;
        }
    }
    PlayBoard. internoHTML = html;
}
atualizarFoodPosition ( ) ;
setIntervalId = setInterval ( initGame, 100 ) ;
documento . addEventListener ( "keyup" , changeDirection ) ;