class TqSectionList extends HTMLElement {

  constructor() {
    super()
    this._data;
    this.render = this.render.bind(this)
    this.updateNav = this.updateNav.bind(this)
    this.navButtons = [];
    this.activeSection;
    this.activeButton;
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
    this.sections = this.shadowRoot.querySelector('slot').assignedElements();
    this.nav = this.shadowRoot.querySelector('nav');
    this.updateNav();
    window.addEventListener('scroll', this.highlightMenuItem.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.highlightMenuItem);
  }

  highlightMenuItem(e) {
    if (!this.sections) { return; }
    const modifier = 100;
    let counter = 0;

    for (let section of this.sections) {
      if ((window.scrollY + modifier) > (section.offsetTop)) {
        // Set active navigation button
        if (this.activeButton) {
          this.activeButton.classList.remove('active')
        }
        this.activeButton = this.navButtons[counter]
        this.activeButton.classList.add('active');
      } else {
        this.navButtons[counter].classList.remove('active');
      }

      counter++;
    }
  }

  updateNav() {
    let counter = 0
    for (let section of this.sections) {
      let id = `section-${counter}`;
      let item = document.createElement('li')

      let btn = document.createElement('a')
      btn.href = `#${id}`
      this.navButtons.push(btn)

      item.appendChild(btn)
      this.nav.appendChild(item)

      section.id = id;
      counter++;
    }
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
        a.active {
          background: #fff;
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
