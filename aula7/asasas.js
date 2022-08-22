let meuInput = document.querySelector('#meuInput');
   meuInput.onkeydown = function(event){
       alert("A tecla foi acionada: "+ event.key);
}

let meuInput = document.querySelector('#meuInput');
   meuInput.onkeyup = function(event){
       alert("A tecla foi solta: "+ event.key);
}


let meuInput = document.querySelector('#meuInput');
   meuInput.onkeypress = function(event){
       alert("A tecla foi pressionada: "+ event.key);
}
