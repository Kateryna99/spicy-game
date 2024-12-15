import {useRef, useEffect, useState} from "react";
import {useTranslations} from "next-intl";

import styles from "./FAQItem.module.scss";
import classNames from "classnames";

export const FAQItem = ({question, answer}) => {
    const [height, setHeight] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations("faq");
    const answerRef = useRef(null);

    useEffect(() => {
        if (answerRef.current) {
            setHeight(answerRef.current.getBoundingClientRect().height)
        }
    }, [isOpen]);

    return (
        <div
            className={styles.FAQItem}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={classNames(styles.question, {
                    [styles.active]: isOpen
                })}
            >
                <h4 className={styles.questionTitle}>{t(question)}</h4>

                <div className={classNames(styles.questionIcon, {
                    [styles.active]: isOpen
                })}/>
            </div>

            <div
                className={(styles.content)}
                style={{
                    height: isOpen ? `${height}px` : '0',
                }}
            >
                <div className={styles.answer} ref={answerRef}>
                    <p className={styles.answerText}>{t(answer)}</p>
                </div>
            </div>
        </div>
    )
}