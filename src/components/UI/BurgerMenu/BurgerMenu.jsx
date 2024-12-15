import styles from './BurgerMenu.module.scss';
import classNames from "classnames";

export const BurgerMenu = ({handleBurgerClick, isOpen}) => {
    return (
        <div
            className={classNames(styles.burgerMenu,
                {
                    [styles.active]: isOpen
                })}
            onClick={() => handleBurgerClick(prevState =>!prevState)}
        >
            <div className={styles.wrapper}>
                <div className={styles.item}/>

                <div className={styles.item}/>

                <div className={styles.item}/>
            </div>
        </div>
    )
}