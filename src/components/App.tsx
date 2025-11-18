import { useState } from "react";
import styles from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
export const App = () =>{

    const [count, setCount] = useState<number>(0);
    const increment = ()=>{ setCount(prev=>prev+1)}
    return(
        <>
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/shop'}>shop</Link>
        <h1 className={styles.value}>{count}</h1>
        <button className={styles.button} onClick={increment}>click to <span>inc</span></button>
        <Outlet></Outlet>
        </>
    );
}
