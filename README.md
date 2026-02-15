# Personal Portfolio (Next.js)

This repository contains the source code for my personal portfolio website.

The project showcases my work, skills, and background with a clean, responsive UI built on modern React/Next.js tooling.

## Features

- Responsive single-page portfolio layout
- Dark/light theme toggle (`next-themes`)
- Animated UI with Framer Motion
- Projects section with optional live GitHub star fetching
- GitHub contribution heatmap
- Social/contact links and resume button
- Tech stack showcase with tooltips

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI Tooltip
- react-activity-calendar

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start the development server (Turbopack)
- `npm run build` - Create a production build
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint

## Customization

- Update project cards in `constants/index.ts`
- Update GitHub calendar config in `config/github.tsx`
- Update social links/resume in `components/Contactme.tsx`
- Replace images and logos in `public/`

## Deployment

The app is ready to deploy on Vercel or any platform that supports Next.js.

## Author

Aayush Rawat
