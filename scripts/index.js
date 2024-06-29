// Registering ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // IntersectionObserver for the topImages
    const topObserver = new IntersectionObserver((entries) => {
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
    topImages.forEach((el) => topObserver.observe(el));

    // IntersectionObserver for the bottomImages
    const bottomObserver = new IntersectionObserver((entries) => {
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
    bottomImages.forEach((el) => bottomObserver.observe(el));

    // IntersectionObserver for the skillsAreaText
    const skillsObserver = new IntersectionObserver((entries) => {
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

    const skillsSections = document.querySelectorAll('#skills-section');
    skillsSections.forEach((el) => skillsObserver.observe(el));

    // IntersectionObserver for Skill Tree
    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('lazy-load');
            } else {
                entry.target.classList.remove('lazy-load');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    });

    const banners = document.querySelectorAll('.banner');
    banners.forEach((el) => bannerObserver.observe(el));

    // IntersectionObserver for Root Image
    const rootImgObserver = new IntersectionObserver((entries) => {
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

    const rootImg = document.querySelectorAll('.roots-img');
    rootImg.forEach((el) => rootImgObserver.observe(el));

    // GSAP ScrollTrigger animation for Description section's .fade-trigger
    gsap.to('.fade-trigger', {
        scrollTrigger: {
            start: 'top 70%',
            trigger: '.fade-trigger',
            scrub: 1,
            end: '+=300%',
            pin: true,
        }
    });

    // GSAP ScrollTrigger to trigger fade out effect

});
