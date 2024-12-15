'use client'

import Link from "next/link";
import classNames from "classnames";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import {Languages} from "@UI/Languages/Languages";

import styles from './Navigation.module.scss';
import {LaptopLanguages} from "@UI/Languages/LaptopLanguages/LaptopLanguages";

export const Navigation = ({isOpen, handleMenuAction}) => {
   const t = useTranslations('headerNavigation');
   const router = useRouter();
   const localActive = useLocale();

   const handleLanguageChange = (locale) => {
      const currentPath = router.asPath || '/';

      router.push(`/${locale}${currentPath}`);
   }

   return (
       <nav className={classNames(styles.navigation, {
          [styles.active]: isOpen,
       })}>
          <div className={styles.wrapper}>
             <ul className={styles.list}>
                <li className={styles.item}>
                   <Link
                       href="/"
                       className={styles.link}
                       onClick={handleMenuAction}
                   >{t('home')}</Link>
                </li>

                <li className={styles.item}>
                   <Link
                       href="/"
                       className={styles.link}
                       onClick={handleMenuAction}
                   >{t('games')}</Link>
                </li>

                <li className={styles.item}>
                   <Link
                       href="/"
                       className={styles.link}
                       onClick={handleMenuAction}
                   >{t('faq')}</Link>
                </li>
             </ul>

             <Languages handleLanguageChange={handleLanguageChange} localActive={localActive}/>
             <LaptopLanguages handleLanguageChange={handleLanguageChange} localActive={localActive}/>
          </div>
       </nav>
   )
}