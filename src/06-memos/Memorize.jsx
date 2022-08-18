import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
    
    const {counter,increment}= useCounter(10);
    return (
        <>
            <h1>Counter <Small counter={counter} ></Small> </h1>
            <hr />

            <button className="btn btn-info" onClick={increment}>+1</button>
        </>
    )
}
