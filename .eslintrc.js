module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'standard',
        'standard-react',
        'prettier',
        'prettier/react',
    ],
    plugins: [],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'padded-blocks': 'off',
        'sort-keys': ['error', 'asc', {
            'caseSensitive': true,
            'natural': false,
        }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
