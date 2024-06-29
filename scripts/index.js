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
            trigger: '.fade-trigger',
            start: 'top 70%',
            end: '+=300%',
            scrub: 1,
            pin: true,
        }
    });

    // GSAP Animation for fading out .fade-out-trigger
    const fadeOutAnimation = gsap.to('.fade-out-trigger', {
        opacity: 2,
        ease: 'power1.in',
        duration: 2,
    });

    // GSAP ScrollTrigger to trigger fading out .fade-out-trigger
    ScrollTrigger.create({
        trigger: '.fade-out-trigger',
        start: 'bottom bottom',
        scrub: 1,
        animation: fadeOutAnimation,
    });

    // GSAP Animation for general buttons in #window-close
    const buttonsAnimation = gsap.to('#window-close div', {
        opacity: 5,
        scale: 1.2,
        borderRadius: '50px',
        visibility: 'visible',
    });

    ScrollTrigger.create({
        trigger: '#window-close div',
        start: 'top 100%',
        scrub: 1,
        animation: buttonsAnimation,
    });

    // GSAP Animation for HTML button
    const htmlButtonAnimation = gsap.to('#window-close #html', {
        duration: 1,
        background: 'linear-gradient(to right, #FFFF00 20%, #FF69B4 70%)',
        boxShadow: '15px 25px 100px 5px rgb(191, 255, 0)',
        x: '-=15vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #html',
        scrub: 1,
        animation: htmlButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                htmlButtonAnimation.play();
            } else {
                htmlButtonAnimation.reverse();
            }
        },
    });

    // GSAP Animation for CSS button
    const cssButtonAnimation = gsap.to('#window-close #css', {
        duration: 1,
        background: 'linear-gradient(to right, #09de25, #0fd5f4 70%)',
        boxShadow: '15px 25px 100px 5px rgb(0, 238, 255)',
        x: '+= 15vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #css',
        scrub: 1,
        animation: cssButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                cssButtonAnimation.play();
            } else {
                cssButtonAnimation.reverse();
            }
        },
    });

    // GSAP Animation for Javascript button
    const javascriptButtonAnimation = gsap.to('#window-close #javascript', {
        duration: 1,
        background: 'linear-gradient(to right, #FFA500, #fc3410)',
        boxShadow: '18px 20px 100px 5px rgb(252, 169, 3)',
        y: '-=15vh',
        x: '-=7.5vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #javascript',
        scrub: 1,
        animation: javascriptButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                javascriptButtonAnimation.play();
            } else {
                javascriptButtonAnimation.reverse();
            }
        },
    });

    // GSAP Animation for business button
    const businessButtonAnimation = gsap.to('#window-close #business', {
        duration: 1,
        background: 'linear-gradient(to right, #d5ec63, #0dfc05)',
        boxShadow: '15px 5px 100px 5px rgb(26, 255, 0)',
        y: '-=15vh',
        x: '+=7.5vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #business',
        scrub: 1,
        animation: businessButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                businessButtonAnimation.play();
            } else {
                businessButtonAnimation.reverse();
            }
        },
    });

    // GSAP Animation for Tech-Innovation button
    const techinnovationButtonAnimation = gsap.to('#window-close #techinnovation', {
        duration: 1,
        background: 'linear-gradient(to right, #0f2afa 20%, #1ff1f8)',
        boxShadow: '15px 20px 100px 5px rgb(3, 86, 252)',
        y: '+=15vh',
        x: '+=7.5vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #techinnovation',
        scrub: 1,
        animation: techinnovationButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                techinnovationButtonAnimation.play();
            } else {
                techinnovationButtonAnimation.reverse();
            }
        },
    });

    // GSAP Animation for UI/UX button
    const uiuxButtonAnimation = gsap.to('#window-close #uiux', {
        duration: 1,
        background: 'linear-gradient(to right, #f297c5, #950bea)',
        boxShadow: '15px 15px 100px 5px rgb(245, 126, 219)',
        y: '+=15vh',
        x: '-=7.5vw',
    });

    ScrollTrigger.create({
        trigger: '#window-close #uiux',
        scrub: 1,
        animation: uiuxButtonAnimation,
        onUpdate: self => {
            if (self.direction === 1) {
                uiuxButtonAnimation.play();
            } else {
                uiuxButtonAnimation.reverse();
            }
        },
    });
});
