import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    return(
        <div className="card score-card">
            <h3 className="users-title">Counter: {count}</h3>
            <div className="actions-grid compact">
                <button onClick={handleAdd}>Add +1</button>
            </div>
        </div>
    )
}