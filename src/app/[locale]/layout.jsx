import { NextIntlClientProvider } from 'next-intl';
import Head from "next/head";
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import {Header} from "@components/Header";
import {Footer} from "@components/Footer/Footer";

import {metadata} from "@/constants/metadata";

import '../globals.scss';
import styles from "@/app/[locale]/page.module.scss";

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }) {
    const {locale}= await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className={poppins.variable}>
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={metadata.title || 'Default Title'} />
            <meta property="og:description" content={metadata.description || 'Default description'} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={locale} />
            <meta property="og:site_name" content="Your Site Name" />
            <meta property="og:image" content="https://your-site.com/images/og-image.jpg" />
            <meta property="og:url" content="https://your-site.com/page-url" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metadata.title || 'Default Title'} />
            <meta name="twitter:description" content={metadata.description || 'Default description'} />
            <meta name="twitter:image" content="https://your-site.com/images/og-image.jpg" />
        </Head>
        <body>
        <NextIntlClientProvider messages={messages}>
            <div className={styles.wrapper}>
                <Header/>

                <main>{children}</main>

                <Footer/>
            </div>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
