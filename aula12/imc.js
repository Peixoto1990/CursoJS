let peso = 71.4
let altura = 1.7
let imc = peso / altura ** 2

console.log(`Faixa IMC: ${imc.toFixed(2)}`)

if (imc <= 18) {
    console.log('Muito abaixo do peso. CUIDADO!')
} else {
    if (imc > 18 && imc <= 25) {
        console.log('Peso ideal. Parabéns!')
    } else {
        if (imc > 25 && imc <= 30) {
            console.log('Sobrepeso. Atenção!')
        } else {
            if (imc > 30 && imc <= 35) {
                console.log('Obesidade. CUIDADO!')
            } else {
                if (imc > 35 && imc <= 40) {
                    console.log('Obesidade severa. PERIGO!')
                } else {
                    console.log('Obesidade mórbida. RISCO DE MORTE!')
                }
            }
        }
    }
}