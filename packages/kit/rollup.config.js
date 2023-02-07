import {readFileSync} from 'node:fs'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export default [
  {
    input: ['./src/index.ts'],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@stitches/react',
      'copy-to-clipboard',

      'react-player/vimeo',

      '@radix-ui/react-tooltip',
      '@radix-ui/react-popover',
      '@radix-ui/react-avatar',
      '@radix-ui/react-icons',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-slider',
      '@radix-ui/react-select',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
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
      copy({
        targets: [{src: './src/theme/font-kit/src/*', dest: 'build/font-kit'}],
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: [
          'node_modules/**',
          '**/*.stories.tsx',
          '**/*.stories.ts',
          '**/*.test.tsx',
          '**/anatomy/*.example.md',
        ],
      }),
      terser(),
    ],
  },
]
