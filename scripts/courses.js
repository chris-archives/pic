document.addEventListener("DOMContentLoaded", function() {
    //IntersectionObserver for Main section
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

    //IntersectionObserver for Roadmap section's headings
    const roadmapObserver = new IntersectionObserver((entries) => {
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
        threshold: 0.1,
    });

    const roadmapTopics = document.querySelectorAll('#roadmap .svg-container h1');
    roadmapTopics.forEach((el) => roadmapObserver.observe(el));

        //IntersectionObserver for Roadmap section's Map Pins
    const mapPinObserver = new IntersectionObserver((entries) => {
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
        threshold: 0.1,
    });

    const mapPins = document.querySelectorAll('#roadmap .svg-container img');
    mapPins.forEach((el) => mapPinObserver.observe(el));
});
