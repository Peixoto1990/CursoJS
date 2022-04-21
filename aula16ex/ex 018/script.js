// var area

const resultado = document.createElement('div')
resultado.setAttribute('id', 'resultado')
const conteudoresultado = document.createElement('p')
let num = [0]
let menornum = 100
let maiornum = 0
let soma = 0
let media = 0

//function area

function adicionar() {
    if (window.document.getElementById('num').value.length == 0 || window.document.getElementById('num').value < 1 || window.document.getElementById('num').value > 100) {
        window.alert('Atenção - dados inválidos.')
    } else if (num.indexOf(Number(window.document.getElementById('num').value)) >= 0) {
        window.alert('Atenção - esse número já foi informado.')
    } else {
        resultado.innerHTML = ''

        num.push(Number(window.document.getElementById('num').value))
        const option = document.createElement('option')
        option.value = num.length - 1
        option.innerHTML = `valor ${num[num.length - 1]}`
        window.document.getElementById('quadro').appendChild(option)
    }

    document.getElementById('num').value = ''
    document.getElementById('num').focus()
}

function finalizar() {
    if (num.length == 1) {
        window.alert('Atenção - adicione valores para o sistema analisar.')
    } else {
        soma = 0
        media = 0

        for (let cont = 1; cont < num.length; cont++) {
            if (num[cont] < menornum) {
                menornum = num[cont]
            }

            if (num[cont] > maiornum) {
                maiornum = num[cont]
            }

            soma += num[cont]
        }

        media = soma / (num.length - 1)

        window.document.getElementsByTagName('section')[0].appendChild(resultado)
        conteudoresultado.innerHTML = `<h3 style="color: blue;">Resultado</h3> Valores informados: ${num.length - 1} <br> Menor valor: ${menornum} <br> Maior valor: ${maiornum} <br> Soma dos valores: ${soma} <br> Média dos valores: ${media.toFixed(2).replace('.', ',')}`
        resultado.appendChild(conteudoresultado)
    }
}
