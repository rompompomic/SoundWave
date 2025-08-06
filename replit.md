# МузыкаНаЗаказ - Custom Song Creation Service

## Overview

This is a full-stack web application for a Russian custom music creation service called "МузыкаНаЗаказ" (Music on Order). The platform allows customers to order personalized songs for various occasions like birthdays, holidays, commercials, and special events. The application features a modern dark-themed design with a React frontend and Express backend, integrated with Sanity CMS for content management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Design System**: Custom dark theme with accent orange color scheme optimized for music industry

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for hot module replacement
- **Storage Interface**: Abstracted storage layer with in-memory implementation (designed to be replaceable with database)
- **API Structure**: RESTful endpoints under `/api` prefix
- **Session Management**: Express sessions with potential PostgreSQL session storage

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Current Schema**: Basic user management (users table with id, username, password)
- **Migration System**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless PostgreSQL

### Content Management
- **CMS**: Sanity Studio for content management
- **Content Types**:
  - Site settings (mission, contact info, statistics)
  - Pricing plans with features and popularity flags
  - Portfolio items with categories (birthday, march8, commercial, gender)
  - Testimonials (video and text types with ratings)
  - Services with pricing and feature lists
  - Promotions with expiration dates
- **Media**: Sanity handles image uploads and media management

### Key Features
- **Multi-language Support**: Russian language interface
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Audio Playback**: Custom audio player component for portfolio samples
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system for form submissions
- **SEO Optimization**: Meta tags and social media optimization

### Component Architecture
- **Layout Components**: Header with smooth scrolling navigation, Footer with contact links
- **Section Components**: Modular sections for hero, about, pricing, portfolio, services, promotions, reviews, and contact
- **UI Components**: Comprehensive component library including audio players, floating animations, and form elements
- **Custom Hooks**: Mobile detection, Sanity data fetching, toast management

## External Dependencies

### Content Management
- **Sanity CMS**: Headless CMS for content management with studio interface
- **Sanity Client**: JavaScript client for fetching content from Sanity API
- **Vision Tool**: Sanity plugin for GROQ query testing

### Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations
- **Connect PG Simple**: PostgreSQL session store for Express

### UI & Styling
- **Radix UI**: Unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon sets including social media icons
- **Class Variance Authority**: Component variant management

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Vite**: Fast development server and build tool
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Third-party Integrations
- **Google Fonts**: Inter font family for typography
- **Unsplash**: Stock photography for placeholder images
- **Social Media**: Integration points for Telegram, Instagram, WhatsApp
- **Replit**: Development environment integration with error overlay and cartographer