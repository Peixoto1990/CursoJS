function calcular() {
    if (window.document.getElementById('num').value.length == 0) {
        window.alert('Dados inválidos. Por favor, digite um número.')
    } else {
        let num = Number(window.document.getElementById('num').value)
        let cont
        window.document.getElementById('seltab').innerHTML = ''
        for (cont = 1; cont <= 10; cont ++) {
            let item = document.createElement('option')
            item.innerText = `${num} * ${cont} = ${num * cont}`
            item.value = `tab${cont}`
            window.document.getElementById('seltab').appendChild(item)
        }
        
    }

}