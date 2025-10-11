document.addEventListener('DOMContentLoaded', () =>{
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prevB');
    const nextBtn = document.querySelector('.nextB');
    const indicator = document.querySelector('slideIndicator');

    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function updateSlider(){
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[currentSlideIndex].classList.add('active');
        indicator.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    }

    function nextSlide(){
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        updateSlider();
    }
    function prevSlide(){
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        updateSlider()
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    updateSlider();
})