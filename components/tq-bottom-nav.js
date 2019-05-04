class TqBottomNav extends HTMLElement {

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
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          box-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
        }
        [name=buttons] {
          height: var(--bar-height);
          padding: var(--space-s);
          background: var(--bottom);
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          box-sizing: border-box;
          border: none;
        }
        img {
          max-height: 100%;
        }
        ::slotted(button) {
          width: 100px;
          height: 40px;
          font-size: 16px;
          cursor: pointer;
          background-color: transparent;
          background-size: 50% 50%;
          border: none;
          color: var(--grey);
          transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
          transition-property: background-color;
        }
        ::slotted(button:hover) {
          background-color: var(--top);
        }
        ::slotted(button:active) {
          border:1px solid var(--bottom);
          outline: 1px solid rgba(0,0,0,0.3);
        }

        ::slotted(button:focus) {
          border:2px solid var(--bottom);
          outline: 1px solid rgba(255,255,255,.3);
        }
      </style>
      <slot name="buttons"></slot>
    `
  }
}
export default customElements.define('tq-bottom-nav', TqBottomNav)
