---
status: pending
title: Vibe Coding Platform
---

## Overview
A dark, techy AI-powered platform where users can build apps using prompts. Features include an AI prompt builder, user profiles, comments/reactions, and dark mode by default.

---

## 1. Project Foundation
- Set up /app/src/styles/global.css with `@import "tailwindcss";` and a dark-first CSS theme (dark backgrounds, neon/green accent colors, monospace type feel).
- Import global.css once in /app/src/main.tsx.
- Set up React Router in /app/src/main.tsx with routes for: Home, Prompt Builder, Profile, and a single Project detail page.

## 2. Shared Types
- Create /app/src/types/index.ts defining types for: User (id, username, avatar, bio), Project (id, title, description, prompt, authorId, createdAt, reactions, comments), Comment (id, projectId, authorId, body, createdAt), and Reaction (emoji, count).

## 3. Mock Data & Utilities
- Create /app/src/lib/mockData.ts with a set of sample users, projects, comments, and reactions to power the UI without a backend.
- Create /app/src/lib/utils.ts with helper functions for formatting dates and truncating text.

## 4. Layout & Navigation
- Create /app/src/components/Layout.tsx as the root shell wrapping all pages — includes a top navigation bar with the platform logo, nav links (Home, Build, Profile), and a persistent dark background.
- Create /app/src/components/Navbar.tsx as the top bar with glowing accent styling, monospace logo text, and icon-style navigation links.

## 5. Home Page
- Create /app/src/pages/Home.tsx showing a hero section ("Build apps with vibes") with a call-to-action button linking to the Prompt Builder.
- Below the hero, display a "Trending Projects" grid using a reusable ProjectCard component.
- Create /app/src/components/ProjectCard.tsx showing project title, description excerpt, author avatar + username, and a reaction count badge — styled with a dark card, neon border glow on hover.

## 6. Prompt Builder Page
- Create /app/src/pages/PromptBuilder.tsx as the core feature page.
- Include a large multi-line prompt input area with a glowing border and placeholder like "Describe the app you want to build…".
- Include a panel of prompt enhancer chips (e.g. "Add authentication", "Make it mobile-first", "Use dark mode") that append suggestions to the prompt text when clicked.
- Include a "Generate" button that simulates a loading state and then displays a mock AI-generated project outline (title, description, suggested tech approach) in a result panel below.
- Create /app/src/hooks/usePromptBuilder.ts to manage prompt state, chip toggling, and the simulated generation flow.

## 7. Project Detail Page
- Create /app/src/pages/ProjectDetail.tsx showing the full project prompt, generated outline, author info, and a reactions bar (emoji buttons with counts).
- Below, show a comments section listing existing comments and a text input to add a new comment (stored in local component state).
- Create /app/src/components/CommentList.tsx and /app/src/components/ReactionBar.tsx as sub-components.

## 8. User Profile Page
- Create /app/src/pages/Profile.tsx showing a mock logged-in user's avatar, username, bio, and a grid of their submitted projects using the ProjectCard component.
- Include a simple editable bio field (local state only, no backend).

## 9. Reusable UI Components
- Create /app/src/components/Button.tsx — a styled button with variants: primary (neon glow), ghost (outline), and danger (red tint).
- Create /app/src/components/Avatar.tsx — circular avatar with a fallback initial when no image is available.
- Create /app/src/components/Badge.tsx — small pill-shaped label for tags or reaction counts.
- Create /app/src/components/Spinner.tsx — animated loading indicator used during prompt generation.

## 10. Dark Mode & Visual Polish
- Ensure global.css defines a dark background base, neon green/cyan accent color variables, and a monospace font stack.
- All pages and components use only Tailwind utility classes referencing these theme values.
- Subtle animated gradient or scanline texture on the hero section for a techy aesthetic.
