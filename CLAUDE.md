# PatternFly React Seed - AI Development Guide

## Project Overview

This is a PatternFly v6 React seed application. It provides a basic build, layout, and scaffolding for new PatternFly applications using webpack, TypeScript, and React Router.

## Documentation

Always consult the `ai-documentation/` directory before generating or editing any PatternFly code. Start with `ai-documentation/README.md` for navigation to all guidelines, component rules, and best practices.

Key documentation files:
- `ai-documentation/guidelines/README.md` - Core development principles
- `ai-documentation/guidelines/component-architecture.md` - Component structure
- `ai-documentation/guidelines/styling-standards.md` - CSS and styling requirements
- `ai-documentation/guidelines/ai-prompt-guidance.md` - Writing effective AI prompts
- `ai-documentation/components/layout/README.md` - Page structure requirements
- `ai-documentation/components/data-display/README.md` - Data display patterns
- `ai-documentation/troubleshooting/common-issues.md` - Problem resolution

## PatternFly MCP

This project is configured to use the PatternFly MCP server for fetching up-to-date component documentation and schemas. Use these tools to get accurate, version-specific guidance:

- `searchPatternFlyDocs` - Search for PatternFly components, design tokens, and guidelines
- `usePatternFlyDocs` - Fetch full documentation and JSON schemas for specific components

Always query the PatternFly MCP before using a component you're unfamiliar with to get the latest API, props, and usage examples.

## Core Rules

- **PatternFly v6 only** - Use `pf-v6-` prefixed CSS classes, never `pf-v5-`
- **Component-first** - Use PatternFly components before custom solutions
- **Accessibility** - Include proper ARIA labels and keyboard navigation
- **Design tokens** - Use PatternFly CSS custom properties, not hardcoded values
- **No CSS modules** - `className={styles.x}` does not work in this project
- **Verify components exist** - Always confirm a component exists in `@patternfly/react-core` before using it

## Commands

- `npm run start:dev` - Start development server (port 9000)
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint
- `npm run ci-checks` - Run all CI checks (type-check + lint + test coverage)

## Project Structure

```
src/
  app/
    AppLayout/    - Main page layout with masthead and sidebar navigation
    Dashboard/    - Dashboard page
    Support/      - Support page (empty state example)
    Settings/     - Settings pages (General, Profile)
    NotFound/     - 404 page
    routes.tsx    - Route definitions and navigation config
    app.css       - Custom CSS token overrides
```
