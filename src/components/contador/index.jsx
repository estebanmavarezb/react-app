import React,{useState} from 'react'
import './contador.css'

function ContadorComponent({count, setCount, cupo}) {
    

    const restaSuma = (operacion) => {
       if (operacion === "-") {
           if(count === 1) {
               alert('No menos de 1')
               setCount(1)
               return;
           }
           setCount (count - 1)
       } else if(operacion === "+") {
            if(count === cupo) {
                alert(`No mas de ${cupo}`)
                setCount(10)
                return;
            }
            setCount (count + 1)

       }
    }

    return(
        <div className="contador">
            <a className="btn-contador" onClick={() => restaSuma("-")}>-</a>
                <span>{count}</span>
            <a className="btn-contador" onClick={() => restaSuma("+")}>+</a>
        </div>
    )
}

export default ContadorComponent