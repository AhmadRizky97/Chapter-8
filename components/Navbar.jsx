import React  from "react";
import { Link } from "react-router-dom";
import style from '../asset/styles/navbar.module.css'

export default function Navbar (props) {
    return (
        <>
    <div className={style.navbar}>
        <Link to='/'>Home </Link>
        <Link to='/about'> About</Link>
        <Link to='/register'> Register</Link>
    </div>
        </>
    );
}
