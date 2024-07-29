 function comprar()
{
    let tipo = document.getElementById('tipo-ingresso').value
    let quantidade = parseInt(document.getElementById('qtd').value)

    if(tipo == 'pista')
    {
        comprarPista(quantidade)
    }
    else if(tipo == 'superior')
    {
        comprarSuperior(quantidade)
    }
    else if(tipo == 'inferior')
    {
        comprarInferior(quantidade)
    }
}

function comprarPista(quantidade)
{
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)
    if(qtdPista < quantidade)
    {
        alert('Quantidade indisponivel para tipo pista')
    }
    else
    {
        qtdPista = qtdPista - quantidade
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso')
    }
}

function comprarSuperior(quantidade)
{
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent)
    if(qtdSuperior < quantidade)
    {
        alert('Quantidade indisponivel para tipo Superior')   
    }
    else
    {
        qtdSuperior -= quantidade
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso')
    }
}

function comprarInferior(quantidade)
{
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent)
    if(qtdInferior < quantidade)
    {
        alert('Quantidade indisponivel para compra no tipo inferior')
    }
    else
    {
        qtdInferior -= quantidade
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra de ingressos realizada com sucesso')
    }
}



