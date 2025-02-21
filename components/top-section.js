class TopSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      .slide{display: none;}
      .active-slide{display: block;}
    </style>
    <main class="container mx-auto px-4 py-8">
        <!-- Carousel -->
        <div class="relative overflow-hidden rounded-lg shadow-xl">
            <div class="slider-container">
                <!-- Slide 1 -->
                <div class="slide active-slide animate-fadeIn">
                    <img src="img/variant=19,_hover=false.png" 
                         class="w-full h-96 object-cover" 
                         alt="Gambar BUMN 1">
                         
                         <div class="absolute bottom-6 left-6 bg-teal-600 bg-opacity-75 text-white p-4 rounded-lg">
                          <h2 class="text-2xl font-bold">
                           Penciptaan Nilai
                          </h2>
                          <p>
                           Transformasi BUMN Membangun Ekosistem Bisnis Yang Inklusif dan Berkelanjutan
                          </p>
                         </div>
                </div>
                
                <!-- Slide 2 -->
                <div class="slide">
                    <img src="img/variant=20,_hover=false.png" 
                         class="w-full h-96 object-cover" 
                         alt="Gambar BUMN 2">
                </div>
            </div>

            <!-- Navigasi Panah -->
            <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50" 
                    onclick="plusSlides(-1)">
                ❮
            </button>
            <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50" 
                    onclick="plusSlides(1)">
                ❯
            </button>
        </div>
    </main>

        <script>
        let slideIndex = 0;
        showSlides();
        
        function showSlides() {
            const slides = document.getElementsByClassName("slide");
            
            // Sembunyikan semua slide
            Array.from(slides).forEach(slide => {
                slide.classList.remove("active-slide");
                slide.classList.add("hidden");
            });
            
            // Tampilkan slide aktif
            slideIndex++;
            if(slideIndex > slides.length) slideIndex = 1;
            
            slides[slideIndex-1].classList.add("active-slide");
            slides[slideIndex-1].classList.remove("hidden");
            
            setTimeout(showSlides, 5000); // Ganti slide setiap 5 detik
        }
        
        function plusSlides(n) {
            slideIndex += n;
            const slides = document.getElementsByClassName("slide");
            
            if(slideIndex > slides.length) slideIndex = 1;
            if(slideIndex < 1) slideIndex = slides.length;
            
            Array.from(slides).forEach(slide => {
                slide.classList.remove("active-slide");
                slide.classList.add("hidden");
            });
            
            slides[slideIndex-1].classList.add("active-slide");
            slides[slideIndex-1].classList.remove("hidden");
        }            
        </script>
        `;
  }
}

customElements.define("top-section", TopSection);
