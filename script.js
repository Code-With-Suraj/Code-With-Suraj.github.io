// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Navbar Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle navbar
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        // Animate navbar items
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking a nav link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');

                navLinksItems.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Highlight Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
            if (navItem.getAttribute('href') === `#${current}`) {
                navItem.classList.add('active');
            }
        });
    });

    // Typewriter Effect
    const typewriterText = document.querySelector('.typewriter-text');
    const professions = ['MIS Executive', 'Data Analyst', 'Excel Expert', 'Power BI Developer', 'Python Developer'];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentProfession = professions[professionIndex];

        if (isDeleting) {
            typewriterText.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterText.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentProfession.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typingSpeed = 500; // Pause before starting new word
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start the typewriter effect
    setTimeout(typeWriter, 1000);

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate on Scroll Initialize
    const animateElements = () => {
        const elements = document.querySelectorAll('[data-aos]');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.85) {
                element.classList.add('aos-animate');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', animateElements);
    // Run once on load to check for elements in view
    animateElements();

    // Form Validation and Submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // If validation passes, submit form (you would normally send data to server here)
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Add Animation to Skill Bars
    const skillLevels = document.querySelectorAll('.skill-level');
    const animateSkills = () => {
        skillLevels.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillPosition < windowHeight * 0.9) {
                skill.style.transform = 'scaleX(1)';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    // Run once on load
    animateSkills();

    // Project Cards Hover Effect 
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const projectBtn = card.querySelector('.project-btn');
            projectBtn.style.backgroundColor = 'var(--primary-color)';
            projectBtn.style.color = 'white';
        });

        card.addEventListener('mouseleave', () => {
            const projectBtn = card.querySelector('.project-btn');
            projectBtn.style.backgroundColor = 'transparent';
            projectBtn.style.color = 'var(--text-primary)';
        });
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, /* Show 1 slide at a time */
        spaceBetween: 20, /* Spacing between slides */
        loop: true, /* Infinite loop */
        autoplay: {
            delay: 3000, /* Auto-slide every 3 seconds */
            disableOnInteraction: false, /* Continue autoplay after user interaction */
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 }, /* Show 2 slides on tablets */
            1024: { slidesPerView: 3 }, /* Show 3 slides on large screens */
        }
    });
});
