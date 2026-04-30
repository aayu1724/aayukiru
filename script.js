let current = 0;
const screens = document.querySelectorAll(".screen");

/* SHOW SCREEN */
function showScreen(index) {
    if (index < 0 || index >= screens.length) return;

    screens[current].classList.remove("active");
    current = index;
    screens[current].classList.add("active");
}

/* SWIPE NAVIGATION */
let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    // swipe left → next
    if (diff > 50 && current < screens.length - 1) {
        showScreen(current + 1);
    }

    // swipe right → previous
    if (diff < -50 && current > 0) {
        showScreen(current - 1);
    }
});

/* ESCAPING BUTTON 😈 */
const btn = document.querySelector(".reject");

btn.addEventListener("mouseenter", move);
btn.addEventListener("touchstart", move);

function move() {
    btn.style.position = "fixed";
    btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}
