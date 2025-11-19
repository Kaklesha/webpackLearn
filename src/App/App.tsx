import { useState } from "react";
import styles from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import avatarPng from '@/assets/45xQrypuOWg_1.png';
import avatarJpg from '@/assets/Lecpu25jZrQ.jpg';
import AvatarSvg from '@/assets/rightarch.svg';

//TREE SHAKING
function TODO() {
console.log("FFFF")
}

export const App = () =>{

    const [count, setCount] = useState<number>(0);
    const increment = ()=>{ setCount(prev=>prev+1)}

    // if(__PLATFORM__==="desktop"){
    //     return <>ISDESKTOPPATFORM</>
    // }
    // if(__PLATFORM__==="mobile"){
    //     return <>ISMOBILEPATFORM</>
    // }

    // if(__ENV_MODE__==='development'){
    //     alert("DEV");
    //     addDevtools()
    // }

    return(
        <>
        <h2>  PLATFORM={__PLATFORM__}</h2>
            <>
                <img className={styles.imageAvatar} src={avatarPng} alt="avatar" />
                <img className={styles.imageAvatar} src={avatarJpg} alt="avatar" />
            </>
            <>
                <AvatarSvg height={160} width={160} style={{color:'red'}} />
                {/* вместо плагина на цвет svg  fill={"red"} stroke={"red"}  */}
            </>
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/shop'}>shop</Link>
        <h1 className={styles.value}>{count}</h1>
        <button className={styles.button} onClick={increment}>click to <span>inc</span></button>
        <Outlet></Outlet>
        </>
    );
}
