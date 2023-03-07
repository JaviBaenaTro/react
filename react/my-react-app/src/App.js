

import { useEffect, useState, useRef } from "react";

function App() {

    let inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []),
  };

    return(<div>
        <input ref={inputEl} type="text"> 
        </input>
        <button onClick={onClickBoton}>
            enfoca!
        </button>
    </div>)
}



export default App;
