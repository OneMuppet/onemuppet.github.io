class TqSectionList extends HTMLElement {

  constructor() {
    super()
    this._data;
    this.render = this.render.bind(this)
    this.updateNav = this.updateNav.bind(this)
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.sections = this.shadowRoot.querySelector('slot').assignedElements();
    this.nav = this.shadowRoot.querySelector('nav');
    this.updateNav();
  }
  disconnectedCallback() {
  }

  updateNav() {
    let navHtml = '';
    let counter = 0;
    for (let section of this.sections) {
      counter++;
      let id = `section-${counter}`;
      navHtml += `
      <li>
        <a href="#${id}"></a>
      </li>`;
      section.id = id;
      console.log(section);
    }
    this.nav.innerHTML = navHtml;
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        nav {
          position: fixed;
          left: 0;
          bottom: 64px;
          z-index: 9;
        }
        a {
          text-decoration: none;
          width: 16px;
          height: 16px;
          padding: 8px;
          background: #FFF4E2;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--grey);
          margin: 4px;
        }
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .hide {
          display: none;
        }
        ::slotted(tq-section:nth-child(even)) {
          background: var(--top);
        }
        ::slotted(tq-section:nth-child(odd)) {
          background: var(--bottom);
        }
      </style>
      <nav></nav>
      <div class="sections">
        <slot></slot>
      </div>
    `;
  }
}
export default customElements.define('tq-section-list', TqSectionList)
