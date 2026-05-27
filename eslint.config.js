import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
  files: ['src/**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: './tsconfig.json',
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react/prop-types': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}; 