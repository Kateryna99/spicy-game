'use client';

import {useTranslations} from "next-intl";
import Image from 'next/image';
import classNames from "classnames";

import {BurgerMenu} from "@UI/BurgerMenu/BurgerMenu";
import {Button} from "@UI/Button/Button";
import {Navigation} from "@components/Header/Navigation/Navigation";

import {useMenuAction} from "@/hooks/useMenuAction";
import {useHeaderScroll} from "@/hooks/useHeaderScroll";

import logo from '../../../public/icons/logo.svg';

import styles from './Header.module.scss';

export const Header = () => {
    const {isOpen, setIsOpen, handleMenuAction} = useMenuAction();
    const {scrolled} = useHeaderScroll();

    const t = useTranslations();

    return (
        <header className={classNames(styles.header, {
            [styles.active]: scrolled
        })}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/">
                        <Image
                            src={logo}
                            alt={t('alt.logo')}
                            className={styles.logoImg}
                        />
                    </a>

                    <Navigation isOpen={isOpen} handleMenuAction={handleMenuAction} />

                    <BurgerMenu handleBurgerClick={setIsOpen} isOpen={isOpen} />

                    <Button text={t('buttons.play')}/>
                </div>
            </div>
        </header>
    )
}