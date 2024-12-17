import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link";

import styles from './Footer.module.scss';

export const Footer = () => {
    const t = useTranslations();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a href='/' className={styles.logo}>
                        <Image
                            src='/icons/logo.svg'
                            alt={t('alt.logo')}
                            width={109}
                            height={52}
                        />
                    </a>

                    <div className={styles.links}>
                        <p className={styles.followUs}>{t('footer.followUs')}</p>

                        <a href='/' className={styles.link}>
                            <Image
                                src={'/icons/insta.svg'}
                                alt={t('alt.insta')}
                                width={20}
                                height={20}
                            />
                        </a>
                    </div>

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

                    <nav className={styles.nav}>
                        <li>
                            <Link href='/' className={styles.navLink}>{t('headerNavigation.home')}</Link>
                        </li>

                        <li>
                            <Link href='/' className={styles.navLink}>{t('headerNavigation.games')}</Link>
                        </li>

                        <li>
                            <Link href='/' className={styles.navLink}>{t('headerNavigation.faq')}</Link>
                        </li>
                    </nav>
                </div>
            </div>
        </footer>
    )
}