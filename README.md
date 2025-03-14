# Umbraco Block Thumbnail Generator

A web component for generating beautiful thumbnails for Umbraco blocks. Built with Lit and follows Umbraco's design patterns.

## Features

- Upload images via drag & drop, file selection, or paste
- Automatic background color detection from image edges
- Custom background color and tint options
- Download in multiple formats (PNG, JPG, WEBP)
- Responsive design with dark mode support
- Maintains 16:9 aspect ratio
- Accessibility-focused UI

## Web Components

The project consists of several web components, all prefixed with `umbthumb-` to avoid naming conflicts:

- `umbthumb-image-uploader`: Main component that orchestrates the entire interface
- `umbthumb-upload-area`: Handles file upload and canvas display
- `umbthumb-color-controls`: Manages background and tint settings
- `umbthumb-download-controls`: Handles image export in various formats

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The project is set up for automatic deployment to GitHub Pages. Simply push to the `main` branch, and GitHub Actions will handle the deployment.

To deploy manually:
```bash
npm run deploy
```

## Local Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit `http://localhost:5173` in your browser

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT © Søren Kottal
