class BottomNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
          <p>&copy; 2025 BUMN. All rights reserved.</p>
        </footer>
      `;
    }
  }
  
  customElements.define('bottom-nav', BottomNav);
  