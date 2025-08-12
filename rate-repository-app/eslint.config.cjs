const js = require('@eslint/js');
const reactPlugin = require('eslint-plugin-react');
const jestPlugin = require('eslint-plugin-jest');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');

module.exports = [
  // Base JS rules
  js.configs.recommended,
  // Reglas para el código de la app
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // no necesitas babel.config.js para parsear JSX
        babelOptions: {
          presets: ['@babel/preset-react'], // React JSX
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
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
  },
  //  Reglas para archivos de test
  {
    files: ['**/*.test.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    plugins: {
      jest: jestPlugin
    },
    languageOptions: {
      globals: {
        ...globals.jest, // describe, test, expect, beforeEach...
      },
    },
    ...jestPlugin.configs.recommended
  },
  // Ignora cosas que no quieres lint
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'eslint.config.cjs',
    ],
  },
];