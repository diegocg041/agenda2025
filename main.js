const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");

for (let i=0; i < botoes.length; i++){

    botoes[i].onclilck = function(){
      for (let j=0; j< botoes.length; j++ ){
           botoes[j].classList.remove("ativo");
            textos[j].classList.remova("ativo"); 
       }
       botoes[i].classList.add("ativo");
       textos[i].classList.add("ativo");
     }
   }

     contadores = document.querySelectorAll(".contador");
    const tempoObjetivo1 = new Date("2024-05-15T00:00:00");
    const tempoObjetivo2 = new Date("2024-12-02T00:00:00");
    const tempoObjetivo3 = new Date("2023-11-08T00:00:00");
    const tempoObjetivo4 = new Date("2024-02-01T00:00:00"); 
    
    
    const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

    function calculaTempo(tempoObjetivo){

    let tempoAtual = new DataTransfer();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoObjetivo1/1000);
    let minutos = Math.floor(segundos/60);
    let dias = Math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%24;
    if(temposFinal>0){
        return[dias,horas,minutos,segundos];  
    }else{
        return[0,0,0,0];

    }
}
   function atulizaCrometro(){

    for (let i=0; i < contadores.length;i++){
        document.getElementById("dias"+i).textosContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1]
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2]
       
    }
   }
   function comecaCrometro(){
    atulizaCrometro();
    setInterval(atulizaCrometro, 1000);
   }
   comecaCrometro();