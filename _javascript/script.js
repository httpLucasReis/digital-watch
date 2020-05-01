// Chama a função time em a cada 1000ms (1 segundo)
init = setInterval(time, 1000); 

// Função principal
function time(){ 
    let now = new Date();
    let hour = now.getHours();
    let minuts = now.getMinutes();
    let seconds = now.getSeconds();

    minuts = zero(minuts);
    seconds = zero(seconds);

    document.getElementById("time").textContent = hour + ' : ' + minuts + ' : ' + seconds;
    
}

// Concatena o 0 nos minutos e segundos, caso eles sejam menor que 10
function zero(x) {
    if(x<10){
        x = '0' + x;
    } return x;
}