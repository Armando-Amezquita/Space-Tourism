import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';


function Home () {
    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <p className={styles.principalParrafo}>SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className={styles.title}>SPACE</h1>
                    <p className={styles.description}>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className={styles.containerRigth}>
                    <Link to='/destination'>
                        <button className={styles.explore}>
                            Explore
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Home;