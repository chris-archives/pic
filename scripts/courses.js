// Registering ScrollTo plugin from GSAP
gsap.registerPlugin(ScrollToPlugin)

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

    //Hover effect for Map pins (#innovate-text)
    document.querySelector('#pin-one').addEventListener("mouseenter", () => {
        document.querySelector("#innovate-text").style.opacity = "1";
    });
    document.querySelector('#pin-one').addEventListener("mouseleave", () => {
        document.querySelector("#innovate-text").style.opacity = "0";
    });

    //Hover effect for Map pins (#wireframe-text)
    document.querySelector('#pin-two').addEventListener("mouseenter", () => {
        document.querySelector("#wireframe-text").style.opacity = "1";
    });
    document.querySelector('#pin-two').addEventListener("mouseleave", () => {
        document.querySelector("#wireframe-text").style.opacity = "0";
    });

    //Hover effect for Map pins (#design-text)
    document.querySelector('#pin-three').addEventListener("mouseenter", () => {
        document.querySelector("#design-text").style.opacity = "1";
    });
    document.querySelector('#pin-three').addEventListener("mouseleave", () => {
        document.querySelector("#design-text").style.opacity = "0";
    });

    //Hover effect for Map pins (#code-text)
    document.querySelector('#pin-four').addEventListener("mouseenter", () => {
        document.querySelector("#code-text").style.opacity = "1";
    });
    document.querySelector('#pin-four').addEventListener("mouseleave", () => {
        document.querySelector("#code-text").style.opacity = "0";
    });

    //Hover effect for Map pins (#debug-text)
    document.querySelector('#pin-five').addEventListener("mouseenter", () => {
        document.querySelector("#debug-text").style.opacity = "1";
    });
    document.querySelector('#pin-five').addEventListener("mouseleave", () => {
        document.querySelector("#debug-text").style.opacity = "0";
    });

    //Hover effect for Map pins (#publish-text)
    document.querySelector('#pin-six').addEventListener("mouseenter", () => {
        document.querySelector("#publish-text").style.opacity = "1";
    });
    document.querySelector('#pin-six').addEventListener("mouseleave", () => {
        document.querySelector("#publish-text").style.opacity = "0";
    });
});
