    //IntersectionObserver for the topImages
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
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    const topImages = document.querySelectorAll('.top');
    topImages.forEach((el) => observer.observe(el));

    //IntersectionObserver for the bottomImages
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
    root: null,
    rootMargin: '0px',
    threshold: 0.3
});
    const bottomImages = document.querySelectorAll('.bottom');
    bottomImages.forEach((el) => secondObserver.observe(el));
