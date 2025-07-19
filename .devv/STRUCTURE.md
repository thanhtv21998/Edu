# This file is only for editing file nodes, do not break the structure

/src
├── assets/          # Static resources directory, storing static files like images and fonts
│
├── components/      # Components directory
│   ├── ui/         # Pre-installed shadcn/ui components, avoid modifying or rewriting unless necessary
│   ├── layout/     # Layout components like Header and Footer
│   │   ├── Header.tsx # Header component with navigation and mobile menu
│   │   └── Footer.tsx # Footer component with site links and contact info
│   └── home/       # Home page specific components
│       ├── HeroSection.tsx       # Hero banner section for home page
│       ├── FeaturedCourses.tsx   # Featured courses display section
│       ├── AboutSection.tsx      # About EduVN section with stats
│       ├── NewsSection.tsx       # Latest news and events section
│       ├── TestimonialSection.tsx # Student testimonials section
│       └── CtaSection.tsx        # Call to action section with contact form
│
├── hooks/          # Custom Hooks directory
│   ├── use-mobile.ts # Pre-installed mobile detection Hook from shadcn (import { useIsMobile } from '@/hooks/use-mobile')
│   └── use-toast.ts  # Toast notification system hook for displaying toast messages (import { useToast } from '@/hooks/use-toast')
│
├── lib/            # Utility library directory
│   └── utils.ts    # Utility functions, including the cn function for merging Tailwind class names
│
├── pages/          # Page components directory, based on React Router structure
│   ├── HomePage.tsx # Home page component, serving as the main entry point of the application
│   └── NotFoundPage.tsx # 404 error page component, displays when users access non-existent routes
│
├── App.tsx         # Root component, with React Router routing system configured
│                   # Add new route configurations in this file
│                   # Includes catch-all route (*) for 404 page handling
│
├── main.tsx        # Entry file, rendering the root component and mounting to the DOM
│
├── index.css       # Global styles file, containing Tailwind configuration and custom styles
│                   # Contains theme customization for the education website with blue-purple color scheme
│
└── tailwind.config.js  # Tailwind CSS v3 configuration file
                      # Contains theme customization, plugins, and content paths
                      # Includes shadcn/ui theme configuration 

