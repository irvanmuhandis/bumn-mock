class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="bg-blue-600 text-white p-4 shadow-md">
          <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">BUMN</h1>
            halo kawan
            <ul class="flex space-x-4">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">About</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
      `;
  }
}

customElements.define("nav-bar", NavBar);
