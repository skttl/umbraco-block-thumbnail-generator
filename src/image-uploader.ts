import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ColorSettings } from './components/color-controls';
import { DownloadControls } from './components/download-controls';
import './components/upload-area';
import './components/color-controls';
import './components/download-controls';

declare global {
  interface HTMLElementTagNameMap {
    'umbthumb-image-uploader': ImageUploader;
  }
}

@customElement('umbthumb-image-uploader')
export class ImageUploader extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 400px;
    }
    .controls {
      display: none;
      margin-top: 10px;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      padding: 4px;
      border-radius: 8px;
      background: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    @media (prefers-color-scheme: dark) {
      .controls {
        background: rgb(0, 0, 0, 0.05);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  `;

  @state()
  private settings: ColorSettings = {
    enableCustomBg: false,
    bgColor: '#ffffff',
    enableTint: false,
    tintColor: '#000000',
    padding: 0,
    fitMode: 'width'
  };

  @state()
  private detectedBgColor: string = '#ffffff';

  @state()
  private currentImage: HTMLImageElement | null = null;

  @state()
  private fileSizes: Record<string, number> = {
    png: 0,
    jpg: 0,
    webp: 0
  };

  @state()
  private uploadArea: Element | null = null;

  constructor() {
    super();
    this.loadSettings();
  }

  private loadSettings(): void {
    try {
      const savedSettings = JSON.parse(localStorage.getItem('imageUploaderSettings') || '{}');
      this.settings = {
        enableCustomBg: savedSettings.enableCustomBg ?? false,
        bgColor: savedSettings.bgColor ?? '#ffffff',
        enableTint: savedSettings.enableTint ?? false,
        tintColor: savedSettings.tintColor ?? '#000000',
        padding: savedSettings.padding ?? 0,
        fitMode: savedSettings.fitMode ?? 'width'
      };
    } catch (e) {
      console.error('Failed to load settings:', e);
    }
  }

  private saveSettings(): void {
    localStorage.setItem('imageUploaderSettings', JSON.stringify(this.settings));
  }

  private handleImageLoaded(e: CustomEvent) {
    this.currentImage = e.detail.image;
    const controls = this.renderRoot.querySelector<HTMLDivElement>('#controls');
    if (controls) {
      controls.style.display = 'flex';
    }

    // Store detected background color
    if (e.detail.backgroundColor) {
      this.detectedBgColor = e.detail.backgroundColor;
      this.settings = {
        ...this.settings,
        enableCustomBg: false,
        bgColor: e.detail.backgroundColor
      };
    }

    this.redrawCanvas();
    this.updateDownloadSizes();
  }

  private handleSettingsChanged(e: CustomEvent) {
    this.settings = e.detail.settings;
    this.saveSettings();
    this.redrawCanvas();
    this.updateDownloadSizes();
  }

  private handleDownloadImage(e: CustomEvent) {
    this.downloadImage(e.detail.format);
  }

  private redrawCanvas(): void {
    const canvas = this.uploadArea?.shadowRoot?.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !this.currentImage) return;

    // Set canvas size to match the container width while maintaining aspect ratio
    const container = canvas.parentElement;
    if (container) {
      canvas.width = 400;
      canvas.height = 250;
    }

    // Enable high-quality image scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const padding = this.settings.padding / 100;
    const aspectRatio = this.currentImage.width / this.currentImage.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;

    // Calculate dimensions based on fit mode
    if (this.settings.fitMode === 'width') {
      // Fit to width: Set width to canvas width and calculate height based on aspect ratio
      drawWidth = canvas.width;
      drawHeight = drawWidth / aspectRatio;
    } else {
      // Fit to height: Set height to canvas height and calculate width based on aspect ratio
      drawHeight = canvas.height;
      drawWidth = drawHeight * aspectRatio;
    }

    // Calculate padding and final dimensions
    const horizontalPadding = drawWidth * padding;
    const verticalPadding = drawHeight * padding;
    
    // Calculate x position - if fit to height and image is wider, anchor to left
    const paddingX = this.settings.fitMode === 'height' && drawWidth > canvas.width 
      ? horizontalPadding  // Anchor to left
      : (canvas.width - drawWidth) / 2 + horizontalPadding; // Center horizontally

    // Calculate y position - if fit to width and image is taller, anchor to top
    const paddingY = this.settings.fitMode === 'width' && drawHeight > canvas.height
      ? verticalPadding // Anchor to top
      : (canvas.height - drawHeight) / 2 + verticalPadding; // Center vertically

    const finalWidth = drawWidth * (1 - 2 * padding);
    const finalHeight = drawHeight * (1 - 2 * padding);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Use custom background color only when enabled, otherwise use detected color as fallback
    ctx.fillStyle = this.settings.enableCustomBg ? this.settings.bgColor : this.detectedBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the image with proper dimensions
    ctx.drawImage(
      this.currentImage,
      paddingX,
      paddingY,
      finalWidth,
      finalHeight
    );

    if (this.settings.enableTint) {
      ctx.fillStyle = this.settings.tintColor;
      ctx.globalCompositeOperation = 'color';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  private async updateDownloadSizes(): Promise<void> {
    const canvas = this.uploadArea?.shadowRoot?.querySelector('canvas');
    if (!canvas) return;

    const formats = ['png', 'jpg', 'webp'] as const;
    const mimeTypes = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'webp': 'image/webp'
    };

    for (const format of formats) {
      const mimeType = mimeTypes[format];
      const blob = await new Promise<Blob>(resolve => canvas.toBlob(blob => resolve(blob!), mimeType));
      this.fileSizes[format] = Math.round(blob.size / 1024);
    }

    // Update download controls with new file sizes
    const downloadControls = this.renderRoot.querySelector<DownloadControls>('umbthumb-download-controls');
    if (downloadControls) {
      downloadControls.updateFileSizes(this.fileSizes);
    }
  }

  private downloadImage(format: string): void {
    const canvas = this.uploadArea?.shadowRoot?.querySelector('canvas');
    if (!canvas) return;

    const mimeType = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'webp': 'image/webp'
    }[format];

    if (!mimeType) return;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `image.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, mimeType);
  }

  protected override firstUpdated() {
    this.uploadArea = this.renderRoot.querySelector('umbthumb-upload-area');
  }

  protected override render() {
    return html`
      <umbthumb-upload-area @image-loaded=${this.handleImageLoaded}></umbthumb-upload-area>
      <div class="controls" id="controls">
        <umbthumb-color-controls 
          .settings=${{
            ...this.settings,
            detectedBgColor: this.detectedBgColor
          }}
          @settings-changed=${this.handleSettingsChanged}
        ></umbthumb-color-controls>
        <umbthumb-download-controls
          .fileSizes=${this.fileSizes}
          @download-image=${this.handleDownloadImage}
        ></umbthumb-download-controls>
      </div>
    `;
  }
}
