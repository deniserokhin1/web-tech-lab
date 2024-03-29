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
        'plugin:storybook/recommended',
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
    plugins: ['react', 'i18next', 'react-hooks', 'yo-common', 'unused-imports', 'import'],
    rules: {
        'no-console': 1,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-children-prop': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/naming-convention': 0,
        'linebreak-style': ['error', 'unix'],
        'react/display-name': 0,
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
        'no-duplicate-case': 0,
        indent: 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-dynamic-delete': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-invalid-void-type': 0,
        '@typescript-eslint/prefer-includes': 0,
        'n/no-callback-literal': 0,
        '@typescript-eslint/ban-types': 0,
        'yo-common/path-checker': ['error', { alias: '@' }],
        'yo-common/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
            },
        ],
        // 'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        '@typescript-eslint/consistent-type-imports': 0,
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
}
