const sections = document.querySelectorAll(".animation-scroll-fade-in");

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
