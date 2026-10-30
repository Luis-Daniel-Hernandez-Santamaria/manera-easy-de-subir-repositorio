let botonRojo = document.getElementById("rojo");
let botonazul = document.getElementById("azul");
let botonverde = document.getElementById("Verde");

botonRojo.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightgrey";
});

botonazul.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightpink";
});


botonverde.addEventListener("click",function(){
    document.body.style.backgroundColor = "lightyellow";
});