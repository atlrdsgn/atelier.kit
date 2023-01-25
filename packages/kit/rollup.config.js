import { readFileSync } from 'node:fs'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const packageJson = JSON.parse(readFileSync(new URL('./package.json',
    import.meta.url)))

export default [{
    /**
     *
     * input always src/index.ts
     */
    input: ['./src/index.ts'],
    /**
     *
     * define external dependencies
     * needed for the package
     */
    external: [
        'react',
        'react-dom',
        'react/jsx-runtime',

        '@stitches/react',

        'copy-to-clipboard',

        /**
         *
         * @radix-ui..
         */
        '@radix-ui/react-icons',
        '@radix-ui/react-scroll-area',
        '@radix-ui/react-slider',
        '@radix-ui/react-menubar',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-popover',
        '@radix-ui/react-label',
        '@radix-ui/react-dialog',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-tabs',
        '@radix-ui/react-accordion',
        '@radix-ui/react-toast',
        '@radix-ui/react-separator',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-collapsible',
        '@radix-ui/react-switch',
        '@radix-ui/react-toggle-group',
    ],
    output: {
        file: packageJson.exports,
        format: 'esm',
    },
    plugins: [
        peerDepsExternal(),
        typescript({
            useTsconfigDeclarationDir: true,
            exclude: ['node_modules/**', '**/*.stories.tsx', '**/*.stories.ts', '**/*.test.tsx'],
        }),
        terser(),
    ],
}, ]