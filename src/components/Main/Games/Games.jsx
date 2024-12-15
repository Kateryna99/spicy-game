import {gamesList} from "@/constants/gamesList";

import {GamesCard} from "@main/Games/GamesCard/GamesCard";

import styles from './Games.module.scss';
import {GamesSlider} from "@main/Games/GamesSlider/GamesSlider";

export const Games = () => {
    return (
        <div className={styles.games} id='games'>
            <div className={styles.wrapper}>
                <div className='container'>
                    <div className={styles.gamesList}>
                        {gamesList.map(game => (
                            <GamesCard key={game.id} {...game} />
                        ))}
                    </div>
                    <GamesSlider gamesList={gamesList}/>
                </div>
            </div>
        </div>
    )
}