//Funcções recursivas são utilizadas para reaporveitar codigo, e para codgios mais limpos.

function contagemRegresiva(numero) {

    console.log(numero)

    let contnumero = numero--

    if (numero > 0) {
        contagemRegresiva(numero--) //Aqui estou chamando a função dentro dela mesmo, caso contrario teria que fazer esse decremento na mão ou usando uma estruturta de loop como o for.
    }
    
    
}

contagemRegresiva(10);