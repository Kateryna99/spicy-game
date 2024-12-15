import classNames from "classnames";

import {LANGUAGES} from "@/constants/languages";

import styles from './LaptopLanguages.module.scss'

export const LaptopLanguages = ({handleLanguageChange, localActive}) => {

    return (
        <div className={styles.languages}>
            <div
                className={classNames(styles.languageItem, styles.active)}
            >
                <p className={styles.text}>{localActive}</p>
            </div>

            <div
                className={classNames(styles.languageList)}
            >
                {LANGUAGES
                    .filter(lang => lang.title !== localActive)
                    .map(otherLang => (
                        <div
                            key={otherLang.id}
                            className={styles.languageItem}
                            onClick={() => handleLanguageChange(otherLang.title)}
                        >
                            <p className={styles.text}>{otherLang.title}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}