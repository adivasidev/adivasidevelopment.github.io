// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
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

    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.createElement('p');
    yearElement.textContent = `© ${currentYear} Adivasi Development. All rights reserved.`;
    yearElement.style.marginTop = '2rem';
    yearElement.style.opacity = '0.7';
    
    const footer = document.querySelector('footer .section');
    if (footer) {
        footer.appendChild(yearElement);
    }

    console.log('Adivasi Development Website loaded successfully!');
});
