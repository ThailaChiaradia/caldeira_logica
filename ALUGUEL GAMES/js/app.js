function alterarStatus(id)
{
    //<a onclick="alterarStatus(3)" href="#" class="dashboard__item__button dashboard__item__button--return">Devolver</a>
    //<a onclick="alterarStatus(2)" href="#" class="dashboard__item__button">Alugar</a>
    //<a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a>

    let gameClicado = document.getElementById(`game-${id}`)
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let botao = gameClicado.querySelector('.dashboard__item__button')
    let nome = gameClicado.querySelector('.dashboard__item__name')

    if(imagem.classList.contains('dashboard__item__img--rented'))
    {
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'ALUGAR'
    }
    else
    {
        imagem.classList.add('dashboard__item__img--rented')
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'DEVOLVER'
    }

}