
import { useState, useEffect, useRef, useReducer} from "react";

const initialstate = [
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
  if (accion.type == "DONE"){
    let id = accion.payload;
    let newState = estado.map((unTodo) =>{
      if (unTodo.id === id){
        return {...unTodo, isCompleted :  !unTodo.isCompleted}
      }
      return unTodo;
    });
    return newState;

  }
}

function App(){
  let [todoText, setTodotext] = useState("");
  let [state, dispatch] = useReducer(reducer, initialstate);
  const manejaCambio = ({target}) =>{
    setTodotext(target.value)

  }
  const manejaAgregar() =>{
    dispatch({type:"ADD_TODO", payload:{name:todoText}})
  }
  return (<>
  <p> Nuevo Todo
    <input type="text" value ={todoText} onChange={manejaCambio}></input>
    <button onClick={manejaAgregar}>Agregar</button>
    <ul>
      {
        state.map(({name, isCompleted,id}) =>{
          return (<li key ={id}>
            {name}
          </li>)
        })
      }
    </ul>
    </p>
  </>)
}



/* un pg donde el usuario puede agregar elementos a una lista de cosas que hacer y el usuario va a poder marcar o
no como completado o no un elemento de la lista*/


export default App;
