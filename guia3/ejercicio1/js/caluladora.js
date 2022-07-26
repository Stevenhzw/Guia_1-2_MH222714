function valor(e){
    document.getElementById("resultado").innerHTML+=e;
}
function borrar(){
    document.getElementById("resultado").innerHTML="";
}
function reslutado(){
    var resultado=eval(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML=resultado;
}
function cuadrada(){
    var valor2=document.getElementById("resultado").innerText;
    var valor3=Math.sqrt(valor2);
    var valor4= document.getElementById("resultado").innerHTML="";
    valor(valor4);
    valor(valor3.toFixed(2));
}
function cuadrado(){
    var valor2=document.getElementById("resultado").innerText;
    var valor5=parseInt(valor2)*parseInt(valor2);
    var valor6= document.getElementById("resultado").innerHTML="";
    valor(valor6);
    valor(valor5);
}
function inversa(){
    var valor7=document.getElementById("resultado").innerText;
    var valor9= document.getElementById("resultado").innerHTML="";
    var valor8=1/valor7;
    valor(valor9);
    valor(valor8.toFixed(2));
}
//variables para hacer los calculos y guardar los numeros
var siete=document.getElementById("siete");
var ocho=document.getElementById("ocho");
var nueve=document.getElementById("nueve");
var cuatro=document.getElementById("cuatro");
var cinco=document.getElementById("cinco");
var seis=document.getElementById("seis");
var division=document.getElementById("division");
var uno=document.getElementById("uno");
var dos=document.getElementById("dos");
var tres=document.getElementById("tres");
var cero=document.getElementById("cero");
var punto=document.getElementById("punto");
//variables de operadores
var multiplicar=document.getElementById("multiplicar");
var residuo=document.getElementById("residuo");
var resta=document.getElementById("resta");
var suma=document.getElementById("mas");
var cu=document.getElementById("cu");
var inver=document.getElementById("inver");
var reset=document.getElementById("reset");
var res=document.getElementById("res");
//eventos
uno.addEventListener("click", function(){ 
    valor(1);
});
dos.addEventListener("click", function(){
    valor(2);
});
tres.addEventListener("click", function(){
    valor(3);
});
cuatro.addEventListener("click", function(){
    valor(4);
});
cinco.addEventListener("click", function(){
    valor(5);
});
seis.addEventListener("click", function(){
    valor(6);
});
siete.addEventListener("click", function(){
    valor(7);
});
ocho.addEventListener("click", function(){
    valor(8);
});
nueve.addEventListener("click", function(){
    valor(9);
});
cero.addEventListener("click", function(){
    valor(0);
});
punto.addEventListener("click", function(){
    valor('.');
});
suma.addEventListener("click", function(){
    valor('+');
});
resta.addEventListener("click", function(){
    valor('-');
});
multiplicar.addEventListener("click", function(){
    valor('*');
});
division.addEventListener("click", function(){
    valor('/');
});
residuo.addEventListener("click", function(){
    valor('%');
});
sqrt.addEventListener("click", function(){
    cuadrada();
});
cu.addEventListener("click",function(){
    cuadrado();
});
inver.addEventListener("click",function(){
    inversa();
});
res.addEventListener("click", function(){
    reslutado();
});
reset.addEventListener("click", function(){
    borrar();
});