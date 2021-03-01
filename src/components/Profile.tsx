import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/danvargaa.png" alt="Daniel Vargas"></img>
            <div>
                <strong>Daniel Vargas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level {level}
                    </p>
            </div>
        </div>
    );
}