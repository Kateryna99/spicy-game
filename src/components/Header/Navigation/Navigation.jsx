'use client'

import classNames from "classnames";
import { useTranslations, useLocale } from 'next-intl';

import { Link, useRouter, usePathname } from '@/i18n/routing.js';

import {Languages} from "@UI/Languages/Languages";
import {LaptopLanguages} from "@UI/Languages/LaptopLanguages/LaptopLanguages";

import styles from './Navigation.module.scss';

export const Navigation = ({isOpen, handleMenuAction}) => {
   const t = useTranslations('headerNavigation');
   const router = useRouter();
   const pathname = usePathname();
   const localActive = useLocale();

   const handleLanguageChange = (locale) => {
      router.replace(pathname, { locale });
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