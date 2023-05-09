import { useState, useEffect } from "react";

export function ClickCounter({initialValue= 0, onCounterChange}){
    
    const [count, setCount] = useState(initialValue)
    
    useEffect(() => {
        onCounterChange(count);
      }, [count, onCounterChange]);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{width: 50 , height: 50}} onClick={()=> setCount(c=> c-1)}>-</button>
            <button style={{width: 50 , height: 50}} onClick={()=> setCount(c=> c+1)}>+</button>
        </div>
    )
}