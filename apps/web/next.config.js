/** @format */

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

module.exports = (_phase, { defaultConfig: _ }) => {
    const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]
    return plugins.reduce((acc, plugin) => plugin(acc), {...config })
}