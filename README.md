# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, interactive components, and comprehensive SEO optimization.

## 🚀 Tech Stack

- **Frontend Framework**: React.js
- **Styling**: SCSS/Sass with BEM methodology
- **Animation Libraries**: 
  - React Intersection Observer for scroll-based animations
  - Custom typing effect implementation
- **Icons**: Font Awesome
- **SEO**: React Helmet Async for dynamic metadata management
- **Deployment**: Vercel/Netlify (assumed based on project structure)

## ✨ Key Features

### Responsive Design
- Mobile-first approach with fluid layouts
- Optimized viewing experience across devices (mobile, tablet, desktop)

### Interactive Components
- Dynamic skill bars with progress animations
- Interactive project cards with hover effects
- Custom typing animation for role descriptions
- Animated timeline with scroll-based reveal effects


### Accessibility
- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Screen reader friendly content

### SEO Implementation
- Component-based SEO with React Helmet Async
- Custom meta tags for each section
- Structured data (JSON-LD) for rich search results
- Open Graph tags for social media sharing
- Canonical URL implementation

### Developer Experience
- Modular component architecture
- Reusable UI components
- Clean code organization
- ESLint integration for code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── ContactMeCard/
│   ├── Hero/
│   │   ├── Intro/
│   │   └── Navbar/
│   ├── PreLoader/
│   ├── Projects/
│   ├── SEO/
│   ├── Skills/
│   └── TimeLine/
├── App.js
├── index.js
└── ...
```

## 🔧 Implementation Details

### SEO Strategy
- Implemented a reusable SEO component with React Helmet Async
- Section-specific metadata and structured data
- Optimized for personal branding and discoverability
- robots.txt and sitemap.xml configuration

### Timeline Component
- Custom-built interactive timeline with alternating layout
- Scroll-triggered animations using Intersection Observer API
- Responsive design that adapts to different screen sizes

### Skills Visualization
- Dynamic skill bars with progress animations
- Categorized skill display with custom color coding
- Interactive hover effects for enhanced user experience

### Project Showcase
- Grid layout for project cards with consistent styling
- Interactive hover states revealing project details
- Integration with external links to live demos and repositories

### Contact Section
- Interactive business card with flip animation
- Integrated social media links
- Responsive design for various screen sizes

## 🛠️ Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/HimanshuBaurai/PortFolio.git
   ```

2. Install dependencies
   ```
   cd portfolio-website
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Build for production
   ```
   npm run build
   ```

## 🔍 Future Enhancements

- Dark/Light theme toggle with persistent user preference
- Blog section integration
- Internationalization support
- Performance monitoring and analytics integration
- Progressive Web App (PWA) capabilities

## 📄 License

MIT License