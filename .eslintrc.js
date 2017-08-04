module.exports = {
    extends: '@getgo/base',
    rules: {
        'comma-dangle': 'off',
        'quote-props': 'off',
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'max-len': ['error', {code: 100, ignoreStrings:true}],
        'indent': ['error', 2],
        'import/extensions': ['off', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'no-new': 'off'
    },

    settings: {
        'import/resolver': 'webpack'
    },

    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        es6: true
    },

    // required to lint *.vue files
    plugins: [
        'html'
    ],

    globals: {
        VERSION: false,
        BUILD_DATE: false,
        DEVELOPMENT: false,
        PRODUCTION: false,
        TEST: false
    }
}
