// Dark/light mode toggle + click event
let darkmode = document.querySelector('.LightDarkBtn');

darkmode.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');

    // Card darkmode togglen
    document.querySelectorAll(".blog").forEach(card => {
        card.classList.toggle("darkmode");
    });
    document.querySelectorAll(".museum").forEach(card => {
        card.classList.toggle("darkmode");
    });
    document.querySelectorAll("footer").forEach(card => {
        card.classList.toggle("darkmode");
    });

    document.querySelectorAll(".header-container").forEach(card => {
        card.classList.toggle("darkmode");
    });

    darkmode.classList.toggle('LightDarkBtn');

    document.getElementById("LightDarkText").innerHTML =
        document.body.classList.contains('darkmode') ? "Light Mode" : "Dark Mode";
});

// English HTML toggle + klik event
let englishPageTrigger = document.querySelector('.englishPage')

englishPageTrigger.addEventListener('click', function() {
    window.location.href = "./index2.html";
})

// Dutch HTML toggle + klik event
let dutchPageTrigger = document.querySelector('.dutchPage')

dutchPageTrigger.addEventListener('click', function() {
    window.location.href = "./index.html";
})


const overlay = document.getElementById('light-overlay');

// Touchscreen detectie
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    document.addEventListener('mousemove', (event) => {
        if (!document.body.classList.contains('darkmode')) {
            overlay.style.display = 'none';
            return;
        }

        overlay.style.display = 'block';

        const x = event.clientX;
        const y = event.clientY;

        overlay.style.background = `radial-gradient(circle 75px at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 80%)`;
    });
} else {
    overlay.style.display = 'none';
}


    // (function () {
    //     const btn = document.querySelector('.menu-toggle');
    //     const headerContainer = document.querySelector('.header-container');
    //     if (!btn || !headerContainer) return;
    //     btn.addEventListener('click', function () {
    //         const expanded = btn.getAttribute('aria-expanded') === 'true';
    //         btn.setAttribute('aria-expanded', String(!expanded));
    //         headerContainer.classList.toggle('open');
    //     });

    //     window.addEventListener('resize', function () {
    //         if (window.innerWidth > 768) {
    //             headerContainer.classList.remove('open');
    //             btn.setAttribute('aria-expanded', 'false');
    //         }
    //     });
    // })();