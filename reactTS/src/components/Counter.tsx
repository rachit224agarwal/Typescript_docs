import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div> Cups Ordered : {count}</div>
            <button onClick = {() => setCount( (c) => c+1 )}>One More</button>
        </div>
    )
}