const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    var canvas = createCanvas(1300,600);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(650,590,1300,20);

    box1 = new Box(800,490,100,100);
    box2 = new Box(900,490,100,100);
    box3 = new Box(1000,490,100,100);

    box4 = new Box(800,390,100,100);
    box5 = new Box(900,390,100,100);
    box6 = new Box(1000,390,100,100);

    box7 = new Box(800,290,100,100);
    box8 = new Box(900,290,100,100);
    box9 = new Box(1000,290,100,100);

    box10 = new Box(800,190,100,100);
    box11 = new Box(900,190,100,100);
    box12 = new Box(1000,190,100,100);

    box13 = new Box(800,90,100,100);
    box14 = new Box(900,90,100,100);
    box15 = new Box(1000,90,100,100);

    ball = new Ball(200,200,120,120);

    rope = new Rope(ball.body,{x: 500, y: 40});
}

function draw(){
    background("lightBlue");

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
    box5.display();
    box6.display();
    
    box7.display();
    box8.display();
    box9.display();
    
    box10.display();
    box11.display();
    box12.display();
    
    box13.display();
    box14.display();
    box15.display();

    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}