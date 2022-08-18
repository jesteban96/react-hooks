import { useState } from "react";
import { useCounter } from "../hooks/useCounter"


export const MemorizeHook = () => {
    
    const [show, setShow] = useState(true)
    const {counter,increment}= useCounter(10);
    return (
        <>
            <h1>Counter <small> {counter} </small></h1>
            <hr />

            <button className="btn btn-info" onClick={increment}>+1</button>

            <button 
                className="btn btn-outline-primary"
                onClick={()=>setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>  
        </>
    )
}
