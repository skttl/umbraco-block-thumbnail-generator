import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'umbthumb-download-controls': DownloadControls;
  }
}

@customElement('umbthumb-download-controls')
export class DownloadControls extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .download-controls {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      padding: 8px;
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      background: rgba(0, 0, 0, 0.03);
      border-radius: 6px;
      align-items: center;
    }
    .download-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    label {
      font-size: 14px;
      color: #666;
      user-select: none;
      font-weight: 400;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }
    .download-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #fff;
      background-color: #1b5e20; /* Dark green with contrast ratio 7.5:1 against white */
    }
    button:hover {
      background-color: #2e7d32;
    }
    button:focus {
      outline: 2px solid #2e7d32;
      outline-offset: 2px;
    }
    button:active {
      transform: translateY(1px);
    }
    .file-size {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.9);
      font-variant-numeric: tabular-nums;
    }

    @media (prefers-color-scheme: dark) {
      .control-group {
        background: rgba(255, 255, 255, 0.03);
      }
      label {
        color: #ccc;
      }
      button {
        background-color: #2e7d32; /* Green 800 with contrast ratio 4.6:1 against white */
      }
      button:hover {
        background-color: #388e3c; /* Green 700 with contrast ratio 5.2:1 against white */
      }
      button:focus {
        outline-color: #388e3c;
      }
    }

    @media (forced-colors: active) {
      button {
        border: 1px solid ButtonText;
      }
    }
  `;

  @state()
  fileSizes: Record<string, number> = {
    png: 0,
    jpg: 0,
    webp: 0
  };

  updateFileSizes(sizes: Record<string, number>) {
    this.fileSizes = { ...sizes };
  }

  private handleDownload(format: string) {
    this.dispatchEvent(new CustomEvent('download-image', {
      detail: { format: format },
      bubbles: true,
      composed: true
    }));
  }

  protected override render() {
    return html`
      <div class="download-controls">
        <div class="control-group">
          <div class="download-group">
            <div class="download-buttons">
              <button @click=${() => this.handleDownload('png')}>
                PNG
                ${this.fileSizes['png'] ? html`<span class="file-size">(${this.fileSizes['png']} KB)</span>` : ''}
              </button>
              <button @click=${() => this.handleDownload('jpg')}>
                JPG
                ${this.fileSizes['jpg'] ? html`<span class="file-size">(${this.fileSizes['jpg']} KB)</span>` : ''}
              </button>
              <button @click=${() => this.handleDownload('webp')}>
                WEBP
                ${this.fileSizes['webp'] ? html`<span class="file-size">(${this.fileSizes['webp']} KB)</span>` : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
