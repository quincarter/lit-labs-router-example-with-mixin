export const Highlightable =
  <T extends Constructor<LitElement>>(superClass: T) => {
    class HighlightableElement extends superClass {
      // Adds some styles...
      static styles = [
        (superClass as unknown as typeof LitElement).styles ?? [],
        css`.highlight { background: yellow; }`
      ];

      // ...a public `highlight` property/attribute...
      @property({type: Boolean}) highlight = false;

      // ...and a helper render method:
      renderHighlight(content: unknown) {
        return html`
          <div class=${classMap({highlight: this.highlight})}>
            ${content}
          </div>`;
        }
      }
      return HighlightableElement as Constructor<HighlightableInterface> & T;
    };