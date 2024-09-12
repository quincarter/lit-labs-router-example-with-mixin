import { Router } from "@lit-labs/router";
import { LitElement, PropertyValueMap, html } from "lit";

type Constructor<T = {}> = new (...args: any[]) => T;
export interface IRouterMixin {
  router: Router;
  goto: (path: string) => void;
}

export const RouterMixin = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class RouterMixin extends superClass {
    router = new Router(this, [
      { path: "/", render: () => html`<h1>Home</h1>` },
      { path: "/projects", render: () => html`<h1>Projects</h1>` },
      { path: "/about", render: () => html`<h1>About</h1>` },
    ]);

    constructor(...args: any[]) {
      super();
      console.log("constructor for mixin called", args);
    }

    connectedCallback() {
      super.connectedCallback();
    }

    updated(
      changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
    ) {
      super.updated?.(changedProperties);
      console.log(`${this.localName} was updated`);
    }

    /**
     * @param path A string value representing a valid path defined in the router config
     */
    goto(path: string): void {
      this.router?.goto(path);
    }

    // not sure why you need this?
    // create(host: LitElement) {
    // this.router = new Router(host, [
    //   { path: "/", render: () => html`<h1>Home</h1>` },
    //   { path: "/projects", render: () => html`<h1>Projects</h1>` },
    //   { path: "/about", render: () => html`<h1>About</h1>` },
    // ]);
    // }
  }
  return RouterMixin as Constructor<IRouterMixin> & T;
};
