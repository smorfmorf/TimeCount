const menuButton = document.querySelector(".header__menu-button");
const menu = document.querySelector(".header__menu");

let isOpen = false;

menuButton.addEventListener("click", () => {
    if (!isOpen) {
        menu.classList.add("header__menu_active");
        animateMenuOpen();
    } else {
        menu.classList.remove("header__menu_active");
        animateMenuClose();
    }
});

function animateMenuOpen() {
    const duration = 500; // Длительность анимации (в миллисекундах)
    let start = 0;

    function step(timeStamp) {
        start ||= timeStamp;

        const progress = (timeStamp - start) / duration;
        menu.style.display = "block";
        menu.style.opacity = progress;
        menu.style.transform = `translateY(${20 * (1 - progress)}px)`;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            isOpen = true;
        }
    }

    requestAnimationFrame(step);
}

function animateMenuClose() {
    const duration = 500; // Длительность анимации (в миллисекундах)
    let start = 0;

    function step(timeStamp) {
        start ||= timeStamp;

        const progress = (timeStamp - start) / duration;
        menu.style.opacity = 1 - progress;
        menu.style.transform = `translateY(${20 * progress}px)`;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            isOpen = false;
            menu.style.display = "none";
        }
    }

    requestAnimationFrame(step);
}
