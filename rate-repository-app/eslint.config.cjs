const reactPlugin = require('eslint-plugin-react');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,   // para React Web
        ...globals.node,      // para React Native
        console: 'readonly'
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/prop-types': 'off',
      'semi': ['error', 'always'],
      'no-unused-vars': 'off'
    }
  }
];