let botonRojo = document.getElementById("rojo");
let botonazul = document.getElementById("azul");
let botonverde = document.getElementById("Verde");

botonRojo.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightcoral";
});

botonazul.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightblue";
});


botonverde.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightgreen";
});