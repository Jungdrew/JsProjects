// Definir objetos del DOM
var operacion = document.getElementById("Operacion");
var NumeroA = document.getElementById("NumeroA");
var NumeroB = document.getElementById("NumeroB");
var Resultado = document.getElementById("Resultado");

// Clickear operaciones
document.getElementById("Sumar").addEventListener("click", function() {
    operacion.innerText = "+";
}); 

document.getElementById("Restar").addEventListener("click", function() {
    operacion.innerText = "-";
}); 

document.getElementById("Multiplicar").addEventListener("click", function() {
    operacion.innerText = "*";
}); 

document.getElementById("Dividir").addEventListener("click", function() {
    operacion.innerText = "/";
});

//Clickeo de números
document.getElementById("Num0").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "0";
    }
}); 

document.getElementById("Num1").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "1";
    }
}); 

document.getElementById("Num2").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "2";
    }
}); 

document.getElementById("Num3").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "3";
    }
}); 

document.getElementById("Num4").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "4";
    }
}); 

document.getElementById("Num5").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "5";
    }
}); 

document.getElementById("Num6").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "6";
    }
}); 

document.getElementById("Num7").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "7";
    }
}); 

document.getElementById("Num8").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "8";
    }
});

document.getElementById("Num9").addEventListener("click", function() {
    if(!operacion.innerText){
        NumeroA.innerText += "9";
    }
}); 

document.getElementById("Num0").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "0";
    }
}); 

document.getElementById("Num1").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "1";
    }
}); 

document.getElementById("Num2").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "2";
    }
}); 

document.getElementById("Num3").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "3";
    }
}); 

document.getElementById("Num4").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "4";
    }
}); 

document.getElementById("Num5").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "5";
    }
}); 

document.getElementById("Num6").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "6";
    }
}); 

document.getElementById("Num7").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "7";
    }
}); 

document.getElementById("Num8").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "8";
    }
});

document.getElementById("Num9").addEventListener("click", function() {
    if(operacion.innerText){
        NumeroB.innerText += "9";
    }
});
        
// Hallar resultado.
document.getElementById("Igual").addEventListener("click", function() {
    if(operacion.innerText && NumeroA.innerText && NumeroB.innerText){
        var operar = 0;
        switch(operacion.innerText){
            case "+":
                operar = parseInt(NumeroA.innerText) + parseInt(NumeroB.innerText);
                break;

            case "-":
                operar = parseInt(NumeroA.innerText) - parseInt(NumeroB.innerText);
                break;

            case "*":
                operar = parseInt(NumeroA.innerText) * parseInt(NumeroB.innerText);
                break;

            case "/":
                operar = parseInt(NumeroA.innerText) / parseInt(NumeroB.innerText);
                break;
        }
        Resultado.innerText = operar;
    }
});

// Eliminar datos
document.getElementById("CE").addEventListener("click", function() {
    NumeroA.innerText = "";
    NumeroB.innerText = "";
    operacion.innerText = "";
    Resultado.innerText = "";
});

document.getElementById("C").addEventListener("click", function() {
    if(NumeroB.innerText){
        NumeroB.innerText = NumeroB.innerText.slice(0, -1);
    }else if(operacion.innerText){
        operacion.innerText = operacion.innerText.slice(0, -1);
    }else if(NumeroA.innerText){
        NumeroA.innerText = NumeroA.innerText.slice(0, -1);
    }else if(Resultado.innerText){
        Resultado.innerText = "";
    }
});