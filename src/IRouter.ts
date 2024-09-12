import { Router, Routes } from '@lit-labs/router';
import { html, LitElement } from 'lit';

class IRouter {
  router: Router | null;
  routes: Routes | null;

  constructor() {
    this.router = null;
    this.routes = null;
  }

  get outlet() {
    return this.routes ? this.routes.outlet() : undefined;
  }

  set outlet(value) {
    this.outlet = value;
  }

  /**
   * @param path A string value representing a valid path defined in the router config
   */
  goto(path: string) {
    this.router?.goto(path);
  }

  create(host: LitElement) {
    this.routes = new Routes(host, [
      { path: '/', render: () => html`<h1>Home</h1>` },
      { path: '/projects', render: () => html`<h1>Projects</h1>` },
      { path: '/about', render: () => html`<h1>About</h1>` },
    ]);
  }
}

export const routerSystem = new IRouter();
