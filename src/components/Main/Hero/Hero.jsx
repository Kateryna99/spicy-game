import {useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";

import {Button} from "@UI/Button/Button";

import styles from './Hero.module.scss';

export const Hero = () => {
    const t = useTranslations();

    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className='container'>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{t('hero.title')}</h1>

                        <p className={styles.text}>{t('hero.desc')}</p>

                        <div className={styles.marketButtons}>
                            <Link href='/' className={styles.marketButton}>
                                <Image
                                    src='/images/google_play.png'
                                    alt={t('alt.googlePlay')}
                                    width={155}
                                    height={45}
                                />
                            </Link>

                            <Link href='/' className={styles.marketButton}>
                                <Image
                                    src='/images/app_store.png'
                                    alt={t('alt.appStore')}
                                    width={155}
                                    height={45}
                                />
                            </Link>
                        </div>
                        <Button text={t('buttons.play')}/>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src='/images/hero_banner.png'
                        alt={t('alt.heroBanner')}
                        height={640}
                        width={1018}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    )
}