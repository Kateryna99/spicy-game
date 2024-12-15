import classNames from "classnames";

import {LANGUAGES} from "@/constants/languages";

import styles from './Languages.module.scss';

export const Languages = ({handleLanguageChange, localActive}) => {
    return (
        <div className={styles.languages}>
            {LANGUAGES.map(lang => (
                <div
                    key={lang.id}
                    className={classNames(styles.languageItem,
                        {[styles.active]: lang.title === localActive})}
                    onClick={() => handleLanguageChange(lang.title)}
                >
                    <p className={styles.text}>{lang.title}</p>
                </div>
            ))}
        </div>
    );
}
