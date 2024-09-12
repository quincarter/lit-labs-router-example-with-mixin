import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { RouterMixin } from "./RouterMixin";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends RouterMixin(LitElement) {
  render() {
    return html`
      <header>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </header>
      <main>${this.router.outlet()}</main>
      <footer>Footer</footer>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
