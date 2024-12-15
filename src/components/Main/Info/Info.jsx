import {Button} from "@UI/Button/Button";

import styles from './Info.module.scss';
import {useTranslations} from "next-intl";

export const Info = () => {
    const t = useTranslations();

    return (
        <section className={styles.info}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>{t("info.title")}</h3>

                    <p className={styles.text}>{t("info.desc")}</p>

                    <Button text={t("buttons.download")} secondary/>
                </div>
            </div>
        </section>
    )
}