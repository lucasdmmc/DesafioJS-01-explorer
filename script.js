let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))

let sum = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let restDiv = n1 % n2
let parImpar = n1 + n2

alert(`
      Soma: ${sum}
      Subtração: ${sub}
      Multiplicação: ${mult}
      Divisão: ${div}
      Resto da Divisão: ${restDiv}
`)


if(parImpar % 2 == 0) {
  alert(`A soma dos dois números são ${sum}: Par`)
} else {
  alert(`A soma dos dois números são ${sum}: Impar`)
}

if(n1 == n2) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes!')
}

