function Tarea(accion,fecha){
    this.accion= accion;
    this.fecha = fecha;
}
//funcion para crear lista tareas
var caja = [];
function EntradaDatosListaNueva() {
    var nombreList= document.createElement("input");
    var btnEnviar=document.createElement("button")
    var listaTarea =document.getElementById("tabla");
        listaTarea.appendChild(nombreList);
        listaTarea.appendChild(btnEnviar);
        btnEnviar.innerText= "Crear lista";
    btnEnviar.onclick = function(){
     var listaImprimirNombre=document.getElementById("listaT")
     var listaCrear= document.createElement("ul");
     var botonBorrar=document.createElement("button");  
        listaImprimirNombre.appendChild(listaCrear);
        listaImprimirNombre.appendChild(botonBorrar);
        listaCrear.innerHTML=nombreList.value;
        botonBorrar.innerText="BorrarLista";
        listaCrear.id= Date.now();
        botonBorrar.value=listaCrear.id;
        botonBorrar.onclick= function(){
    var idEliminar=document.getElementById(this.value);
         listaCrear.removeChild(this);
         listaCrear.removeChild(idEliminar);

        mostrarLista();
     }
    }   
  }
function mostrarLista(){
        var entradaP =0;
        var accion = prompt("agrega elemento" + caja[j]);
        var nuevo= document.createElement("p");
        var botonBorrar= document.createElement("button");
            nuevo.id=Date.now();
            botonBorrar.value= nuevo.id;
            botonBorrar.innerText= "realizado";
            nuevo.innerText=accion;
            listaCrear.appendChild(nuevo);
            listaCrear.appendChild(botonBorrar);
            botonBorrar.onclick= function(){
          var idEliminar=document.getElementById(this.value);
            listaCrear.removeChild(this);
            listaCrear.removeChild(idEliminar);

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
          document.getElementById("agregaUrgentes").value=null;
    
    botonBorrar.onclick= function(){
        var idEliminar=document.getElementById(this.value);
           lista.removeChild(this);
           lista.removeChild(idEliminar);
    }
}