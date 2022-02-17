import React, {useState} from "react";
import styles from './destination.module.css';
import { Link } from 'react-router-dom'

function Destination () {
    
    const [destination, setDestination] = useState('moon');

    const handleChangeDestination = (e) => {
        e.preventDefault();
        setDestination(e.target.value);
    }

    return (
        <>
            <main id='main' className={styles.main_container} >
                <div className={styles.containerLeft}>
                    <h2 className={styles.titleMars}> 
                        <span className={styles.numberTitle}>01</span> PICK YOUR DESTINATION
                    </h2>
                    {
                        destination === 'moon'? <span className={styles.imageMoon}></span> 
                        : destination === 'mars'? <span className={styles.imageMars}></span> 
                        : destination === 'europa'? <span className={styles.imageEuropa}></span> 
                        : <span className={styles.imageTitan}></span>
                    }
                    
                </div>
                <div className={styles.containerRigth}>
                    <div>
                        <button onClick={handleChangeDestination} name="moon" value='moon' 
                        className={destination === 'moon' ? styles.principalParrafoH: styles.principalParrafo}>MOON</button> 
                        <button onClick={handleChangeDestination} name="mars" value='mars' 
                        className={destination === 'mars' ? styles.principalParrafoH : styles.principalParrafo}>MARS</button> 
                        <button onClick={handleChangeDestination} name="europa" value='europa' 
                        className={destination === 'europa' ? styles.principalParrafoH : styles.principalParrafo}>EUROPA</button> 
                        <button onClick={handleChangeDestination} name="titan" value='titan' 
                        className={destination === 'titan' ? styles.principalParrafoH : styles.principalParrafo}>TITAN</button>
                    </div>
                    {
                        destination === 'moon'? <h1 className={styles.title}>MOON</h1>
                        : destination === 'mars'? <h1 className={styles.title}>MARS</h1> 
                        : destination === 'europa'? <h1 className={styles.title}>EUROPA</h1>
                        : <h1 className={styles.title}>TITAN</h1>
                    }
                    {
                        destination === 'moon' ? 
                        <>
                            <p className={styles.description}>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                            </p>
                            <div className={styles.line}> 
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Avg. distance </p>
                                    <p className={styles.avgKm}> 384,400 km </p>
                                </div>
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Est. travel time</p>
                                    <p className={styles.avgKm}>  3 days </p>
                                </div>
                            </div>
                        </>
                        : destination === 'mars' ? 
                        <>
                            <p className={styles.description}>
                            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. It’s two and a half times 
                            the size of Everest!
                            </p>
                            <div className={styles.line}> 
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Avg. distance </p>
                                    <p className={styles.avgKm}> 225 mil. km </p>
                                </div>
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Est. travel time</p>
                                    <p className={styles.avgKm}>  9 months </p>
                                </div>
                            </div>
                        </>
                        : destination === 'europa' ? 
                        <>
                            <p className={styles.description}>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                            ice skating, curling, hockey, or simple relaxation in your snug 
                            wintery cabin.
                            </p>
                            <div className={styles.line}> 
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Avg. distance </p>
                                    <p className={styles.avgKm}> 628 mil. km </p>
                                </div>
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Est. travel time</p>
                                    <p className={styles.avgKm}>  3 years</p>
                                </div>
                            </div>
                        </>
                        : <>
                            <p className={styles.description}>
                            The only moon known to have a dense atmosphere other than Earth, Titan 
                            is a home away from home (just a few hundred degrees colder!). As a 
                            bonus, you get striking views of the Rings of Saturn.
                            </p> 
                            <div className={styles.line}> 
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Avg. distance </p>
                                    <p className={styles.avgKm}>   1.6 bil. km </p>
                                </div>
                                <div className={styles.avg}>
                                    <p className={styles.avgPTitle}> Est. travel time</p>
                                    <p className={styles.avgKm}>    7 years</p>
                                </div>
                            </div>
                        </>
                    }
                    
                    
                </div>
                
            </main>
        </>
    )
}

export default Destination;
