// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            header.classList.remove('header-scroll');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
            header.classList.add('header-scroll');
        }

        lastScroll = currentScroll;
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');

            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupHeaderScroll();
    setupSmoothScrolling();

    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-badge, .hero h1, .hero-subtitle, .hero-buttons, .hero-stats');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});