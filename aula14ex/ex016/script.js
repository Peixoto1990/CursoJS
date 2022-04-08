function calcular() {
    let inicio
    let fim
    let pulo
    let cont

    if (window.document.getElementById('inicio').value.length == 0 || window.document.getElementById('pulo').value.length == 0 || window.document.getElementById('fim').value.length == 0) {
        window.document.getElementById('resultado').innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        inicio = Number(window.document.getElementById('inicio').value)
        fim = Number(window.document.getElementById('fim').value)
        pulo = Math.abs(Number(window.document.getElementById('pulo').value))
        if (pulo == 0) {
            pulo = 1
            window.alert('Impossível contar com PASSO = 0. Considerando PASSO = 1.')
        } 
        window.document.getElementById('resultado').innerHTML = 'Contando... <br>'
        if (inicio < fim) { //contagem crescente
            for (cont = inicio; cont <= fim; cont += pulo) {
                window.document.getElementById('resultado').innerHTML += `${cont} 👉 `
            }
        } else if (inicio > fim) { //contagem regressiva
            for (cont = inicio; cont >= fim; cont -= pulo) {
                window.document.getElementById('resultado').innerHTML += `${cont} 👉 `
            }
        }
        window.document.getElementById('resultado').innerHTML += `🏁`
    } 
}
