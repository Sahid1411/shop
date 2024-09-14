
        let slides = document.querySelectorAll('.slide');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Initial display
        showSlide(currentIndex);

        // Change slide every 2 seconds
        setInterval(nextSlide, 2000);
  