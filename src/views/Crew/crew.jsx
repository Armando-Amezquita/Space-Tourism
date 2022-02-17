import React from "react";
import styles from './crew.module.css';

function Crew () {
    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <h2 className={styles.titleCrew}> <span className={styles.numberTitle}>02</span> MEET YOUR CREW</h2>
                    <p className={styles.titleSecond}>FLIGHT ENGINEER</p>
                    <h1 className={styles.title}>ANOUSHEH ANSARI</h1>
                    <p className={styles.description}>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                    fly to the ISS, and the first Iranian in space.
                    </p>
                    <div className={styles.containerButtons}>
                        <button className={styles.buttons}></button>
                        <button className={styles.buttons}></button>
                        <button className={styles.buttons}></button>
                        <button className={styles.buttons}></button>
                    </div>
                </div>
                <div className={styles.containerRigth}>
                    <span className={styles.imageMars}></span>
                </div>
                
            </main>
        </>
    )
}

export default  Crew;