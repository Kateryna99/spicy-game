import {useTranslations} from "next-intl";

import styles from './AdvantagesCard.module.scss'
import Image from "next/image";

export const AdvantagesCard = ({icon, title, description}) => {
    const t = useTranslations('advantages');

    return (
            <article className={styles.wrapper}>
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt={title} width={25} height={25} />
                </div>

                <h3 className={styles.title}>{t(title)}</h3>

                <p className={styles.description}>{t(description)}</p>
            </article>
    )
}