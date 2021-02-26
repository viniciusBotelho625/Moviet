import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58275652?s=460&u=d0e6003dcb493d1ff1017455897ce7b6607cb7e4&v=4" alt="Vinicius Botelho" />
            <div>
                <strong>Vinicius Botelho</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    ); 
}