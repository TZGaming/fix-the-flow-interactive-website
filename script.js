// Dark/light mode toggle + click event
let darkmode = document.querySelector('.DarkBtn');

darkmode.addEventListener('click', function() {
    document.body.classList.toggle('darkmode');

    // Elementen op de website veranderen van style
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

    const icon = document.getElementById("LightDarkIcon");

    icon.addEventListener("click", () => {
        if (LightDarkIcon.classList.contains('DarkBtn')) {
            LightDarkIcon.classList.replace('LightBtn', 'DarkBtn');
        } else {
            LightDarkIcon.classList.replace('DarkBtn', 'LightBtn');
        }

        if (document.body.classList.contains('darkmode')) {
            icon.src = "./assets/svg/moon.svg";
            icon.alt = "Donkere modus";
        } else {
            icon.src = "./assets/svg/sun.svg";
            icon.alt = "Lichte modus";
        }

        // --- Animation trigger ---
        icon.classList.remove("rotate-animation");
        void icon.offsetWidth;
        icon.classList.add("rotate-animation");
    });
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

// Hamburger menu toggle
let hamburger = document.querySelector('.menu-toggle');
let headerLinks = document.querySelector('.header-links');
let logoContainer = document.querySelector('.logo-container');

hamburger.addEventListener('click', function () {
    if (headerLinks.classList.contains('hidden')) {
        headerLinks.classList.replace('hidden', 'header-links');
    } else {
        headerLinks.classList.replace('header-links', 'hidden');
    }

    if (logoContainer.classList.contains('hidden')) {
        logoContainer.classList.replace('hidden', 'logo-container');
    } else {
        logoContainer.classList.replace('logo-container', 'hidden');
    }
});