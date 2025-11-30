/****************************
 SMOOTH SCROLLING – NAV LINKS
*****************************/
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/******************************************
 NAVBAR SHADOW ON SCROLL (modern effect)
******************************************/
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.6)";
        nav.style.background = "rgba(0,0,0,0.8)";
    } else {
        nav.style.boxShadow = "none";
        nav.style.background = "rgba(0,0,0,0.6)";
    }
});


/******************************************
 FADE-IN ANIMATION WHEN SECTIONS COME INTO VIEW
******************************************/
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});


/******************************************
 MOBILE NAV (OPTIONAL – only if you add a menu icon later)
******************************************/
// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
// });
