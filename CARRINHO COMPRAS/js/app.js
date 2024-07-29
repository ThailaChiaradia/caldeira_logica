let total = 0
document.getElementById('lista-produtos').innerHTML = ' '
document.getElementById('valor-total').innerHTML = 'R$ 00,00'

function adicionar()
{
    //trazer valores 
    let produto = document.getElementById('produto').value //pega valor: Fone de ouvido - R$100
    let nomeProduto = produto.split('-')[0] //pega valor antes do '-': Fone de ouvido
    let valorUnitario = produto.split('R$')[1] //pega valor depois do 'R$': 100
    let quantidade = document.getElementById('quantidade').value
    
    //calcula valor total por tipo produto
    let precoProduto = quantidade * valorUnitario
    let carrinho = document.getElementById('lista-produtos')

    carrinho.innerHTML += `<section class="carrinho__produtos" id="lista-produtos">
                            <section class="carrinho__produtos__produto">
                                <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${precoProduto}</span>
                            </section>
                        </section>`

    total = total + precoProduto

    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$${total},00`
    document.getElementById('quantidade').value = ' ' //limpar quantidade cada vez que adicionar o produto
}

function limpar()
{
    total = 0
    document.getElementById('lista-produtos').innerHTML = ' '
    document.getElementById('valor-total').innerHTML = 'R$ 00,00'
}