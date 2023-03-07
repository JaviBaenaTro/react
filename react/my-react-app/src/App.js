
import { useState, useEffect, useRef, useReducer} from "react";

const state = [
  {
  id:1,
  name: "terminar esta clase",
  isCompleted: false,
},
];

const reducer = (estado, accion) =>{
  if(accion.type == "ADD_TODO"){
    let name = accion.payload;
    /* payload es como un comodin, a un no se sabe lo que se va a poner */
    return [...estado,{id : Math.random(Math.floor())*9,name, isCompleted:false}]
  }
  if (condition.type == "DONE"){
    let id = accion.payload;
    let newStake = estado.map((unTodo) =>{
      if (unTodo.id== id){
        return {...unTodo, isCompleted :  !unTodo.isCompleted}
      }
      return unTodo;
    });
    return newState;

  }
}

function App(){

  return <></>
}



/* un pg donde el usuario puede agregar elementos a una lista de cosas que hacer y el usuario va a poder marcar o
no como completado o no un elemento de la lista*/


export default App;
