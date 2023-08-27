module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'prettier',
        'plugin:i18next/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'i18next'],
    rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-children-prop': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/naming-convention': 0,
        'linebreak-style': ['error', 'unix'],
        indent: [2, 4],
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid'] },
        ],
    },
}
