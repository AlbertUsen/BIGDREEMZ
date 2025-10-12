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


// LOADING PAGE
// $(window).on("load",function(){
//     $(".loadingPage").fadeOut("slow");
// })

// Real loading page
window.addEventListener("load", () => {
    const loader =  document.querySelector(".loadingPage");

    loader.classList.add("loadingPage--hidden");

    document.querySelector("loadingpage").addEventListener("transitionend", ()=> {
        document.body.removeChild(document.querySelector(".loadingPage"));
    })
})

// GLOWING ICONS
document.addEventListener('DOMContentLoaded', function(){
    const icon = document.getElementById('myIcon');

    icon.addEventListener('click', function(){
        if(this.classList.contains('icon-clicked')){
            this.classList.remove('icon-clicked');
        } else {
            this.classList.add('icon-clicked');
        }
    })
}) 