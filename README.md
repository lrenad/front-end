# Recipe Explorer — Day 2
 
Next.js project introducing the Recipe Explorer app with a home page and recipe search.
 
## What's Inside
 
- **Home page** (`src/app/page.tsx`) — landing page with a title and link to browse recipes
- **Recipes page** (`src/app/recipes/page.tsx`) — server-rendered recipe listing
- **RecipeSearch component** (`src/components/RecipeSearch.tsx`) — client-side search with live results from the [Forkify API](https://forkify-api.jonas.io)
## Tech Stack
 
| Tool | Purpose |
|------|---------|
| Next.js 15 | App Router, SSR |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
 
## Getting Started
 
```bash
npm install
npm run dev
```
 
Open [http://localhost:3000](http://localhost:3000) in your browser.
 
## Key Concepts Practiced
 
- Next.js App Router structure
- Server vs client components (`"use client"`)
- `useState` for search state management
- `fetch` API calls to an external recipe API
- Passing props with TypeScript types
- Tailwind CSS utility classes
