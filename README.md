# Domain Parking Page

A modern, elegant parking page for owned domains. Built with React, TypeScript, and Tailwind CSS to provide a clean landing page for domains that are held but not yet in active use.

## Features

- 🎨 **Modern Design** - Clean, professional interface with gradient backgrounds
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🎭 **Customizable** - Easy to modify content and styling
- 🔗 **Social Links** - Integrated social media links section
- 📧 **Contact Section** - Clear call-to-action for domain inquiries

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **Lucide React** - Beautiful icon set

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd parking-page

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customization

### Update Content

Edit the following components to customize your parking page:

- `src/components/Header.tsx` - Header with brand name
- `src/components/Hero.tsx` - Main headline and description
- `src/components/ContactSection.tsx` - Contact information and CTA
- `src/components/SocialLinks.tsx` - Social media links

### Styling

The project uses Tailwind CSS. Modify `tailwind.config.js` to customize the theme, or edit component classes directly.

## Project Structure

```
parking-page/
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ContactSection.tsx
│   │   └── SocialLinks.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## License

Private project - All rights reserved.
