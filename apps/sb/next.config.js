const withBundleAnalyzer = require('@next/bundle-analyzer')

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['*.chvndler.ch'],
    },
    experimental: {},
    transpilePackages: ['atlr.kit'],
}

// @ts-ignore
module.exports = ( /** @type {any} */ _phase, { defaultConfig: _ }) => {
    const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]
    return plugins.reduce((acc, plugin) => plugin(acc), {...config })
}