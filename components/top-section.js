class TopSection extends HTMLElement {
    constructor() {
        super();
        this.slideIndex = 0;
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
              .slide { display: none; }
              .active-slide { display: block; }
            </style>
            <main class="container mx-auto px-4 py-8">
                <div class="relative overflow-hidden rounded-lg shadow-xl">
                    <div class="slider-container">
                        <div class="slide active-slide animate-fadeIn">
                            <img src="img/variant=19,_hover=false.png" class="w-full h-96 object-cover" alt="Gambar BUMN 1">
                            <div class="absolute bottom-6 left-6 bg-teal-600 bg-opacity-75 text-white p-4 rounded-lg">
                                <h2 class="text-2xl font-bold">Penciptaan Nilai</h2>
                                <p>Transformasi BUMN Membangun Ekosistem Bisnis Yang Inklusif dan Berkelanjutan</p>
                            </div>
                        </div>
                        <div class="slide">
                            <img src="img/variant=20,_hover=false.png" class="w-full h-96 object-cover" alt="Gambar BUMN 2">
                        </div>
                    </div>

                    <button id="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50">❮</button>
                    <button id="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50">❯</button>
                </div>
            </main>
        `;

        // Attach event listeners
        this.querySelector("#prevSlide").addEventListener("click", () => this.plusSlides(-1));
        this.querySelector("#nextSlide").addEventListener("click", () => this.plusSlides(1));

        this.showSlides();
    }

    showSlides() {
        const slides = this.getElementsByClassName("slide");

        if (slides.length === 0) return;

        Array.from(slides).forEach(slide => {
            slide.classList.remove("active-slide");
            slide.classList.add("hidden");
        });

        this.slideIndex++;
        if (this.slideIndex > slides.length) this.slideIndex = 1;

        slides[this.slideIndex - 1].classList.add("active-slide");
        slides[this.slideIndex - 1].classList.remove("hidden");

        setTimeout(() => this.showSlides(), 5000);
    }

    plusSlides(n) {
        const slides = this.getElementsByClassName("slide");

        if (slides.length === 0) return;

        this.slideIndex += n;
        if (this.slideIndex > slides.length) this.slideIndex = 1;
        if (this.slideIndex < 1) this.slideIndex = slides.length;

        Array.from(slides).forEach(slide => {
            slide.classList.remove("active-slide");
            slide.classList.add("hidden");
        });

        slides[this.slideIndex - 1].classList.add("active-slide");
        slides[this.slideIndex - 1].classList.remove("hidden");
    }
}

customElements.define("top-section", TopSection);
