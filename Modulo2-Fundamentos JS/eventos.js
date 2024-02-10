//Manipular elementos html, receber dados de inputs e botoes

//add.EventListener

// function obterMedia() {
//   //O parseInt serve para transformar o valor passado no input em um numero inteiro, sem isso, o valor sera uma string.
//   var nota1 = parseInt(document.getElementById("nota1").value);
//   var nota2 = parseInt(document.getElementById("nota2").value);
//   var nota3 = parseInt(document.getElementById("nota3").value);

//   var media = (nota1 + nota2 + nota3) / 3;

//   document.getElementById("resultado").innerHTML = "Resultado:" + media;
// }

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

function aprovacao(notas) {
  // para usar a função recursiva eu uso o parametro da função que estou chamando. Caso contrario o parametro seria media.
  let media = calcularMedia(notas); // Chama recursiva de função.
  let condicao = media >= 7 ? "Aprovado" : "Reprovado"; //Forma pratica e clena de declarar uma variavel e fazer um condicional.

  return "Sua média foi: " + media + ", portanto você está: " + condicao;
}

// addEventListener é um método que anexa um manipulador de eventos a um documento.
document.addEventListener("submit", function (evento) {  

  evento.preventDefault(); //cancela o evento se for cancelável, o que significa que a ação padrão que pertence ao evento não ocorrerá.

  let formulario = document.getElementById("formulario-media");

  //Metodo proprio do Js para capturar dados de formularios. Cria um Objeto.
  let dadosForm = new FormData(formulario);
  let objeto = {};
  let notas = [];

  //Laço para percorrer e capturar os dados desse obejto usando o evento key
  for (let key of dadosForm.keys()) {
    objeto[key] = dadosForm.get(key);

    //Se notas não fosse um array, seria dessa forma
    // notas += parseInt(dadosForm.get(key));

    //Push para adicionar itens no array
    notas.push(parseInt(dadosForm.get(key)));
  }
//   console.log(notas);
//   console.log(objeto);

document.getElementById("resultado").innerHTML = aprovacao(notas);
});
