import React from 'react';
import ReactDOM from 'react-dom/client';



let numeros = [1,2,3,4,5];
let elementos = numeros.map((numero)=>

<li>{numeros}</li>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <div>
  <h2> mi pagina</h2>
  <p>gdsfbb</p>
  <ul>{elementos}
  </ul>
 </div>
);


