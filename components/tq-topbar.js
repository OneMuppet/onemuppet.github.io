class TqTopbar extends HTMLElement {

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
        .topbar {
          height: 56px;
          width: 100vw;
          padding: 8px;
          background: var(--top);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        h1 {
          font-weight: 900;
          font-size: 24px;
        }
        img {
          max-height: 100%;
        }
      </style>
      <div class="topbar">
        <slot name="title">Twiqqs</slot>
      </div>
    `
  }
}
export default customElements.define('tq-topbar', TqTopbar)
