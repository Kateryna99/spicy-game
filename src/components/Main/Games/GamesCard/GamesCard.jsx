import {useTranslations} from "next-intl";
import classNames from "classnames";

import Image from "next/image";

import styles from './GamesCard.module.scss';

export const GamesCard = ({title, img, description, position}) => {
    const t = useTranslations("games");

    return (
        <article className={classNames(styles.gameCard, {
            [styles.position]: position,
        })}>
            <div className={styles.header}>
                <h5 className={styles.subtitle}>{t("title")}</h5>

                <h2 className={styles.title}>{t(title)}</h2>

                <p className={styles.text}>{t(description)}</p>

            </div>

            <div className={styles.body}>
               <Image
                   src={img}
                   alt={t(title)}
                   width={530}
                   height={656}
                   className={styles.gameImg}
               />
            </div>
        </article>
    )
}