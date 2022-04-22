let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 69.9,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p

        return `${p}kg`
    }
}
console.log(typeof amigo)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso.toFixed(2).replace('.', ',')}kg`)