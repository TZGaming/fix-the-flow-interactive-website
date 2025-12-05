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