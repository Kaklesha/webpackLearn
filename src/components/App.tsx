import { useState } from "react";
import styles from './App.module.scss';
export const App = () =>{

    const [count, setCount] = useState<number>(0);
    const increment = ()=>{ setCount(prev=>prev+1)}
    return(
        <>
        <h1 className={styles.value}>{count}</h1>
        <button className={styles.button} onClick={increment}>click to <span>inc</span></button>
        </>
    );
}
