import React from "react";
import { Link } from "react-router-dom";
import styles from './navbar.module.css';

export default function Nav () {

    return (
        <nav className={styles.nav_container}>
            <div className={styles.containerLeft}>
                <button className={styles.boton}>X</button>
                <p className={styles.line}>  ----------------------------------------------------------------------------------------------</p>
            </div>
            <div className={styles.containerRigth}>
                <Link to='/'  className={styles.link}>
                    <p className={styles.navegation}> Home </p>
                </Link>
                <Link to='/destination' className={styles.link} >
                    <p className={styles.navegation}> Destionation </p>
                </Link>
                <Link to='/crew' className={styles.link}>
                    <p className={styles.navegation}> Crew </p>
                </Link>
                <Link to='/tecnology' className={styles.link}>
                    <p className={styles.navegation}> Tecnology </p>
                </Link>
            </div>
        </nav>
    )
}