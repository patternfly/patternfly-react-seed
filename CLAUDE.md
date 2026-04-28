# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PatternFly React Seed is a scaffolding utility for building web applications with PatternFly, React, TypeScript, and Webpack. It provides a complete starter template with routing, layout chrome (header/sidebar), build pipeline, and test suite.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:9000)
npm run start:dev

# Build for production (outputs to dist/)
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run format

# Run all CI checks (type-check + lint + test:coverage)
npm run ci-checks

# Testing
npm run test              # Run tests once
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report

# Production server (requires build first)
npm run start
```

## Architecture

### Build System

- **Webpack** for bundling (webpack.common.js, webpack.dev.js, webpack.prod.js)
- **TypeScript** with path aliases configured in tsconfig.json
- **dotenv-webpack** for environment variables (use `.env` file or export vars)

### Testing

- **Vitest** (not Jest) with @testing-library/react
- Test files use `.test.tsx` extension
- Setup file: `src/test/setup.ts` (mocks matchMedia, ResizeObserver, IntersectionObserver)
- Snapshot tests are used alongside behavioral tests

### Routing

Centralized routing configuration in [src/app/routes.tsx](src/app/routes.tsx):

- `IAppRoute` - single route with optional `label` (routes without labels are excluded from sidebar nav)
- `IAppRouteGroup` - grouped routes for nested navigation items
- Routes are flattened and rendered in `AppRoutes` component using react-router-dom v7

### Layout Structure

[src/app/AppLayout/AppLayout.tsx](src/app/AppLayout/AppLayout.tsx) provides the Page shell:
- Masthead with logo and toggle button
- PageSidebar with navigation built from routes config
- Automatically generates nav items from routes array

### Path Aliases

TypeScript and Webpack are configured with these aliases:
- `@app/*` → `src/app/*`
- `@assets/*` → `node_modules/@patternfly/react-core/dist/styles/assets/*`

Example usage:
```typescript
import { Component } from '@app/Component/Component';
import imgSrc from '@assets/images/example.png';
```

### Asset Handling

**SVG files** have special handling based on location:
- `bgimages/` directory → inlined as data URLs for CSS backgrounds
- Elsewhere → raw-loader for inline HTML usage
- Fonts and pficon directories → asset/resource loader

**Raster images** from PatternFly assets use `@assets` prefix:
```typescript
import imgSrc from '@assets/images/g_sizing.png';
```

**Local app assets** use `@app` prefix:
```typescript
import loader from '@app/assets/images/loader.gif';
```

### Component Organization

Pages are organized under `src/app/` with one directory per feature:
- `Dashboard/` - main dashboard page
- `Support/` - support page
- `Settings/General/` - general settings page
- `Settings/Profile/` - profile settings page
- `AppLayout/` - page shell component
- `NotFound/` - 404 page

Each directory typically contains:
- Component file (e.g., `Dashboard.tsx`)
- Optional test file (e.g., `Dashboard.test.tsx`)

## Adding New Routes

1. Create component directory under `src/app/`
2. Add route definition to routes array in [src/app/routes.tsx](src/app/routes.tsx)
3. Import component at top of routes.tsx
4. Route appears in sidebar nav automatically if `label` is provided

## Adding Custom CSS

When importing CSS from a third-party package for the first time, register the stylesheet path in [stylePaths.js](stylePaths.js) to avoid parse errors. This is required for webpack performance optimization.

## Environment Variables

Use dotenv-webpack for environment configuration:
- Create `.env` file in project root, or
- Export at system level: `export MY_VAR=value && npm run start:dev`
- Access in code: `process.env.MY_VAR`
