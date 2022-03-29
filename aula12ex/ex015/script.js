function verificar() {
    let data = new Date()
    let ano = data.getFullYear()

    if (window.document.getElementById('txtano').value.length == 0 || window.document.getElementById('txtano').value > ano || window.document.getElementById('txtano').value < ano - 129) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let idade = ano - Number(window.document.getElementById('txtano').value)
        let genero = ''
        let img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (window.document.getElementsByName('radsex')[0].checked) {
            genero = 'Homem'
            if (idade < 4) {
                //bebem
                img.setAttribute('src', 'imagens/bebe-250.png')
            } else if (idade < 13) {
                //criancam
                img.setAttribute('src', 'imagens/homens/criancam-250.png')
            } else if (idade < 18) {
                //adolecentem
                img.setAttribute('src', 'imagens/homens/adolecentem-250.png')
            } else if (idade < 31) {
                //jovemm
                img.setAttribute('src', 'imagens/homens/jovemm-250.png')
            } else if (idade < 51) {
                //maduro
                img.setAttribute('src', 'imagens/homens/maduro-250.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homens/idoso-250.png')
            }
        } else if (window.document.getElementsByName('radsex')[1].checked) {
            genero = 'Mulher'
            if (idade < 4) {
                //bebef
                img.setAttribute('src', 'imagens/bebe-250.png')
            } else if (idade < 13) {
                //criancaf
                img.setAttribute('src', 'imagens/mulheres/criancaf-250.png')
            } else if (idade < 18) {
                //adolecentef
                img.setAttribute('src', 'imagens/mulheres/adolecentef-250.png')
            } else if (idade < 31) {
                //jovemf
                img.setAttribute('src', 'imagens/mulheres/jovemf-250.png')
            } else if (idade < 51) {
                //madura
                img.setAttribute('src', 'imagens/mulheres/madura-250.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/mulheres/idosa-250.png')
            }

        }
        window.document.getElementById('res').style.textAlign = 'center'
        window.document.getElementById('res').innerHTML = `Detectamos ${genero}, com ${idade} anos.`
        window.document.getElementById('res').appendChild(img)
    }
}