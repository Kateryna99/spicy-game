import styles from './GamesCard.module.scss';
import {useTranslations} from "next-intl";
import Image from "next/image";
import {Pagination} from "@UI/Pagination/Pagination";

export const GamesCard = ({title, img, description, rotateDegree, activeIndex, sliderList, setActiveIndex, swiperRef }) => {
    const t = useTranslations("games");

    return (
        <article className={styles.gameCard}>
            <div className={styles.header}>
                <h5 className={styles.subtitle}>{t("title")}</h5>

                <h2 className={styles.title}>{t(title)}</h2>

                <p className={styles.text}>{t(description)}</p>

                <Pagination activeIndex={activeIndex} sliderList={sliderList} setActiveIndex={setActiveIndex} swiperRef={swiperRef} />
            </div>

            <div className={styles.body}>
               <Image
                   src={img}
                   alt='Game instalation'
                   width={300}
                   height={500}
                   className={styles.gameImg}
                   style={{transform: `rotate(${rotateDegree}deg)`}}
               />
            </div>
        </article>
    )
}