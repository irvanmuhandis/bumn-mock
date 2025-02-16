class TopSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold">Welcome to BUMN</h2>
          <p class="text-gray-600 mt-2">
            This is the main content area where users will see the app’s details.
          </p>
        </section>
        `;
  }
}

customElements.define("top-section", TopSection);
