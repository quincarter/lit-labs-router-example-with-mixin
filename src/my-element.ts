import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { routerSystem } from './IRouter';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  _routerSystem = routerSystem;

  connectedCallback() {
    super.connectedCallback();
    this._routerSystem.create(this);
    this.requestUpdate();
    console.log('router system', this._routerSystem);
  }

  render() {
    return html`
      <header>Header</header>
      <main>Main Content: ${this._routerSystem.outlet}</main>
      <footer>Footer</footer>
    `;
  }

  static styles = css`
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
