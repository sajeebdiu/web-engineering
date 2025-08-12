document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('#menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                document.getElementById('menu').classList.add('hidden');
            }
        });
    });

    // Toggle menu
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Toggle search overlay
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('hidden');
    });
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.add('hidden');
    });

    // Animation on scroll up
    let lastScrollTop = 0;
    const heroElements = document.querySelectorAll('.animate-on-load');
    
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll < lastScrollTop && currentScroll < 200) {
            heroElements.forEach((el, index) => {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
            });
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Trigger animation on page load
    heroElements.forEach((el, index) => {
        el.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s forwards`;
    });
});