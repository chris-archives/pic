document.addEventListener("DOMContentLoaded", function() {

    const hamburgerMenu = document.querySelector('#hamburger');
    const sideBar = document.querySelector('.responsive-sidebar');

    hamburgerMenu.addEventListener('click', () => {
        sideBar.classList.toggle('responsive-sidebar-toggle');
        hamburgerMenu.classList.toggle('hamburger-animation');
    });


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

    const mainPage = document.querySelectorAll('#main-section');
    mainPage.forEach((el) => mainPageObserver.observe(el));

    //IntersectionObserver for Roles text
    const rolesTextObserver = new IntersectionObserver((entries) => {
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

    const rolesText = document.querySelectorAll('#animation-div');
    rolesText.forEach((el) => rolesTextObserver.observe(el));

      // IntersectionObserver for the Role Cards
        const roleCardsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elements = entry.target.querySelectorAll('.cards');
                    elements.forEach((el, index) => {
                        el.style.transitionDelay = `${index * 0.2}s`;
                        el.classList.add('animate');
                    });
                } else {
                    const elements = entry.target.querySelectorAll('.cards');
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

    const roleCards = document.querySelectorAll('#cards-container');
    roleCards.forEach((el) => roleCardsObserver.observe(el));

    const teamCardsObserver = new IntersectionObserver((entries) => {
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
    
    const teamCards = document.querySelectorAll('#team-section .cards2');
    teamCards.forEach((el) => teamCardsObserver.observe(el));
});
