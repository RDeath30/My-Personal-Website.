function Home_Over() {
    document.getElementById('home-link').style.color = "#1C1C1C";
    document.getElementById('home').style.backgroundColor = "white";

}

function contact_look_click() {

    location.href = '#contact-look-scroll';

}

function All_Out() {
    document.getElementById('home-link').style.color = "white";
    document.getElementById('home').style.backgroundColor = "";
}

var body = document.body,
    html = document.documentElement;

var document_width = Math.max
(
    body.scrollWidth,
    body.offsetWidth, 
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
);

var canvas = document.createElement('canvas');
canvas.id = "game";
canvas.width = document_width - 17;
canvas.height = 500;
document.getElementById('canvas-frame').appendChild(canvas);
var context = canvas.getContext('2d');

var gameGround = 
{
    x: 0,
    y: 0,
    width: document_width - 17,
    height: 500
};

var snake_Head =
{
    x: 50,
    y: 50,
    edge: 10,
    speed: 25
};

var snake_Body = 
[
    body_nearHead =
    {
        x: snake_Head.x - snake_Head.edge,
        y: snake_Head.y,
        edge: snake_Head.edge,
        speed: snake_Head.speed
    },

    body_middle =
    {
        x: body_nearHead.x - body_nearHead.edge,
        y: body_nearHead.y,
        edge: body_nearHead.edge,
        speed: body_nearHead.speed,
        body_middle_count: 1
    },

    body_nearTail =
    {
        x: (body_nearHead.x - body_nearHead.edge) - body_middle.body_middle_count * (body_middle.x - body_middle.edge),
        y: body_middle.y,
        edge: body_middle.edge,
        speed: body_middle.speed
    }
];

var snake_Tail =
{
    x: body_nearTail.x - body_nearTail.edge,
    y: body_nearTail.y,
    edge: body_nearHead.edge,
    speed: body_nearTail.speed
};

function draw_gameGround()
{
    context.beginPath();
    context.rect(
        gameGround.x,
        gameGround.y,
        gameGround.width,
        gameGround.height
    );
    context.stroke();
    context.closePath();
}

function draw_snakeHead()
{
    context.beginPath();
    context.rect(
        snake_Head.x,
        snake_Head.y,
        snake_Head.edge,
        snake_Head.edge
    );
    context.stroke();
    context.closePath();
}

function draw_snakeBody()
{
    context.beginPath();
    context.rect(
        snake_Body.x,
        snake_Body.y,
        snake_Body.edge,
        snake_Body.edge
    );
    context.stroke();
    context.closePath();
}

function draw_snakeTail()
{
    context.beginPath();
    context.moveTo(
        snake_Tail.x -
    );
    context.stroke();
    context.closePath();
}

function draw_snake()
{

}

function draw()
{
    draw_gameGround();

    requestAnimationFrame(draw);
}

draw();