# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mantine + Vite + React application template with TypeScript. The project is a Progressive Web App (PWA) focused on asset growth tracking. It uses React Router for navigation and Mantine UI components with a customizable theme system.

## Architecture

- **Entry Point**: `src/main.tsx` - Renders the React application
- **App Structure**: `src/App.tsx` - Main app component with MantineProvider wrapper
- **Routing**: `src/Router.tsx` - Uses React Router v7 with createBrowserRouter
- **Theme**: `src/theme.ts` - Mantine theme configuration (currently minimal)
- **Pages**: Located in `src/pages/` directory
- **Components**: Located in `src/components/` directory with co-located CSS modules and stories

## Development Commands

**Development & Build:**
- `yarn dev` - Start development server
- `yarn build` - Build for production (runs TypeScript check first)
- `yarn preview` - Preview production build locally

**Code Quality:**
- `yarn typecheck` - Check TypeScript types
- `yarn lint` - Run both ESLint and Stylelint
- `yarn eslint` - Run ESLint only
- `yarn stylelint` - Run Stylelint for CSS files
- `yarn prettier` - Check code formatting
- `yarn prettier:write` - Format code

**Testing:**
- `yarn vitest` - Run tests once
- `yarn vitest:watch` - Run tests in watch mode
- `yarn test` - Run complete test suite (typecheck + prettier + lint + vitest + build)

**Storybook:**
- `yarn storybook` - Start Storybook development server on port 6006
- `yarn storybook:build` - Build Storybook for production

## Testing Setup

- **Framework**: Vitest with React Testing Library
- **Environment**: jsdom
- **Setup File**: `vitest.setup.mjs` includes mocks for browser APIs (matchMedia, ResizeObserver)
- **Configuration**: Test config is in `vite.config.mjs`
- **Custom Render**: Use `test-utils/render.tsx` for testing components (wraps with MantineProvider)

## Component Structure

Components follow a pattern with co-located files:
- `ComponentName.tsx` - Main component
- `ComponentName.module.css` - CSS modules for styling
- `ComponentName.story.tsx` - Storybook stories
- `ComponentName.test.tsx` - Unit tests

## Configuration Details

- **TypeScript**: Path aliases configured (`@/*` maps to `./src/*`, `@test-utils` maps to `./test-utils`)
- **ESLint**: Uses eslint-config-mantine, allows console in story files, ignores JS/CJS/MJS files
- **Storybook**: Configured with theme addon, telemetry disabled, stories in `src/**/*.story.*`

## Documentation and Commit Guidelines

- **Documentation Language**: Write all documentation, comments, and README files in Korean (한글)
- **Commit Messages**: Write commit messages in Korean
- **Code Comments**: Use Korean for code comments and inline documentation
- **Exception**: Technical configuration files and API documentation may use English when appropriate

## Package Management

Uses Yarn 4.9.4 as package manager (see `packageManager` field in package.json).