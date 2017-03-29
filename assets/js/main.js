function Tarea(accion,fecha){
    this.accion= accion;
    this.fecha = fecha;
}
//funcion para crear lista tareas
 var elemento=[];
function crearT(){
    var elementos=parseInt(prompt("¿Cuantos elementos tiene tu lista?"));
    var fecha=prompt("fecha limite")
    var listaTarea =document.getElementById("listaP");
    var listaCrear= document.createElement("ul");
        listaTarea.appendChild(listaCrear);
    for(var i =1; i<=elemento.lenght ;i++){
        elemento.push(elementos);
    var nuevo= document.createElement("p");
        elemento.value=accion +" "+fecha;
        listaCrear.appendChild(elemento);
    }
}
 
function agregarP(){
    var elemento =document.getElementById("agregaPendientes").value;
    var lista=document.getElementById("listaP");
    var li= document.createElement("p");
    var botonBorrar= document.createElement("button");
        li.id= Date.now();
        botonBorrar.value =li.id;
        botonBorrar.innerText= "borrar";
        li.innerHTML=elemento;
    botonBorrar.onclick= function(){
        var idEliminar=document.getElementById(this.value);
           lista.removeChild(this);
           lista.removeChild(idEliminar);
        
    }
    document.getElementById("agregaPendientes").value=null;
    lista.appendChild(li);
    lista.appendChild(botonBorrar);
}
function agregarU(){
    var urgente = document.getElementById("agregaUrgentes").value;
    var lista=document.getElementById("listaU");
    var entrada= document.createElement("p");
    var botonBorrar= document.createElement("button");
        entrada.id= Date.now();
        botonBorrar.value= entrada.id;
        botonBorrar.innerText= "borrar";
        entrada.innerHTML=urgente;
        lista.appendChild(entrada);
         lista.appendChild(botonBorrar);
          urgente.value=null;
    
    botonBorrar.onclick= function(){
        var idEliminar=document.getElementById(this.value);
           lista.removeChild(this);
           lista.removeChild(idEliminar);
    }
}