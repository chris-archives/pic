// Registering ScrollTo plugin from GSAP
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener("DOMContentLoaded", function() {
    // IntersectionObserver for Main section
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

    // IntersectionObserver for Roadmap section's headings
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
        threshold: 0.1
    });

    const roadmapTopics = document.querySelectorAll('#roadmap .svg-container h1');
    roadmapTopics.forEach((el) => roadmapObserver.observe(el));

    // IntersectionObserver for Roadmap section's Map Pins
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
        threshold: 0.1
    });

    const mapPins = document.querySelectorAll('#roadmap .svg-container img');
    mapPins.forEach((el) => mapPinObserver.observe(el));

    // Hover effects for Map pins
    const pinHoverEffects = [
        { pin: '#pin-one', text: '#innovate-text' },
        { pin: '#pin-two', text: '#wireframe-text' },
        { pin: '#pin-three', text: '#design-text' },
        { pin: '#pin-four', text: '#code-text' },
        { pin: '#pin-five', text: '#debug-text' },
        { pin: '#pin-six', text: '#publish-text' },
    ];

    pinHoverEffects.forEach(({ pin, text }) => {
        const pinElement = document.querySelector(pin);
        const textElement = document.querySelector(text);
        if (pinElement && textElement) {
            pinElement.addEventListener("mouseenter", () => {
                textElement.style.opacity = "1";
            });
            pinElement.addEventListener("mouseleave", () => {
                textElement.style.opacity = "0";
            });
        }
    });

    // IntersectionObserver for the Program section
    const programTextObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    const programsSection = document.querySelectorAll('.programs-text');
    programsSection.forEach((el) => programTextObserver.observe(el));
});
