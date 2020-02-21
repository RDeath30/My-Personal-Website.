var moreon = 0;

function Home_Over() {
    document.getElementById('home-link').style.color = "#1C1C1C";
    document.getElementById('home').style.backgroundColor = "white";

}

function Contact_Over() {

    document.getElementById('contact-link').style.color = "#1C1C1C";
    document.getElementById('contact').style.backgroundColor = "white";

}

function More_Over() {
    var obj = document.getElementById('more');
    obj.setAttribute('style', 'background-color:white;color:#1C1C1C');
}

var isGameClick = 0;
function All_Out() {

    if (moreon == 0) {
        var obj2 = document.getElementById('more');
        obj2.setAttribute('style', 'background-color:none;color:white');
    }

    document.getElementById('contact-link').style.color = "white";
    document.getElementById('contact').style.backgroundColor = "";
    document.getElementById('home-link').style.color = "white";
    document.getElementById('home').style.backgroundColor = "";

    if (isGameClick == 0) {
        document.getElementById('games').style.color = "black";
        document.getElementById('games').style.fontWeight = "";
        document.getElementById('games').style.backgroundColor = "";
    }

    document.getElementById('SNAKE-text').style.color = "black";
    document.getElementById('SNAKE').style.backgroundColor = "";
}

function Game_Over() {
    document.getElementById('games').style.color = "white";
    document.getElementById('games').style.fontWeight = "bold";
    document.getElementById('games').style.backgroundColor = "#53b6d0";
}

function Snake_Over()
{
    document.getElementById('SNAKE-text').style.color = "white";
    document.getElementById('SNAKE').style.backgroundColor = "#53b6d0";
}

function Snake_Click()
{
    location.href = './games-list/snake.html';
}

function Game_Click() {
    if (isGameClick == 0) {
        document.getElementsByClassName('games-list')[0].style.display = "block";

        document.getElementById('games').style.color = "white";
        document.getElementById('games').style.fontWeight = "bold";
        document.getElementById('games').style.backgroundColor = "#53b6d0";

        isGameClick = 1;
    }
    else if (isGameClick == 1) {
        document.getElementsByClassName('games-list')[0].style.display = "none";

        isGameClick = 0;
    }
}

function More_Click() {
    if (moreon == 0) {
        document.getElementById('more-taskbar').style.display = "block";
        document.getElementById('more').style.backgroundColor = "white";
        document.getElementById('more').style.color = "#1C1C1C";

        moreon = 1;
    }
    else if (moreon == 1) {
        document.getElementById('more-taskbar').style.display = "none";
        document.getElementById('more').style.backgroundColor = "";
        document.getElementById('more').style.color = "white";

        moreon = 0;
    }
}

function come_here_over() {

    var obj = document.getElementById('come-here');
    obj.style.color = "black";
    var obj1 = document.getElementById('border-come-here');
    obj1.style.backgroundColor = "orange";
    var obj2 = document.getElementById('cursor-png');
    obj2.style.backgroundImage = "url('../my-image/cursor-black.png')";

}

function come_here_out() {
    var obj = document.getElementById('come-here');
    obj.style.color = "white";
    var obj1 = document.getElementById('border-come-here');
    obj1.style.backgroundColor = "";
    var obj2 = document.getElementById('cursor-png');
    obj2.style.backgroundImage = "url('../my-image/cursor.png')";
}

function logo_phone_over() {

    var obj2 = document.getElementById('border-gmail');
    obj2.style.opacity = "0.8";
    var obj3 = document.getElementById('border-facebook');
    obj3.style.opacity = "0.8";
    document.getElementById('border-phone-2').style.width = "300px";

}

function logo_gmail_over() {

    var obj = document.getElementById('border-phone');
    obj.style.opacity = "0.8";
    var obj3 = document.getElementById('border-facebook');
    obj3.style.opacity = "0.8";
    var obj4 = document.getElementById('border-gmail-2');
    obj4.style.width = "300px";

}

function logo_facebook_over() {

    var obj2 = document.getElementById('border-gmail');
    obj2.style.opacity = "0.8";
    var obj = document.getElementById('border-phone');
    obj.style.opacity = "0.8";
    var obj4 = document.getElementById('border-facebook-2');
    obj4.style.width = "300px";

}

function logo_out() {
    var obj2 = document.getElementById('border-gmail');
    obj2.style.opacity = "0";
    var obj = document.getElementById('border-phone');
    obj.style.opacity = "0";
    var obj3 = document.getElementById('border-facebook');
    obj3.style.opacity = "0";
    document.getElementById('border-facebook-2').style.width = "0px";
    document.getElementById('border-gmail-2').style.width = "0px";
    document.getElementById('border-phone-2').style.width = "0px";
}

function howkteam_click() {

    location.href = 'https://www.howkteam.vn/about#';

}

function home_look_click() {

    location.href = '#home-look-scroll';

}

function contact_look_click() {

    location.href = '#contact-look-scroll';

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var isMenuOn = 0;
var frame = 0;

function menu_click() {
    if (isMenuOn == 0) {
        document.getElementById('menu-menu').style.transform = "translateY(-350px)";
        startAnimating(15);

        isMenuOn = 1;
    }
    else if (isMenuOn == 1) {
        document.getElementById('menu-menu').style.transform = "translateY(300px)";
        startAnimating(25);

        isMenuOn = 0;
    }
}


var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here

        if (isMenuOn == 1) {
            if (frame == 13) {
                return;
            }

            document.getElementById('frame' + frame.toString()).style.display = "none";

            frame++;
        }
        else if (isMenuOn == 0) {
            document.getElementById('frame' + frame.toString()).style.display = "inline-block";

            if (frame == 0) {
                return;
            }

            frame--;
        }
    }
}