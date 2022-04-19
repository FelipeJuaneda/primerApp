import {React, useState} from 'react';


const Contador = () => {
    const [valor, setValor] = useState(0);
    const aumentar = ()=>{
        setValor(valor + 1);
    }
    const disminuir = ()=>{
        setValor(valor - 1);
    }


  return (
    <div>
        <button onClick={disminuir}>-</button>
        <b>{valor}</b>
        <button onClick={aumentar}>+</button>
    </div>
  )
}

export default Contador