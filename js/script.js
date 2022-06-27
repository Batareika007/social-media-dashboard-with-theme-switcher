let toggle = document.getElementById("toggle");
let toggle_ball = document.querySelector(".toggle_ball");


toggle.addEventListener("click", function () {
    if (toggle_ball.classList.contains('toggle__ball_dark')) {
        // remove black, add white 
        toggle_ball.classList.remove('toggle__ball_dark');
        toggle_ball.classList.add('toggle__ball_white');
        toggle.classList.add('white-theme-toggle')
        toggle.classList.remove('black-theme-toggle')

    } else {
        // remove white, add black

        toggle.classList.remove('white-theme-toggle')
        toggle.classList.add('dark-theme-toggle')
        toggle_ball.classList.remove('toggle__ball_white');
        toggle_ball.classList.add('toggle__ball_dark');
    }
});