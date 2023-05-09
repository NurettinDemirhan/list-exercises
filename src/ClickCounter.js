import { useState } from "react";

export function ClickCounter({initialValue= 0}){
    
    const [count, setCount] = useState(initialValue)
    
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{width: 50 , height: 50}} onClick={()=> setCount(c=> c-1)}>-</button>
            <button style={{width: 50 , height: 50}} onClick={()=> setCount(c=> c+1)}>+</button>
        </div>
    )
}