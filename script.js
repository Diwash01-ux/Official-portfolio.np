/* =====================================
   MOBILE MENU
===================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* =====================================
   CLOSE MOBILE MENU
===================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


/* =====================================
   CURRENT YEAR
===================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .mini-card, .skill-card, .project-card, .timeline-item, .contact-box"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =====================================
   PROJECT CARD TILT
===================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================
   PARTICLES
===================================== */

async function startParticles() {

    if (typeof tsParticles === "undefined") {
        return;
    }

    await tsParticles.load({

        id: "particles-js",

        options: {

            background: {
                color: {
                    value: "transparent"
                }
            },

            particles: {

                number: {
                    value: 45
                },

                color: {
                    value: [
                        "#8b5cf6",
                        "#22d3ee",
                        "#ffffff"
                    ]
                },

                opacity: {
                    value: 0.25
                },

                size: {
                    value: {
                        min: 1,
                        max: 2
                    }
                },

                move: {
                    enable: true,
                    speed: 0.35
                }

            },

            interactivity: {

                events: {

                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }

                },

                modes: {

                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }

                }

            },

            detectRetina: true

        }

    });

}

startParticles();


/* =====================================
   SMOOTH PARALLAX
===================================== */

window.addEventListener("scroll", () => {

    const visual = document.querySelector(".hero-visual");

    if (!visual) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        visual.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});
