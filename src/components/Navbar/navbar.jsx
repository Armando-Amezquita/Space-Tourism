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
                    <p className={styles.navegation}> <span className={styles.numberTitle}>00</span> Home </p>
                </Link>
                <Link to='/destination' className={styles.link} >
                    <p className={styles.navegation}> <span className={styles.numberTitle}>01</span> Destionation </p>
                </Link>
                <Link to='/crew' className={styles.link}>
                    <p className={styles.navegation}> <span className={styles.numberTitle}>02</span> Crew </p>
                </Link>
                <Link to='/tecnology' className={styles.link}>
                    <p className={styles.navegation}> <span className={styles.numberTitle}>03</span> Tecnology </p>
                </Link>
            </div>
        </nav>
    )
}