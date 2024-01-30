//AULA 3
//Funções são estruturas de codigo em JS, elas evitam a repetição de codigo, pois cria-se uma unica vez e essa função pode ser chamadas varias vezes no codigo.

//Uma função pode ser chamada dentro da outra função

function calcularMedia(notas) {
  let soma = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    // console.log(soma);
  }

  let media = soma / notas.length;
  // console.log(media);

  return media;
}

function aprovacao(notas) { // para usar a função recursiva eu uso o parametro da função que estou chamando. Caso contrario o parametro seria media.
  let media = calcularMedia(notas); // Chama recursiva de função.
  let condicao = media >= 7 ? "Aprovado" : "Reprovado"; //Forma pratica e clena de declarar uma variavel e fazer um condicional.

  return "Sua média foi: "+ media+ ", portanto você está: " + condicao;
}

// console.log("Sua média é: " + calcularMedia([10, 8, 7]));
// console.log("Você está: " + aprovacao(calcularMedia([10, 8, 7])));

// console.log("Sua média é: " + calcularMedia([4, 8, 6]));
// console.log("Você está: " + aprovacao(calcularMedia([4, 8, 6])));


//Com o uso da função recursiva, com um unico console log eu chamo as duas funções.
console.log(aprovacao([10, 8, 7]));
console.log(aprovacao([4, 8, 6]));