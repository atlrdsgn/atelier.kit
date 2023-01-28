module.exports = {
    extends: [
        'next',
        'turbo',
        'prettier',

        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['node_modules/', 'build/*', './build/*', './public/*', './node_modules/*'],

    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'react/no-unknown-property': 'off',
        'react/react-in-jsx-scope': 0,

        '@next/next/no-html-link-for-pages': 'off',
        'react/jsx-key': 'off',

        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                message: 'Unexpected property on console object was called',
            },
        ],

        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useIsomorphicLayoutEffect)',
            },
        ],
        'react/no-unescaped-entities': 0,
        curly: ['error', 'multi-line'],
        'react/jsx-no-target-blank': [
            2,
            {
                allowReferrer: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                argsIgnorePattern: '^_',
            },
        ],
        'no-console': [
            1,
            {
                allow: ['warn', 'error'],
            },
        ],
        'prettier/prettier': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    babelOptions: {
        presets: [require.resolve('next/babel')],
    },
}