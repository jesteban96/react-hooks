import { useEffect } from "react";

export const Message = () => {

    const onMouseOver = ({x,y})=>{
      const coord = {x,y}
      console.log(coord);
    }

    useEffect(() => {
      window.addEventListener('mousemove',onMouseOver);
    
      return () => {
        window.removeEventListener('mousemove',onMouseOver)
      }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
}
