class TqSection extends HTMLElement {

  constructor() {
    super()
    this._data;
    this.render = this.render.bind(this)
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
  }
  disconnectedCallback() {
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          justify-items: center;
          padding: 24px 0;
        }
        a {
          text-decoration: none;
        }
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        /* Small screens */
        @media only screen and (max-width: 600px) {
          :host {
            padding: var(--space-s);
          }
        }
      </style>
      <slot></slot>
    `
  }
}
export default customElements.define('tq-section', TqSection)
