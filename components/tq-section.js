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
        }
        a {
          text-decoration: none;
        }
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      </style>
      <slot></slot>
    `
  }
}
export default customElements.define('tq-section', TqSection)
