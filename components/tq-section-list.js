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
    this.nav = this.shadowRoot.querySelector('.navigation');
    this.updateNav();
    this.nav.addEventListener('click', this.toggleMenu.bind(this))
    window.addEventListener('scroll', this.highlightMenuItem.bind(this));
  }

  disconnectedCallback() {
    this.nav.removeEventListener('click', this.toggleMenu.bind(this))
    window.removeEventListener('scroll', this.highlightMenuItem);
    this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.nav.classList.toggle('out');
  }

  highlightMenuItem(e) {
    if (!this.sections) { return; }
    let counter = 0;

    for (let section of this.sections) {
      if ((window.scrollY + (section.clientHeight / 2)) > (section.offsetTop)) {
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
      let btn = document.createElement('a')
      btn.href = `#${id}`
      this.navButtons.push(btn)
      this.nav.appendChild(btn)
      section.id = id;
      counter++;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          --nav-bottom: 256px;
        }
        .navigation.in {
          position: fixed;
          left: 0;
          bottom: var(--nav-bottom);
          z-index: 9;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          flex-wrap: wrap;
        }
        .navigation.in {
          animation: menuIn;
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-timing-function: ease-out;
        }
        .navigation.out {
          animation: menuOut;
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-timing-function: ease-out;
        }
        @keyframes menuOut {
          0% {bottom: var(--nav-bottom);width:40px;}
          50% {bottom: 0;width: 40px;}
          100%{bottom: 0;width: 100vw;}  
        }
        @keyframes menuIn {
          0%{bottom: 0;width: 100vw;}  
          50% {bottom: 0;width: 40px;flex:1;}
          100% {bottom: var(--nav-bottom);}
        }
        @keyframes menuItemOut {
          0% {bottom: var(--nav-bottom)}
          50% {bottom: 0;flex:1;}
          100%{bottom: 0;width: 100vw;flex:1;}  
        }
        @keyframes menuItemIn {
          0%{bottom: 0;width: 100vw;flex:1;}  
          50% {bottom: 0;width: 40px;flex:1;}
          100% {bottom: var(--nav-bottom)}
        }
        a {
          text-decoration: none;
          width: 8px;
          height: 64px;
          padding: 8px;
          background: #FFF4E2;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--grey);
          margin: 4px;
        }
        .navigation.out a {
          width: 128px;
          height: 36px;
          animation: menuItemOut;
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-timing-function: ease-out;
        }
        .navigation a {
          width: 8px;
          height: 64px;
          animation: menuItemIn;
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-timing-function: ease-out;
        }
        a.active {
          background: #fff;
        }
        li {
          list-style: none;
          padding: 0;
          margin: 0;
          display: inline-block;
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
      <div class="navigation in"></div>
      <div class="sections">
        <slot></slot>
      </div>
    `;
  }
}
export default customElements.define('tq-section-list', TqSectionList)
