// "use client"
import styles from "./Navbar.module.css"
// import Link from 'next/link'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"
// import { usePathname } from 'next/navigation'
import { useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setRouteLoading } from "../redux/routeSlice"
import { setRouteColor } from "../redux/routeSlice"

import Settings from './Settings'

const Navbar = () => {
    const dispatch = useDispatch()
    //   const pathname = usePathname()
    const location = useLocation()

    const handleClick = (targetPath) => {
        // console.log("location", location);
        // console.log("location.pathname", location.pathname);
        // console.log('targetPath', targetPath);
        if (location.pathname != targetPath) {

            if (targetPath == "/home") {
                dispatch(setRouteColor("var(--color3)"))
            }
            else { 
                dispatch(setRouteColor("var(--color2)"))
            }

            dispatch(setRouteLoading(true))
        }
    }


    return (
        <header className={styles.header}>
            <Link href="/home" onClick={() => handleClick("/home")} className={styles.logoAnchor}>
                <img src="./logo.png" alt="" className={styles.logo1} />
            </Link>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logoContainer}>
                        <h1>
                            <span>
                                ROCK
                            </span>
                            <span>
                                PAPER
                            </span>
                            <span>
                                SCISSOR
                            </span>
                        </h1>
                    </div>
                </div>
                <div className={styles.middle}>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li>
                            <Link to="/home" className={location.pathname === "/home" ? styles.active : ""} onClick={() => handleClick("/home")}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === "/about" ? styles.active : ""} onClick={() => handleClick("/about")}>ABOUT</Link>
                        </li>
                        <li className={styles.settings}>
                            <Settings />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Navbar