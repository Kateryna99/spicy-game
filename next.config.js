const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        fontLoaders: [
            { loader: '@next/font/google', options: { subsets: ['latin', 'cyrillic'] } },
        ],
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
            '@components': path.resolve(__dirname, 'src/components'),
            '@main': path.resolve(__dirname, 'src/components/Main'),
            '@UI': path.resolve(__dirname, 'src/components/UI'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        };

        return config;
    },
};

module.exports = withNextIntl(nextConfig);
