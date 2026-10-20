/****************************
 SMOOTH SCROLLING – NAV LINKS
*****************************/
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
                block: "start"
            });
        }

        // Close the mobile navigation after selecting a section.
        if (navLinks && menuBtn) {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        }
    });
});

/******************************************
 MOBILE NAVIGATION TOGGLE
******************************************/
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu when returning to a wider layout.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

/******************************************
 NAVBAR SHADOW ON SCROLL
******************************************/
window.addEventListener("scroll", () => {
    const nav = document.querySelector("header");
    if (!nav) return;

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
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
} else {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade-in");
    });
}
