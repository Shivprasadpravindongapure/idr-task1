/* 
  Institute of Digital Risk (IDR)
  Main JavaScript File
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Sticky Navbar & Scroll Events
    const header = document.getElementById('header');
    
    // Add box shadow when scrolled past top
    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Run once on load just in case page is loaded scrolled down
    handleScroll();

    // Smooth Scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the browser handle standard non-hash links normally
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Prevent default anchor click behavior
                e.preventDefault();
                
                // Close mobile menu if it's open upon clicking a link
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
                
                // Calculate scroll position (subtract header height so it doesn't overlap text)
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                // Scroll smoothly
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

});
