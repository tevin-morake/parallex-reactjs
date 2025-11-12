# Parallax Landing Page - Genesis

A React-based single-page application featuring a parallax scrolling effect with inspirational content and multiple background images. Built with Create React App and designed for modern web browsers.

## Project Overview

**Project Name:** `paralex` (v0.1.0)  
**Application Title:** Genesis  
**Technology:** React 16.12.0 with Create React App 3.2.0

This application demonstrates a classic parallax scrolling technique where background images remain fixed while foreground content scrolls, creating an immersive visual experience.

## Features

- **Parallax Scrolling Effect:** Three background images with fixed positioning
- **Inspirational Content:** Quotes from Nelson Mandela, Harry S. Truman, and Albert Einstein
- **Responsive Design:** Optimized for desktop and mobile devices
- **Clean Typography:** Lato font with careful spacing and contrast
- **Progressive Enhancement:** Parallax disabled on mobile for better performance

## Technology Stack

- **React:** 16.12.0 - Component-based UI library
- **React DOM:** 16.12.0 - DOM rendering for React
- **React Scripts:** 3.2.0 - Build tools and configuration
- **CSS3:** Custom parallax effects using `background-attachment: fixed`

## Project Structure

```
src/
├── index.js                    # Application entry point
├── App.js                      # Root component wrapper
├── App.css                     # App component styles
├── index.css                   # Global styles
├── serviceWorker.js            # PWA service worker (disabled)
└── ParallaxLanding/
    ├── LandingPage.js          # Main parallax component
    ├── LandingPage.css         # Parallax styles
    └── assets/img/
        ├── img_parallax.jpg    # First background image
        ├── img_parallax2.jpg   # Second background image
        └── img_parallax3.jpg   # Third background image
```

## Component Architecture

### App Component (`src/App.js`)
- **Type:** Functional component
- **Purpose:** Application wrapper with centered layout
- **Renders:** Single `<LandingPage />` component within styled header

### LandingPage Component (`src/ParallaxLanding/LandingPage.js`)
- **Type:** Class component named `NewComponent`
- **Purpose:** Main parallax implementation with 7 content sections
- **Layout:** Alternating parallax images and text content blocks

#### Content Sections:
1. **Hero Section:** "BELIEVE IN THE DREAM" with first parallax image
2. **Text Block:** Nelson Mandela inauguration speech excerpt (light theme)
3. **Second Hero:** "FEED PASSION" with second parallax image
4. **Quote Block:** Harry S. Truman on leadership (dark theme)
5. **Third Hero:** "BOW BEFORE GREATNESS" with third parallax image
6. **Quote Block:** Einstein on problem-solving (dark theme)
7. **Final Hero:** Language quote with first parallax image (reused)

## Styling Implementation

### Parallax Technique (`src/ParallaxLanding/LandingPage.css`)

```css
.bgimg-1, .bgimg-2, .bgimg-3 {
  background-attachment: fixed;    /* Creates parallax effect */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  opacity: 0.65;
}
```

**Key Features:**
- **Fixed Background:** `background-attachment: fixed` creates the parallax effect
- **Responsive Images:** `background-size: cover` ensures proper scaling
- **Mobile Optimization:** Parallax disabled below 1024px for performance

### Typography
- **Font:** Lato (15px, line-height 1.8)
- **Captions:** 25px with 10px letter-spacing for dramatic effect
- **Headers:** 20px uppercase with 5px letter-spacing

### Color Scheme
- **Light sections:** `#777` text on white background
- **Dark sections:** `#ddd` text on `#282E34` background
- **Captions:** White text on `#111` background

## Installation & Setup

### Prerequisites
- Node.js 10.0.0+ 
- npm 6.0.0+ or yarn 1.22.0+

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd parallex-reactjs

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at http://localhost:3000

## Available Scripts

### `npm start`
Starts the development server with hot reload at http://localhost:3000

### `npm test`
Launches Jest test runner in watch mode. Currently includes basic render test for App component.

### `npm run build`
Creates optimized production build in `build/` directory with:
- Minified JavaScript and CSS
- Asset optimization and compression
- Filename hashing for cache busting

### `npm run eject` ⚠️
**One-way operation!** Ejects from Create React App, exposing all configuration files for custom modifications.

## Development Guidelines

### Adding New Parallax Sections

1. **Add background image:**
   ```bash
   # Place image in assets directory
   cp new-image.jpg src/ParallaxLanding/assets/img/img_parallax4.jpg
   ```

2. **Update CSS:**
   ```css
   .bgimg-4 {
     background-image: url("./assets/img/img_parallax4.jpg");
     min-height: 400px;
   }
   ```

3. **Add JSX section:**
   ```jsx
   <div className="bgimg-4">
     <div className="caption">
       <span className="border">YOUR CAPTION</span>
     </div>
   </div>
   ```

### Content Modification

Text content uses inline styles in `LandingPage.js`:

**Light theme template:**
```jsx
<div style={{ 
  color: '#777', 
  backgroundColor: 'white', 
  textAlign: 'justify', 
  padding: '50px 80px' 
}}>
  <h3 style={{ textAlign: 'center' }}>Your Heading</h3>
  <p>Your content...</p>
</div>
```

**Dark theme template:**
```jsx
<div style={{ 
  color: '#ddd', 
  backgroundColor: '#282E34', 
  textAlign: 'justify', 
  padding: '50px 80px' 
}}>
  <p>Your content...</p>
</div>
```

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome 60+ | ✅ Full | Optimal performance |
| Firefox 60+ | ✅ Full | Optimal performance |
| Safari 12+ | ✅ Full | Good performance |
| Edge 79+ | ✅ Full | Chromium-based |
| Mobile Safari | ⚠️ Limited | Parallax disabled |
| Chrome Mobile | ⚠️ Limited | Parallax disabled |

**Note:** Parallax effect is automatically disabled on devices with max-width 1024px for performance reasons.

## Performance Considerations

- **Image Optimization:** Background images should be compressed and optimized
- **Mobile Performance:** Parallax disabled on mobile devices via media query
- **Bundle Size:** ~135KB JavaScript, ~2KB CSS, plus image assets
- **Service Worker:** Available but disabled by default

## Deployment

### Static Hosting (Recommended)
```bash
npm run build
# Deploy build/ directory to any static host
```

**Compatible with:**
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Traditional web servers (Apache, Nginx)

### Server Configuration

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Common Issues & Solutions

### Parallax Not Working
- **Cause:** Mobile device or browser doesn't support `background-attachment: fixed`
- **Expected:** Parallax is disabled on mobile devices by design

### Images Not Loading
- **Cause:** Incorrect CSS paths
- **Solution:** Verify paths in `LandingPage.css` are relative to the CSS file

### Font Issues
- **Current:** Lato font referenced but not loaded
- **Solution:** Add Google Fonts import or use system font stack

## Testing

### Current Tests
- `src/App.test.js` - Basic render test ensuring App component mounts without errors

### Running Tests
```bash
npm test                    # Interactive watch mode
npm test -- --coverage     # With coverage report
npm test -- --watchAll=false  # Single run
```

## Contributing

1. Follow existing code patterns (class components, inline styles for content)
2. Optimize images before committing
3. Test on multiple browsers and devices
4. Ensure build succeeds before submitting

## Support

This project demonstrates fundamental React concepts and CSS parallax techniques. For questions about implementation details, refer to the code comments and this documentation.

---

**Built with** Create React App | **React** 16.12.0 | **Last Updated** November 2025