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
          justify-content: space-between;
          box-sizing: border-box;
          color: var(--light);
          font-weight: 900;
          font-size: 24px;
        }
        img {
          max-height: 100%;
        }
      </style>
      <div class="topbar">
        Twiqqs
      </div>
    `
  }
}
export default customElements.define('tq-topbar', TqTopbar)
