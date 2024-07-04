document.addEventListener("DOMContentLoaded", function() {
    //IntersectionObserver for Main
    const mainPageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
            });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    const mainPage = document.querySelectorAll('#main');
    mainPage.forEach((el) => mainPageObserver.observe(el));
});