import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("task-progress")
export class TaskProgressElement extends LitElement {
  @property({ type: Number })
  currentCount = 0;

  @property({ type: Number })
  allCount = 0;

  render() {
    return html`
      <div>
        ${this.currentCount} / ${this.allCount}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-progress": TaskProgressElement;
  }
}
