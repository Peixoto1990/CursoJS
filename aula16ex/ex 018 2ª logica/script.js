// var area

const resultado = document.createElement('div')
resultado.setAttribute('id', 'resultado')
const conteudoresultado = document.createElement('p')
let num = []
let menornum = 100
let maiornum = 0
let soma = 0
let media = 0

//function area

function adicionar() {
    function isnumber(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function verificarvetor(n, vet) {
        if (vet.indexOf(Number(n)) == -1) {
            return true
        } else {
            return false
        }
    }

    if (isnumber(Number(document.getElementById('num').value)) && verificarvetor(Number(document.getElementById('num').value), num) == true) {
        num.push(Number(document.getElementById('num').value))

        if (num[num.length - 1] < menornum) {
            menornum = num[num.length - 1]
        }

        if (num[num.length - 1] > maiornum) {
            maiornum = num[num.length - 1]
        }

        soma += num[num.length - 1]

        const opt = document.createElement('option')
        opt.value = num.length
        opt.innerText = `Valor ${num[num.length - 1]} adicionado`
        document.getElementsByTagName('select')[0].appendChild(opt)
        resultado.innerHTML = ''

    } else {
        window.alert('[ERRO]. Valor inválido ou já informado.')
    }

    document.getElementById('num').value = ''
    document.getElementById('num').focus()
}

function finalizar() {
    if (num.length > 0) {
        media = soma / num.length
        window.document.getElementsByTagName('section')[0].appendChild(resultado)
        conteudoresultado.innerHTML = `<h3 style="color: blue;">Resultado</h3> Valores informados: ${num.length} <br> Menor valor: ${menornum} <br> Maior valor: ${maiornum} <br> Soma dos valores: ${soma} <br> Média dos valores: ${media.toFixed(2).replace('.', ',')}`
        resultado.appendChild(conteudoresultado)
    } else {
        window.alert('[ERRO]. É preciso adicionar valores para serem analisados.')
    }
}