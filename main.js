function colorirDia(){

// PROVA, PEGA O VALOR DO CAMPO DIA 

let days = document.getElementById('day').value ;
// pega o valor do campo de cor 

let color = document.getElementById('color').value;

// pega os elementos da tabela calendário 
let calendar = document.getElementById('calendar');
// let é para criar variavel 
// verifica se o campo de dia foi preenchido 
if(!days){
    alert('Favor informar o dia');
}else if((days > 0) && (days < 31)){

// se o numero de dias esta no inervalo 
// aplicará a cor da célula do calendário 

let td = calendar.getElementsByTagName('td') [parseInt(days) + 1];
td.style.backgraundColor = color;

} else {
    alert("Favor digitar um dia do calendário");
}
// usar o let para criar uma variavel, para guardar a célula da tabela 
let.elementos = document.querySelectorAll('td');
// declarar e inucializa contadores 
let contadorAzul = 0, contadorRosa = 0, contadorVerde = 0, contadorRoxo =0;
// que tipo de escopo é a variavel td é uma variavel de bloco 

//loop para verificar o estilo de cada célula e contar quantas tem a cor e qual cor 

for (let i = 0; i< elementos.length; i++){
 // obtem o estilo computdo do elemento atual 

var estilo =  window.getComputedStyle(elementos[i]);

// para verificar onde tem cor, getcumputedSyle pesquisar a função depois
//obtem a cor de fundo atual da célula

var corEstilo =  estilo.backgroundColor;
// verifica  a cor e incrementa contador correspondente
if(corEstilo === "rgb(173,216,230)" ||  corEstilo === "lightBlue"){
    contadorAzul++;
    console.log("Azul" + contadorAzul);

} else if(corEstilo === "rgb(152,215,152)" || corEstilo === "palegreen")
{cotadorVerde++;
    console.log(contadorVerde);

}else if( corEstilo === "rgb(255,182,193)" || corEstilo === "lightPink"){
    contadorRosa++;
    console.log(contadorRosa);
} else if(corEstilo === "rgb(106, 90 ,205)" || corEstilo === "slateblue"){
    contadorRoxo++;
    console.log(contadorRoxo);
}


}
}
