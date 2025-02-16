class AppContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <top-section></top-section>
        <bottom-section></bottom-section>
      `;
  }
}

customElements.define("app-content", AppContent);
