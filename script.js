// বাংলা ওয়েবসাইটের জন্য JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(46, 125, 50, 0.95)';
        } else {
            header.style.background = '#2E7D32';
        }
    });

    // বর্তমান বছর ফুটারে যোগ করুন
    const currentYear = new Date().getFullYear();
    const yearElement = document.createElement('p');
    yearElement.textContent = `© ${currentYear} আদিবাসী উন্নয়ন। সর্বস্বত্ব সংরক্ষিত।`;
    yearElement.style.marginTop = '2rem';
    yearElement.style.opacity = '0.7';
    
    const footer = document.querySelector('footer .section');
    if (footer) {
        footer.appendChild(yearElement);
    }

    // Gallery Image Click Effect (Optional)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('zoom');
        });
    });

    // Mobile Menu Functionality
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.createElement('button');
        menuToggle.innerHTML = '☰';
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;

        document.querySelector('.nav-container').appendChild(menuToggle);

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Check screen size and adjust menu
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                navLinks.classList.remove('active');
            } else {
                menuToggle.style.display = 'none';
                navLinks.classList.remove('active');
            }
        }

        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }

    initMobileMenu();

    console.log('আদিবাসী উন্নয়ন ওয়েবসাইট সফলভাবে লোড হয়েছে!');
});

// Additional utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}
