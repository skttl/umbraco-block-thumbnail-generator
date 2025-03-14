import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface ColorSettings {
  enableCustomBg: boolean;
  bgColor: string;
  enableTint: boolean;
  tintColor: string;
  padding: number;
  fitMode: 'width' | 'height';
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
    }
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 15px;
      padding: 8px;
      border-radius: 6px;
    }
    .control-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 12px;
    }
    .control-row.padding-row {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
    }
    .control-row:not(.padding-row) label {
      order: 2;
    }
    .control-row:not(.padding-row) input[type="checkbox"] {
      order: 1;
    }
    .control-row:not(.padding-row) input[type="color"] {
      order: 3;
      margin-left: auto;
    }
    label {
      font-size: 14px;
      color: var(--primary-dark);
      user-select: none;
      font-weight: 400;
      letter-spacing: 0.2px;
      white-space: nowrap;
    }
    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin: 0;
      accent-color: var(--primary);
      cursor: pointer;
    }
    input[type="color"] {
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: none;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: 2px solid var(--primary);
      border-radius: 4px;
    }
    input[type="range"] {
      flex: 1;
      height: 6px;
      -webkit-appearance: none;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      cursor: pointer;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary-dark);
      cursor: pointer;
      transition: background 0.2s ease;
    }
    input[type="range"]::-webkit-slider-thumb:hover {
      background: var(--primary);
    }
    .range-value {
      min-width: 36px;
      font-size: 14px;
      color: var(--primary-dark);
      font-variant-numeric: tabular-nums;
      text-align: right;
    }
    .control-row select {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid var(--primary);
      background: var(--background);
      color: var(--primary-dark);
      cursor: pointer;
    }
    .control-row select:hover {
      border-color: var(--primary-light);
    }
    .control-row select:focus {
      outline: none;
      border-color: var(--accent);
    }

    @media (prefers-color-scheme: dark) {
      .control-group {
        background: rgba(255, 255, 255, 0.03);
      }
      label {
        color: var(--primary-dark);
      }
      input[type="range"] {
        background: rgba(255, 255, 255, 0.1);
      }
      input[type="range"]::-webkit-slider-thumb {
        background: var(--primary);
      }
      input[type="range"]::-webkit-slider-thumb:hover {
        background: var(--primary-light);
      }
      input[type="color"]::-webkit-color-swatch {
        border-color: var(--primary-light);
      }
      .range-value {
        color: var(--primary-dark);
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
    fitMode: 'width',
    detectedBgColor: '#ffffff'
  };

  private dispatchSettingsChange(settings: ColorSettings) {
    this.dispatchEvent(new CustomEvent('settings-changed', {
      detail: { settings },
      bubbles: true,
      composed: true
    }));
  }

  private handleFitModeChange = (e: Event): void => {
    const select = e.target as HTMLSelectElement;
    this.settings = {
      ...this.settings,
      fitMode: select.value as 'width' | 'height'
    };
    this.dispatchSettingsChange(this.settings);
  }

  protected override firstUpdated(): void {
    const enableCustomBg = this.renderRoot.querySelector<HTMLInputElement>('#enableCustomBg');
    const bgColor = this.renderRoot.querySelector<HTMLInputElement>('#bgColor');
    const enableTint = this.renderRoot.querySelector<HTMLInputElement>('#enableTint');
    const tintColor = this.renderRoot.querySelector<HTMLInputElement>('#tintColor');
    const padding = this.renderRoot.querySelector<HTMLInputElement>('#padding');
    const fitMode = this.renderRoot.querySelector<HTMLSelectElement>('#fitMode');

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
        this.settings = { ...this.settings, padding: Number(padding.value) };
        this.dispatchSettingsChange(this.settings);
      });
    }

    if (fitMode) {
      fitMode.addEventListener('change', this.handleFitModeChange);
    }
  }

  protected override render() {
    return html`
      <div class="color-controls">
        <div class="control-group">
          <div class="control-row">
            <input type="checkbox" id="enableCustomBg" ?checked=${this.settings.enableCustomBg}>
            <label for="enableCustomBg">Background Color</label>
            <input type="color" id="bgColor" .value=${this.settings.bgColor} ?disabled=${!this.settings.enableCustomBg}>
          </div>
          <div class="control-row">
            <input type="checkbox" id="enableTint" ?checked=${this.settings.enableTint}>
            <label for="enableTint">Tint Color</label>
            <input type="color" id="tintColor" .value=${this.settings.tintColor} ?disabled=${!this.settings.enableTint}>
          </div>
          <div class="control-row padding-row">
            <label for="padding">Padding</label>
            <input type="range" id="padding" min="0" max="50" .value=${this.settings.padding}>
            <span class="range-value">${this.settings.padding}%</span>
            <select id="fitMode" .value=${this.settings.fitMode} @change=${this.handleFitModeChange}>
              <option value="width">Fit to Width</option>
              <option value="height">Fit to Height</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }
}
