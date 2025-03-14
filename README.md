# Umbraco Block Thumbnail Generator

A web component for generating beautiful thumbnails for Umbraco blocks. Built with Lit and follows Umbraco's design patterns.

## Features

- Upload images via drag & drop, file selection, or paste
- Automatic background color detection from image edges
- Custom background color and tint options
- Flexible fit modes (fit to width or height)
- Download in multiple formats (PNG, JPG, WEBP)
- Responsive design with dark mode support
- Maintains 16:9 aspect ratio
- Accessibility-focused UI

## Web Components

The project consists of several web components, all prefixed with `umbthumb-` to avoid naming conflicts:

- `umbthumb-image-uploader`: Main component that orchestrates the entire interface
- `umbthumb-upload-area`: Handles file upload and canvas display
- `umbthumb-color-controls`: Manages background, tint, and fit mode settings
- `umbthumb-download-controls`: Handles image export in various formats

## Usage

### Fit Modes

The component supports two fit modes for image display:

- **Fit to Width**: Image will fit the full width of the canvas. If the image is taller than the canvas, it will be anchored to the top.
- **Fit to Height**: Image will fit the full height of the canvas. If the image is wider than the canvas, it will be anchored to the left.

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

MIT Søren Kottal
