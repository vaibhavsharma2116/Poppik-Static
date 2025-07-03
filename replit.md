# Poppik Beauty Website

## Overview

This is a modern, responsive web application for Poppik, a beauty and cosmetics brand. The application is built with a React frontend and Express.js backend, featuring a professional landing page with company information, mission statement, and contact details. The project uses a monorepo structure with TypeScript throughout and is designed for beauty product marketing and brand presentation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom Poppik brand colors and gradients
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: Hot module replacement via Vite integration

### Key Design Decisions
- **Component-based Architecture**: Modular React components for scalability
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern CSS**: Utility-first approach with Tailwind CSS
- **Responsive Design**: Mobile-first design principles
- **Brand-focused**: Custom color scheme and typography aligned with Poppik branding

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **BannerCarousel**: Rotating hero banners with company announcements
- **AboutSection**: Founder profiles and company background
- **MissionSection**: Brand mission and values presentation
- **ContactSection**: Contact information and social media links
- **Footer**: Brand tagline and copyright information

### Backend Infrastructure
- **Route Registration**: Centralized API route management
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Error Handling**: Comprehensive error middleware
- **Development Tools**: Vite integration for SSR and HMR

### UI System
- **Design System**: Consistent component library using Radix UI
- **Theme Configuration**: CSS custom properties for easy theme management
- **Animation**: CSS-based animations for enhanced user experience
- **Accessibility**: ARIA-compliant components from Radix UI

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for data fetching
2. API requests go through centralized `apiRequest` utility
3. Error handling and loading states managed by Query Client
4. Component state managed locally with React hooks

### Server-Side Data Flow
1. Express routes handle API endpoints (prefixed with `/api`)
2. Storage interface abstracts database operations
3. Drizzle ORM manages database schema and queries
4. Session management through PostgreSQL sessions

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Extensible Design**: Schema structure ready for additional entities

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Backend**: Express.js, Drizzle ORM, Neon Database client
- **Development**: Vite, TypeScript, ESBuild

### Notable Features
- **Font Integration**: Google Fonts (Inter and Playfair Display)
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns for date manipulation
- **Development Tools**: Replit integration for cloud development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized production bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in dedicated `migrations` folder

### Environment Configuration
- **Database**: Environment-based DATABASE_URL configuration
- **Development**: NODE_ENV-based feature toggling
- **Production**: Optimized builds with tree shaking and minification

### Hosting Considerations
- **Static Assets**: Frontend served from `dist/public`
- **API Routes**: Backend serves API endpoints and fallback routing
- **Database**: PostgreSQL-compatible hosting (Neon Database ready)

## Changelog

Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Enhanced design with real banner images, improved animations, professional styling, better navigation with scroll effects, and comprehensive contact information

## Recent Changes

- Integrated actual banner images from user's attached assets
- Enhanced banner carousel with smooth transitions and real image overlays
- Improved About section with larger founder profiles and better visual hierarchy
- Redesigned Mission section with enhanced animations and better content structure
- Upgraded Contact section with comprehensive contact methods and social media
- Enhanced Navigation with scroll effects, backdrop blur, and animated elements
- Improved Footer with brand values display and better visual design
- Added professional animations, shadows, and hover effects throughout
- Optimized mobile responsiveness and touch interactions

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Modern, professional look for cosmetics brand with enhanced visual appeal.