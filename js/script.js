let toggle = document.getElementById("toggle");
let toggle_ball = document.querySelector(".toggle_ball");
let body_page = document.querySelector('body');
let card = document.querySelectorAll(".cards__item");
let textTheme = document.querySelectorAll(".dark-theme-text");

const toWhite = function () {
    toggle_ball.classList.remove('toggle__ball_dark');
    toggle_ball.classList.add('toggle__ball_white');
    toggle.classList.add('white-theme-toggle');
    toggle.classList.remove('black-theme-toggle');
    body_page.classList.add('white-theme-bg');
    body_page.classList.remove('black-theme-bg');

    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('white-theme-card-bg');
        card[i].classList.remove('dark-theme-card-bg');
    }
    for (let i = 0; i < textTheme.length; i++) {
        textTheme[i].classList.add('white-theme-text');
        textTheme[i].classList.remove('dark-theme-text');
    }
}

const toDark = function () {
    toggle.classList.remove('white-theme-toggle')
    toggle.classList.add('dark-theme-toggle')
    toggle_ball.classList.remove('toggle__ball_white');
    toggle_ball.classList.add('toggle__ball_dark');
    body_page.classList.add('black-theme-bg');
    body_page.classList.remove('white-theme-bg');
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('dark-theme-card-bg');
        card[i].classList.remove('white-theme-card-bg');
    }
    for (let i = 0; i < textTheme.length; i++) {
        textTheme[i].classList.add('dark-theme-text');
        textTheme[i].classList.remove('white-theme-text');
    }
}

function checkColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toDark()
        // alert("it's dark mode")
    } else {
        // alert("it's light mode")
        toWhite()
    }

    toggle.addEventListener("click", function () {
        if (toggle_ball.classList.contains('toggle__ball_dark')) {
            // remove black, Add white 
            toWhite()


        } else {
            // remove white, Add black
            toDark()

        }
    });

}





checkColorScheme()