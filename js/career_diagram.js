const slides = Array.from(
    document.querySelectorAll("#career-diagram img")
).slice(1);

let index = 0;

function preload(src) {
    return new Promise((r) => {
        const image = new Image();

        image.onload = r;
        image.src = src;
    });
}

async function showNextSlide() {
    const nextIndex = (index + 1) % slides.length;

    await preload(slides[nextIndex].src);

    if (slides[index].classList.contains("opacity-100")) {
        slides[index].classList.remove("opacity-100");
    }

    slides[index].classList.add("opacity-20");
    slides[nextIndex].classList.remove("opacity-20");

    index = nextIndex;
}

setInterval(showNextSlide, 7_000);