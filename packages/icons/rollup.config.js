import { readFileSync } from 'node:fs'

import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const packageJson = JSON.parse(readFileSync(new URL('./package.json',
    import.meta.url)))

export default [{
    input: ['./index.ts'],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: {
        file: packageJson.exports,
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        peerDepsExternal(),
        typescript({
            useTsconfigDeclarationDir: true,
            exclude: 'node_modules/**',
        }),
        terser(),
    ],
}, ]