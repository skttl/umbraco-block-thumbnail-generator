import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface ColorSettings {
  enableCustomBg: boolean;
  bgColor: string;
  enableTint: boolean;
  tintColor: string;
  padding: number;
  detectedBgColor?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'umbthumb-color-controls': ColorControls;
  }
}

@customElement('umbthumb-color-controls')
export class ColorControls extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }
    .color-controls {
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
      transition: background-color 0.2s ease;
    }
    .color-picker {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 12px;
    }
    .color-picker input[type="color"] {
      width: 32px;
      height: 32px;
      padding: 2px;
      border: 2px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      background: transparent;
      transition: border-color 0.2s ease;
    }
    .color-picker input[type="color"]:hover:not(:disabled) {
      border-color: #4CAF50;
    }
    .color-picker input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
      accent-color: #4CAF50;
    }
    .color-picker input[type="color"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .slider-control {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 12px;
      width: 100%;
    }
    .slider-control input[type="range"] {
      width: 100%;
      accent-color: #4CAF50;
      height: 4px;
      border-radius: 2px;
    }
    .slider-control .value {
      min-width: 3em;
      text-align: right;
      color: #666;
      font-weight: 400;
      letter-spacing: 0.2px;
      font-variant-numeric: tabular-nums;
    }
    label {
      font-size: 14px;
      color: #666;
      user-select: none;
      font-weight: 400;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }

    @media (prefers-color-scheme: dark) {
      .control-group {
        background: rgba(255, 255, 255, 0.03);
      }
      .color-picker input[type="color"] {
        border-color: #444;
      }
      .color-picker input[type="color"]:hover:not(:disabled) {
        border-color: #66bb6a;
      }
      .slider-control .value {
        color: #ccc;
      }
      label {
        color: #ccc;
      }
      .color-picker input[type="checkbox"] {
        accent-color: #66bb6a;
      }
      .slider-control input[type="range"] {
        accent-color: #66bb6a;
        background-color: #2d2d2d;
      }
      input[type="range"]::-webkit-slider-thumb {
        background: #66bb6a;
      }
      input[type="range"]::-moz-range-thumb {
        background: #66bb6a;
      }
    }
  `;

  @property({ type: Object })
  settings: ColorSettings = {
    enableCustomBg: false,
    bgColor: '#ffffff',
    enableTint: false,
    tintColor: '#000000',
    padding: 0,
    detectedBgColor: '#ffffff'
  };

  private dispatchSettingsChange(settings: ColorSettings) {
    this.dispatchEvent(new CustomEvent('settings-changed', {
      detail: { settings },
      bubbles: true,
      composed: true
    }));
  }

  protected override firstUpdated(): void {
    const enableCustomBg = this.renderRoot.querySelector<HTMLInputElement>('#enableCustomBg');
    const bgColor = this.renderRoot.querySelector<HTMLInputElement>('#bgColor');
    const enableTint = this.renderRoot.querySelector<HTMLInputElement>('#enableTint');
    const tintColor = this.renderRoot.querySelector<HTMLInputElement>('#tintColor');
    const padding = this.renderRoot.querySelector<HTMLInputElement>('#padding');

    if (enableCustomBg && bgColor) {
      enableCustomBg.addEventListener('change', () => {
        this.settings = { ...this.settings, enableCustomBg: enableCustomBg.checked };
        bgColor.disabled = !enableCustomBg.checked;
        this.dispatchSettingsChange(this.settings);
      });

      bgColor.addEventListener('input', () => {
        this.settings = { ...this.settings, bgColor: bgColor.value };
        this.dispatchSettingsChange(this.settings);
      });
    }

    if (enableTint && tintColor) {
      enableTint.addEventListener('change', () => {
        this.settings = { ...this.settings, enableTint: enableTint.checked };
        tintColor.disabled = !enableTint.checked;
        this.dispatchSettingsChange(this.settings);
      });

      tintColor.addEventListener('input', () => {
        this.settings = { ...this.settings, tintColor: tintColor.value };
        this.dispatchSettingsChange(this.settings);
      });
    }

    if (padding) {
      padding.addEventListener('input', () => {
        this.settings = { ...this.settings, padding: parseInt(padding.value) };
        const valueDisplay = padding.nextElementSibling;
        if (valueDisplay) {
          valueDisplay.textContent = `${padding.value}%`;
        }
        this.dispatchSettingsChange(this.settings);
      });
    }
  }

  protected override render() {
    return html`
      <div class="color-controls">
        <div class="control-group">
          <div class="color-picker">
            <input type="checkbox" id="enableCustomBg" .checked=${this.settings.enableCustomBg}>
            <label for="enableCustomBg">Custom Background</label>
            <input type="color" id="bgColor" .value=${this.settings.enableCustomBg ? this.settings.bgColor : (this.settings.detectedBgColor || '#ffffff')} ?disabled=${!this.settings.enableCustomBg}>
          </div>
          <div class="color-picker">
            <input type="checkbox" id="enableTint" .checked=${this.settings.enableTint}>
            <label for="enableTint">Enable Tint</label>
            <input type="color" id="tintColor" .value=${this.settings.tintColor} ?disabled=${!this.settings.enableTint}>
          </div>
        </div>
        <div class="control-group">
          <div class="slider-control">
            <label for="padding">Padding:</label>
            <input type="range" id="padding" min="0" max="50" .value=${this.settings.padding}>
            <span class="value">${this.settings.padding}%</span>
          </div>
        </div>
      </div>
    `;
  }
}
