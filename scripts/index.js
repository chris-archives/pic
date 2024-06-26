document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log('Entry:', entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('translateDown');
            } else {
                entry.target.classList.remove('translateDown');
            }
        });
    }, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Adjusted threshold for testing
    });

    // Select the target element(s)
    const topImages = document.querySelectorAll('.top');
    topImages.forEach((el) => observer.observe(el));
});


const secondObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log('Entry:', entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('translateUp');
        } else {
            entry.target.classList.remove('translateUp');
        }
    });
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.3 // Adjusted threshold for testing
});
    const bottomImages = document.querySelectorAll('.bottom');
    bottomImages.forEach((el) => secondObserver.observe(el));