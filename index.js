//aqui está falando q tuda class .mario vai ser chamada de "mario" (mesma coisa com o cano)
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
//aqui falando q o jump só vai funcionar no mario
const jump = () => {
    mario.classList.add('jump');
    //também adicionando um comando q depois de um determinado tempo ele vai sumir
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}
//esqueci
const loop = setInterval(() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //score
    const score = document.querySelector('.score')
    //só funciona se a posição do cano for igual ou menor q 100 e maior q 0 
    //e a posição do mario for igual ou menor q 100
        if(canoPosition <= 100 && canoPosition > 0 && marioPosition <= 100){
        //se o mario for de americanas isso remove a animação para o cano ficar parado
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;
        //se o mario for de arrasta pra cima isso remove a animação para ele ficar parado
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        //img de game over e o tamanho dele
        mario.src = 'img/game_over.gif';
        mario.style.width = '130px';
        mario.style.marginLeft = '-10px';
        //apagar tudo após sair da tela
        clearInterval(loop);
        setTimeout(()=>{
            window.location.reload()
        },5000)
    }else{
        score.textContent = parseInt(score.textContent)+1
    }
}, 10);
//aqui falando q se alguma tecla for precionada o jump vai ser ativado
document.addEventListener('keydown', jump);

