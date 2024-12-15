import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import '../globals.scss';

export const metadata = {
    title: 'Spicy Play | Інтенсивні та захоплюючі ігри',
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
        <body>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
