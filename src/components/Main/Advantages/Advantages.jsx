import {useTranslations} from "next-intl";

import {advantagesCards} from "@/constants/advantagesCards";

import {AdvantagesCard} from "@main/Advantages/AdvantagesCard/AdvantagesCard";

import styles from './Advantages.module.scss'

export const Advantages = () => {
    const t = useTranslations("advantages");

  return (
      <section className={styles.advantages}>
          <div className={styles.wrapper}>
              <div className="container">
                  <div className={styles.header}>
                      <h3 className={styles.title}>{t("title")}</h3>

                      <p className={styles.text}>{t("desc")}</p>
                  </div>

                  <div className={styles.list}>
                      {advantagesCards.map(advantage => (
                          <AdvantagesCard key={advantage.id} {...advantage} />
                      ))}
                  </div>
              </div>
          </div>
      </section>
  )
}