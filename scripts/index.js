document.addEventListener("DOMContentLoaded", function() {
    // IntersectionObserver for the topImages
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translateDown');
            } else {
                entry.target.classList.remove('translateDown');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    const topImages = document.querySelectorAll('.top');
    topImages.forEach((el) => observer.observe(el));

    // IntersectionObserver for the bottomImages
    const secondObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('translateUp');
            } else {
                entry.target.classList.remove('translateUp');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    const bottomImages = document.querySelectorAll('.bottom');
    bottomImages.forEach((el) => secondObserver.observe(el));

    // IntersectionObserver for the skillsAreaText
    const thirdObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('.skills-text');
                elements.forEach((el, index) => {
                    el.style.transitionDelay = `${index * 0.2}s`;
                    el.classList.add('animate');
                });
            } else {
                const elements = entry.target.querySelectorAll('.skills-text');
                elements.forEach((el) => {
                    el.classList.remove('animate');
                    el.style.transitionDelay = '0s';
                });
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    const skillsSection = document.querySelectorAll('#skills-section');
    skillsSection.forEach((el) => thirdObserver.observe(el));
});
