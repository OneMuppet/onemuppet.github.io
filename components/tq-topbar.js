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
        :host {
          position: fixed; 
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
        }

        .topbar {
          padding: 8px;
          background: var(--top);
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          height: var(--bar-height);
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
