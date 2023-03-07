import { useEffect, useState, useRef } from "react";

function App() {

    let inputEl = useRef(null);

    const onClickBoton = () => {
        inputEl.current.focus();
    };

    return(<div>
        <input ref={inputEl} type="text"> 
        </input>
        <button onClick={onClickBoton}>
            enfoca!
        </button>
    </div>)
}



/* investigar sobre el usecontex y traer un ejemplo */
/* new referes  */

export default App;