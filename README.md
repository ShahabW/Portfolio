# Developer Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, minimal, developer-focused aesthetic
- 🌙 **Dark Mode**: Toggle between light and dark themes (persisted in localStorage)
- 📱 **Fully Responsive**: Works on mobile, tablet, and desktop
- 🚀 **GitHub Integration**: Automatically fetches and displays public repositories
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- ♿ **Accessible**: Semantic HTML with ARIA labels

## Sections

1. **Hero** - Introduction with CTA buttons
2. **About** - Personal background and interests
3. **Skills** - Categorized skills with visual progress bars
4. **Projects** - Auto-fetched GitHub repositories
5. **Experience** - Timeline of professional experience
6. **Education** - Academic background
7. **Contact** - Contact form and social links

## Tech Stack

- React 18
- Tailwind CSS 3
- Vite
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Customization

### Personal Information

Update the following files to customize your portfolio:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update social media links
   - Modify the introduction text

2. **About Section** (`src/components/About.jsx`)
   - Update your bio and highlights

3. **Skills Section** (`src/components/Skills.jsx`)
   - Add or remove skills and adjust proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`)
   - Change `GITHUB_USERNAME` to your GitHub username

5. **Experience Section** (`src/components/Experience.jsx`)
   - Update your work experience

6. **Education Section** (`src/components/Education.jsx`)
   - Update your educational background

7. **Contact Section** (`src/components/Contact.jsx`)
   - Update contact information and social links

### Theme Colors

To change the primary color, edit `tailwind.config.js` and modify the `colors.primary` object.

### Resume/CV

Place your resume PDF as `public/resume.pdf` for the download button to work.

## Deployment

This portfolio can be deployed to:

- **Vercel**: Connect your repository and deploy
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

MIT License - feel free to use this template for your own portfolio!
