let balls = [];

const HEIGHT = 800;
const WIDTH = 800;

function setup() {
    createCanvas(WIDTH, HEIGHT);
    for (let index = 0; index < 100; index++) {
        const element = new Ball(random(0, WIDTH), random(0, HEIGHT), index);
        balls.push(element);
    }
}

function draw() {
    background(220);

    balls.forEach(ball => {
        ball.draw();
    })
}


class Ball {
    constructor(x, y, i) {
        this.img = loadImage("ball.png");
        this.name = "Testowa piłka " + i;
        this.x = x;
        this.y = y;
    }

    draw() {
        image(this.img, this.x, this.y, 25, 25);
    }
}
