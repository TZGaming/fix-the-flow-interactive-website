// Dark mode toggle + klik event
let darkmode = document.querySelector('.darkmodeBtn')

darkmode.addEventListener('click', function() {
    document.body.classList.add('darkmode');
})

// Light mode toggle + klik event
let lightmode = document.querySelector('.lightmodeBtn')

lightmode.addEventListener('click', function() {
    document.body.classList.remove('darkmode');
})

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