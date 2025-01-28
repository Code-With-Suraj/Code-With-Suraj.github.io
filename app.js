const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

let currentIndex = 0;

// Typed.js initialization
new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 2000
});

// GSAP ScrollTrigger initialization
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function updateSlider() {
    const slideWidth = sliderContainer.firstElementChild.offsetWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < sliderContainer.children.length - 1 ? currentIndex + 1 : currentIndex;
    updateSlider();
});

window.addEventListener('resize', updateSlider);
