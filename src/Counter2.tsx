import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(1)
    return(
        <div>
            <h1>Multiply</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + count)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}