import React from "react";
import styles from './destination.module.css';

function Destination () {
    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <h2 className={styles.titleMars}> <span className={styles.numberTitle}>01</span> PICK YOUR DESTINATION</h2>
                    <span className={styles.imageMars}></span>
                </div>
                <div className={styles.containerRigth}>
                    <div>
                        <span className={styles.principalParrafoS}>MOON</span> <span className={styles.principalParrafoM}>MARS</span> <span className={styles.principalParrafo}>EUROPA</span> <span className={styles.principalParrafo}>TITAN</span>
                    </div>
                    <h1 className={styles.title}>MARS</h1>
                    <p className={styles.description}>
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!
                    </p>
                </div>
                
            </main>
        </>
    )
}

export default Destination;
