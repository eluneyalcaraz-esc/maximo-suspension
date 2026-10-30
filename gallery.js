const galleries = document.querySelectorAll(".gallery-carousel");

galleries.forEach((carousel) => {
    const gallery = carousel.querySelector(".service-gallery");
    const buttons = carousel.querySelectorAll(".gallery-arrow");

    const updateButtons = () => {
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        buttons[0].disabled = gallery.scrollLeft <= 2;
        buttons[1].disabled = maxScroll <= 2 || gallery.scrollLeft >= maxScroll - 2;
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const image = gallery.querySelector("img");
            const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
            const step = image.getBoundingClientRect().width + gap;
            gallery.scrollBy({
                left: step * Number(button.dataset.galleryDirection),
                behavior: "smooth",
            });
        });
    });

    gallery.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
});
