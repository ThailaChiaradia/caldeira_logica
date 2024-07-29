let amigos = []

function adicionar()
{
    let amigo = document.getElementById('nome-amigo')
    
    if(amigo.value == '')
    {
        alert('Informe um nome válido')
        return //usa-se no lugar do else  
    }
    
    // Converta o nome para maiúsculas antes de verificar a duplicidade

    
    if (amigos.includes(amigo.value.toUpperCase())) 
    {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos')

    amigos.push(amigo.value.toUpperCase()); 


    if(lista.textContent == ' ')
    {
        lista.textContent = amigo.value
    }
    else
    {
        lista.textContent += (`${amigo.value}\n`)        
        amigo.value = ''
    }    
}

function sortear()
{   
    if(amigos.length < 4)
    {
        alert('Adicione mais amigos para realizar o sorteio')
        return
    }
    embaralha(amigos)
    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0;  i < amigos.length; i++)
    {
        if(i ==  amigos.length - 1)//se o loop chegou ao final do array
        {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>'
        }
        else
        {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--)
    {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}   

function reiniciar()
{
    amigos = []
    document.getElementById('lista-amigos').innerHTML = ' '
    document.getElementById('lista-sorteio').innerHTML = ' '
}


