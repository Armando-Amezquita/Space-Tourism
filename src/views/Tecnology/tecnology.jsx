import React from "react";
import styles from './tecnology.module.css';

function Tecnology () {
    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <div className={styles.containerButtons}>
                        <button className={styles.buttons}>1</button>
                        <button className={styles.buttons}>2</button>
                        <button className={styles.buttons}>3</button>
                    </div>
                    <div className={styles.containerDescription}>
                        <h2 className={styles.titleTecnology}> <span className={styles.numberTitle}>03</span>SPACE LAUNCH 101</h2>
                        <p className={styles.titleSecond}>THE TERMINOLOGY...</p>
                        <h1 className={styles.title}>LAUNCH VEHICLE</h1>
                        <p className={styles.description}>
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                        it's quite an awe-inspiring sight on the launch pad!.
                        </p>
                    </div>
                </div>
                <div className={styles.containerRigth}>
                    <span className={styles.imageMars}></span>
                </div>
                
            </main>
        </>
    )
}

export default  Tecnology;