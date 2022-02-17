import React, { useState } from "react";
import styles from './crew.module.css';

function Crew () {

    const [crew, setCrew] = useState('commander')

    const handleChangeCrew = (e) => {
        e.preventDefault();
        setCrew(e.target.value);
    }

    return (
        <>
            <main id='main' className={styles.main_container} >
                {
                    crew === 'commander'? 
                    <>
                    <div className={styles.containerC}>
                        <div className={styles.containerLeft}>
                            <h2 className={styles.titleCrew}> <span className={styles.numberTitle}>02</span> MEET YOUR CREW</h2>
                            <p className={styles.titleSecond}>COMMANDER</p>
                            <h1 className={styles.title}>DOUGLAS HURLEY</h1>
                            <p className={styles.description}>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                            </p>
                        </div>
                        <div className={styles.containerRigth}>
                            <span className={styles.imageCommander}></span>
                        </div>
                    </div>
                    </>
                    : crew === 'engineer'?
                    <>
                    <div className={styles.containerC}>
                        <div className={styles.containerLeft}>
                            <h2 className={styles.titleCrew}> <span className={styles.numberTitle}>02</span> MEET YOUR CREW</h2>
                            <p className={styles.titleSecond}>FLIGHT ENGINEER</p>
                            <h1 className={styles.title}>ANOUSHEH ANSARI</h1>
                            <p className={styles.description}>
                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space.
                            </p>
                        </div>
                        <div className={styles.containerRigth}>
                            <span className={styles.imageEngineer}></span>
                        </div>
                    </div>
                    </>
                    : crew === 'pilot'?
                    <>
                    <div className={styles.containerC}>
                        <div className={styles.containerLeft}>
                            <h2 className={styles.titleCrew}> <span className={styles.numberTitle}>02</span> MEET YOUR CREW</h2>
                            <p className={styles.titleSecond}>PILOT</p>
                            <h1 className={styles.title}>VICTOR GLOVER</h1>
                            <p className={styles.description}>
                            Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                            International Space Station. Glover is a commander in the U.S. Navy where 
                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                            station systems flight engineer. 
                            </p>
                        </div>
                        <div className={styles.containerRigth}>
                            <span className={styles.imagePilot}></span>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <div className={styles.containerC}>
                        <div className={styles.containerLeft}>
                            <h2 className={styles.titleCrew}> <span className={styles.numberTitle}>02</span> MEET YOUR CREW</h2>
                            <p className={styles.titleSecond}>MISSION SPECIALIST</p>
                            <h1 className={styles.title}>MARK SHUTTLEWORTH</h1> 
                            <p className={styles.description}>
                            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                            African to travel to space as a space tourist.
                            </p>
                        </div>
                        <div className={styles.containerRigth}>
                            <span className={styles.imageSpecial}></span>
                        </div>
                    </div>
                    </>
                    
                }
                <div className={styles.containerButtons}>
                    <button name="commander"  value="commander" onClick={handleChangeCrew}
                    className={ crew === 'commander'?  styles.buttonsHover: styles.buttons}></button>
                    <button name="engineer"  value="engineer" onClick={handleChangeCrew}
                    className={crew === 'engineer'?  styles.buttonsHover: styles.buttons}></button>
                    <button name="pilot"  value="pilot" onClick={handleChangeCrew}
                    className={crew === 'pilot'?  styles.buttonsHover: styles.buttons}></button>
                    <button name="missionEspecialist"  value="missionEspecialist" onClick={handleChangeCrew}
                    className={crew === 'missionEspecialist'?  styles.buttonsHover: styles.buttons}></button>
                </div>
                
            </main>
        </>
    )
}

export default  Crew;