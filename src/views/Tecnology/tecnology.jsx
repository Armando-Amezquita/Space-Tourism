import React from "react";
import { useState } from "react";
import styles from './tecnology.module.css';

function Tecnology () {

    const [tecnology, setTecnology] = useState('capsule');

    const handleChangeTecnology = (e) => {
        e.preventDefault();
        setTecnology(e.target.value);
        console.log(e.target.value)
    }

    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <div className={styles.containerButtons}>
                        <button onClick={handleChangeTecnology} value='space' name="space" 
                        className={tecnology === 'space'? styles.buttonsHover : styles.buttons}>1</button>
                        <button onClick={handleChangeTecnology} value='capsule' name="capsule" 
                        className={tecnology === 'capsule'? styles.buttonsHover: styles.buttons}>2</button>
                        <button onClick={handleChangeTecnology} value='vehicle' name="vehicle"
                        className={tecnology === 'vehicle'? styles.buttonsHover : styles.buttons}>3</button>
                    </div>
                    <div className={styles.containerDescription}>
                        {
                            tecnology === 'space' ?
                            <>
                                <h2 className={styles.titleTecnology}> <span className={styles.numberTitle}>03</span>SPACE LAUNCH 101</h2>
                                <p className={styles.titleSecond}>THE TERMINOLOGY...</p>
                                <h1 className={styles.title}>SPACEPORT</h1>
                                <p className={styles.description}>
                                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                                by analogy to the seaport for ships or airport for aircraft. Based in the 
                                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                                of the Earth’s rotation for launch.
                                </p>
                            </>
                            : tecnology === 'capsule' ?
                            <>
                                <h2 className={styles.titleTecnology}> <span className={styles.numberTitle}>03</span>SPACE LAUNCH 101</h2>
                                <p className={styles.titleSecond}>THE TERMINOLOGY...</p>
                                <h1 className={styles.title}>SPACE CAPSULE</h1>
                                <p className={styles.description}>
                                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                                you'll spend your time during the flight. It includes a space gym, cinema, 
                                and plenty of other activities to keep you entertained.
                                </p>
                            </> 
                            : 
                            <>
                                <h2 className={styles.titleTecnology}> <span className={styles.numberTitle}>03</span>SPACE LAUNCH 101</h2>
                                <p className={styles.titleSecond}>THE TERMINOLOGY...</p>
                                <h1 className={styles.title}>LAUNCH VEHICLE</h1>
                                <p className={styles.description}>
                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                                it's quite an awe-inspiring sight on the launch pad!
                            </p>
                            </>
                        }
                    </div>
                </div>
                {
                    tecnology === 'space'?
                    <div className={styles.containerRigth}>
                        <span className={styles.imageSpacePort}></span>
                    </div>
                    : tecnology === 'capsule'?
                    <div className={styles.containerRigth}>
                        <span className={styles.imageCapsule}></span>
                    </div>
                    :
                    <div className={styles.containerRigth}>
                        <span className={styles.imageVehicle}></span>
                    </div>
                }
                
            </main>
        </>
    )
}

export default  Tecnology;