'use client';

import {useTranslations} from "next-intl";
import {useState} from "react";

import {FAQItem} from "@main/FAQ/FAQItem/FAQItem";
import {FAQList} from "@/constants/FAQList";

import styles from './FAQ.module.scss';

export const FAQ = () => {
    const [isOpen,setIsOpen] = useState(false);

    const t = useTranslations("faq");

    return (
        <section className={styles.FAQ} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.wrapper}>
                <div className='container'>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{t("title")}</h3>

                        <div className={styles.list}>
                            {FAQList.map(faq => (
                                <FAQItem key={faq.id} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}