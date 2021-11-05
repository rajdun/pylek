let movingBalls = [];
let balls = [];

const HEIGHT = 800;
const WIDTH = 800;

function setup() {
    createCanvas(WIDTH, HEIGHT);

    balls.push(new Ball());

    for (let index = 0; index < 1000; index++) {
        const element = new MovingBall(random(0, WIDTH), random(0, HEIGHT), index, balls[0]);
        movingBalls.push(element);
    }
    
}

function draw() {
    background(220);

    movingBalls.forEach(ball => {
        ball.draw();
    })
}

class Ball {
    constructor() {
        this.img = loadImage("https://rajdun.github.io/pylek/ball.png");
    }
}

class MovingBall {
    constructor(x, y, i, ball) {
        this.name = "Testowa piłka " + i;
        this.x = x;
        this.y = y;
        this.ball = ball;
    }

    draw() {
        image(this.ball.img, this.x, this.y, 25, 25);
    }
}
