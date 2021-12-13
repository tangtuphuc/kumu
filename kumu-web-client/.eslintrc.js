module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        '@vue/typescript',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'import/no-unresolved': ['off'],
        camel_case: ['off'],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                mocha: true,
            },
        },
    ],
};
