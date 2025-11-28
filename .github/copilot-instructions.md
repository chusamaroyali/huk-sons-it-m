# GitHub Copilot Instructions

## Project Overview
This is a React application built with Vite, TypeScript, Tailwind CSS, and Supabase. It uses a custom routing implementation and Shadcn UI components.

## Architecture & Routing (CRITICAL)
**Do NOT use `react-router-dom`.** This project uses a custom event-based routing system.

- **Navigation State**: Managed in `src/App.tsx` via `currentPage` state.
- **How to Navigate**:
  - **Prop Drilling**: Use the `onNavigate` prop passed down to components.
  - **Event Dispatch**: Dispatch a custom event:
    ```typescript
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'page-name' }));
    ```
- **Adding Pages**:
  1. Create the page component in `src/pages/`.
  2. Add the case to the `renderPage` switch statement in `src/App.tsx`.
  3. Add the route string (e.g., `'new-page'`) to navigation menus if needed.

## Styling & UI
- **Framework**: Tailwind CSS.
- **Component Library**: Shadcn UI (Radix Primitives) located in `src/components/ui/`.
- **Icons**: Use `lucide-react`.
- **Theme**: Dark mode is supported via `src/utils/ThemeContext.tsx`. Use `dark:` variants for all color styles.
- **Colors**: Follow the existing color palette (e.g., Primary: `#19B394`, Text: `#0F6B4D`).

## Project Structure
- `src/App.tsx`: Main entry point, handles routing logic.
- `src/pages/`: Full-page components.
- `src/components/`: Business-specific components (Header, Footer, etc.).
- `src/components/ui/`: Reusable UI primitives (Buttons, Inputs, etc.).
- `src/utils/`: Helper functions and contexts.

## Development Workflow
- **Run Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Supabase**: Client configuration is in `src/utils/supabase/`.

## Common Patterns
- **Links**: Do not use `<a>` tags for internal navigation. Use `button` with `onClick={() => onNavigate('page-name')}`.
- **Images**: Use standard `<img>` tags or the `ImageWithFallback` component if available.
