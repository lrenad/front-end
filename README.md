# Recipe Explorer — Course Project

Full-featured recipe web app built with Next.js, TypeScript, and Tailwind CSS. This is the main deliverable for the front-end course.

## Features

- **Recipe search** — search 12,000+ recipes from the Forkify API
- **Favorites** — save and manage favorite recipes (persisted via localStorage)
- **Dark / Light mode** — theme toggle with persistent preference
- **Language toggle** — switch between English and Arabic (i18n)
- **Recipe submission form** — submit a new recipe with validation (Zod schemas)
- **Contact form** — validated contact page
- **Login page** — authentication entry point
- **Cooking timer** — interactive timer component on recipe detail pages
- **Loading states** — skeleton loaders for recipes list and detail
- **Not found page** — custom 404 for missing recipes

## Project Structure

```
src/
├── app/
│   ├── (app)/              # Authenticated app routes
│   │   ├── favorites/      # Saved recipes page
│   │   ├── recipes/        # Recipe list + detail pages
│   │   │   ├── [id]/       # Dynamic recipe detail
│   │   │   ├── new/        # Submit a recipe
│   │   │   └── submitted/  # Submission confirmation
│   │   └── layout.tsx
│   ├── (marketing)/        # Public-facing pages
│   │   ├── contact/        # Contact form
│   │   └── page.tsx        # Landing page
│   ├── api/recipes/        # API route (proxy to Forkify)
│   ├── auth/login/         # Login page
│   └── hooks/              # Custom React hooks
├── components/             # Reusable UI components
├── context/                # React context providers (theme, language, favorites)
└── lib/                    # Utility functions and Zod schemas
```

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | App Router, SSR, API routes |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Zod | Form validation schemas |
| Forkify API | Recipe data source |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Custom Hooks

| Hook | Purpose |
|------|---------|
| `useFetch` | Generic data fetching with loading/error states |
| `useFavorites` | Read/write favorites from context |
| `useLocalStorage` | Sync state to localStorage |
| `useTheme` | Access and toggle theme from context |
| `useLanguage` | Access and toggle language from context |

## Key Concepts Practiced

- Next.js App Router with route groups `(app)` and `(marketing)`
- React Context API for global state (theme, language, favorites)
- Custom hooks for reusable logic
- Zod schema validation for forms
- Dynamic routes and loading/not-found pages
- Next.js API routes as a proxy
- Dark mode with Tailwind CSS
- Internationalization (i18n) with a language context
