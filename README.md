# Sparkle Auto Wash - Luxury Car Wash Website

A modern, responsive single-page application (SPA) for a premium car wash business with a unique watery, spa-like aesthetic.

🌐 **Live Site**: [https://sindyml.github.io/Sparkle-Auto-Wash/](https://sindyml.github.io/Sparkle-Auto-Wash/)

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Water ripple effects, droplet animations, parallax scrolling
- **Interactive Components**: 
  - Flip cards for services
  - Lightbox gallery with captions
  - Testimonials carousel
  - Sticky navigation with hamburger menu
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized**: Meta tags, semantic structure, proper headings
- **Modern UI**: Elegant design with deep blues and aqua color palette

## Project Structure

```
sparkle-auto-wash/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Services.css
│   │   ├── Gallery.css
│   │   ├── About.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /workspace
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

To create an optimized production build:
```bash
npm run build
```

The build files will be created in the `build/` directory.

## Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment
To manually deploy to GitHub Pages:

1. Install dependencies (if not already installed):
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch, making it live at [https://sindyml.github.io/Sparkle-Auto-Wash/](https://sindyml.github.io/Sparkle-Auto-Wash/)

## Features Breakdown

### Navigation
- Sticky navbar that changes style on scroll
- Mobile hamburger menu with smooth animation
- Smooth scrolling to sections

### Hero Section
- Full-screen parallax background
- Animated water droplets
- Call-to-action button
- Scroll indicator

### Services Section
- Interactive flip cards
- 5 service packages with pricing
- Hover effects reveal details
- Unique eco-friendly features

### Gallery Section
- Masonry grid layout
- Lightbox with zoom
- Fade-in animations on scroll
- Caption overlays

### About Us Section
- Company story
- Feature cards with icons
- Auto-rotating testimonials carousel
- Navigation controls

### Contact Section
- Contact information with icons
- Embedded Google Maps
- Social media links
- No form - encourages calls/emails

### Footer
- Wave animation
- Navigation links
- Contact details
- Copyright information

## Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type safety
- **CSS3**: Styling with animations
- **Google Fonts**: Poppins and Roboto

## Color Palette

- Deep Blue: `#001F3F` (accents, primary text)
- Light Aqua: `#7FDBFF` (highlights, buttons)
- White: `#FFFFFF` (backgrounds)
- Silver: `#C0C0C0` (borders, secondary text)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Alt text for images
- Focus states for interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Sparkle Auto Wash. All rights reserved.

## Support

For questions or support, contact:
- Phone: +27-123-456-789
- Email: info@sparkleautowash.co.za