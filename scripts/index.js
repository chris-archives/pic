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
                console.log('Entry:', entry); // Add this line for debugging
                if (entry.isIntersecting) {
                    entry.target.classList.add('translateUp1');
                }
            });
        }, {
            root: null,
            threshold: 0.1
        });
    
        const skillsAreaText = document.querySelectorAll('.skills-text');
        skillsAreaText.forEach((el) => thirdObserver.observe(el));
});
