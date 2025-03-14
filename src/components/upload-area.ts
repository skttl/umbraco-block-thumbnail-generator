import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'umbthumb-upload-area': UploadArea;
  }
}

@customElement('umbthumb-upload-area')
export class UploadArea extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }
    #dropZone {
      width: 100%;
      aspect-ratio: 8/5;
      border: 2px dashed var(--primary);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
      background: var(--background);
    }
    #dropZone:hover {
      border-color: var(--primary-light);
      background: var(--background-dark);
    }
    #dropZone.dragover {
      border-color: var(--accent);
      background: color-mix(in srgb, var(--accent) 10%, transparent);
    }
    #dropZone.has-image {
      border-style: solid;
      border-color: var(--primary);
    }
    #dropZone.has-image:hover {
      border-color: var(--primary-light);
    }
    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.2s ease;
      image-rendering: -webkit-optimize-contrast; /* Webkit */
      image-rendering: crisp-edges; /* Firefox */
      image-rendering: auto; /* Standard */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #dropZone.has-image canvas {
      opacity: 1;
    }
    #dropZone.has-image .dropzone-text {
      opacity: 0;
      background: color-mix(in srgb, var(--background) 95%, transparent);
      margin: 20px;
      padding: 16px 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    #dropZone.has-image:hover .dropzone-text {
      opacity: 0.98;
    }
    .dropzone-text {
      font-size: 16px;
      color: var(--primary-dark);
      text-align: center;
      padding: 20px;
      user-select: none;
      position: relative;
      z-index: 1;
      transition: all 0.2s ease;
      border-radius: 4px;
      text-wrap: balance;
    }

    @media (prefers-color-scheme: dark) {
      #dropZone {
        border-color: var(--primary-light);
        background: var(--background);
      }
      #dropZone:hover {
        border-color: var(--primary);
        background: var(--background-dark);
      }
      #dropZone.dragover {
        border-color: var(--accent);
        background: color-mix(in srgb, var(--accent) 5%, transparent);
      }
      #dropZone.has-image {
        border-color: var(--primary-light);
      }
      #dropZone.has-image:hover {
        border-color: var(--primary);
      }
      .dropzone-text {
        color: var(--primary-dark);
      }
      #dropZone.has-image .dropzone-text {
        background: color-mix(in srgb, var(--background) 95%, transparent);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  `;

  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  protected override firstUpdated(): void {
    const canvas = this.renderRoot.querySelector<HTMLCanvasElement>('#canvas');
    if (canvas) {
      this.canvas = canvas;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.ctx = ctx;
      }
    }

    const dropZone = this.renderRoot.querySelector<HTMLDivElement>('#dropZone');
    const fileInput = this.renderRoot.querySelector<HTMLInputElement>('#fileInput');

    if (dropZone) {
      dropZone.addEventListener('dragover', (e) => this.handleDragOver(e));
      dropZone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
      dropZone.addEventListener('drop', (e) => this.handleDrop(e));
      dropZone.addEventListener('click', () => fileInput?.click());
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          this.handleFile(file);
        }
      });
    }

    // Add paste event listener to the window
    window.addEventListener('paste', (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            this.handleFile(file);
            break;
          }
        }
      }
    });
  }

  private handleDragOver(e: DragEvent): void {
    e.preventDefault();
    const dropZone = this.renderRoot.querySelector<HTMLDivElement>('#dropZone');
    dropZone?.classList.add('dragover');
  }

  private handleDragLeave(e: DragEvent): void {
    e.preventDefault();
    const dropZone = this.renderRoot.querySelector<HTMLDivElement>('#dropZone');
    dropZone?.classList.remove('dragover');
  }

  private handleDrop(e: DragEvent): void {
    e.preventDefault();
    const dropZone = this.renderRoot.querySelector<HTMLDivElement>('#dropZone');
    dropZone?.classList.remove('dragover');
    
    const file = e.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      this.handleFile(file);
    }
  }

  private handleFile(file: File): void {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        if (this.canvas && this.ctx) {
          const dropZone = this.renderRoot.querySelector<HTMLDivElement>('#dropZone');
          dropZone?.classList.add('has-image');

          // Create a temporary canvas to analyze the image
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          if (tempCtx) {
            tempCanvas.width = img.width;
            tempCanvas.height = img.height;
            tempCtx.drawImage(img, 0, 0);

            // Sample pixels from the edges to determine background color
            const edgePixels: Array<{ r: number; g: number; b: number }> = [];
            const imageData = tempCtx.getImageData(0, 0, img.width, img.height);
            const data = imageData.data;

            // Sample from all four edges
            for (let i = 0; i < img.width; i++) {
              // Top edge
              const topIdx = (i + 0 * img.width) * 4;
              if (data[topIdx + 3] > 0) { // Check alpha channel
                edgePixels.push({
                  r: data[topIdx],
                  g: data[topIdx + 1],
                  b: data[topIdx + 2]
                });
              }

              // Bottom edge
              const bottomIdx = (i + (img.height - 1) * img.width) * 4;
              if (data[bottomIdx + 3] > 0) { // Check alpha channel
                edgePixels.push({
                  r: data[bottomIdx],
                  g: data[bottomIdx + 1],
                  b: data[bottomIdx + 2]
                });
              }
            }

            for (let i = 0; i < img.height; i++) {
              // Left edge
              const leftIdx = (0 + i * img.width) * 4;
              if (data[leftIdx + 3] > 0) { // Check alpha channel
                edgePixels.push({
                  r: data[leftIdx],
                  g: data[leftIdx + 1],
                  b: data[leftIdx + 2]
                });
              }

              // Right edge
              const rightIdx = ((img.width - 1) + i * img.width) * 4;
              if (data[rightIdx + 3] > 0) { // Check alpha channel
                edgePixels.push({
                  r: data[rightIdx],
                  g: data[rightIdx + 1],
                  b: data[rightIdx + 2]
                });
              }
            }

            // Calculate the most common color
            const colorCounts = new Map<string, number>();
            edgePixels.forEach(pixel => {
              const color = `#${pixel.r.toString(16).padStart(2, '0')}${pixel.g.toString(16).padStart(2, '0')}${pixel.b.toString(16).padStart(2, '0')}`;
              colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
            });

            // Default to white if no non-transparent pixels found
            let dominantColor = '#ffffff';
            if (edgePixels.length > 0) {
              let maxCount = 0;
              colorCounts.forEach((count, color) => {
                if (count > maxCount) {
                  maxCount = count;
                  dominantColor = color;
                }
              });
            }

            // Dispatch event with detected background color
            this.dispatchEvent(new CustomEvent('image-loaded', { 
              detail: { 
                image: img,
                backgroundColor: dominantColor
              },
              bubbles: true, 
              composed: true 
            }));
          }
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  protected override render() {
    return html`
      <div id="dropZone">
        <canvas id="canvas"></canvas>
        <div class="dropzone-text">
          <p>Drop image here, paste from clipboard, or click to upload</p>
          <input type="file" id="fileInput" accept="image/*" style="display: none;">
        </div>
      </div>
    `;
  }
}
