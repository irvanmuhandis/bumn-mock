class BottomSection extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          ini bottom section
        `;
    }
  }
  
  customElements.define("bottom-section", BottomSection);
  