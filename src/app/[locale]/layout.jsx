import { NextIntlClientProvider } from 'next-intl';
import Head from "next/head";
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import '../globals.scss';

export const metadata = {
    title: 'Spicy Play',
    description:
        'Відкрийте для себе світ захоплюючих ігор з високим рівнем ризику та азарту. Spicy Play пропонує найкращі інтенсивні ігри для тих, хто шукає справжні виклики.',
    openGraph: {
        title: 'Spicy Play | Захоплюючі ігри на будь-який смак',
        description:
            'Зануртесь у світ Spicy Play, де вас чекають захоплюючі та ризиковані ігри з високим рівнем адреналіну та азарту. Вибирайте гру та випробуйте свою удачу!',
        type: 'website',
        locale: 'en-US',
        siteName: 'Spicy Play',
    },
};

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
        <html lang={locale}>
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
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
