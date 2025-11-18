import { useState } from "react";

export const App = () =>{

    const [count, setCount] = useState<number>(0);
    const increment = ()=>{ setCount(prev=>prev+1)}
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>click to inc</button>
        </>
    );
}
