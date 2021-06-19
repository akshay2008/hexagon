const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5, box6, box7,box8,box9, box10, box11,box12,box13, box14, box15,box16,box17, box18, box19,box20;
var hero,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000, 600, 500, 20);
  hero = new Hero(400,800,290);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  

  box1 = new Box(810, 500, 70, 70);
  box2 = new Box(880, 500, 70, 70);
  box3 = new Box(950, 500, 70, 70);
  box4 = new Box(1020, 500, 70, 70);
  box5 = new Box(1090, 500, 70, 70);

  box6 = new Box(1160, 500, 70, 70);
  box7 = new Box(840, 430, 70, 70);
  box8 = new Box(910, 430, 70, 70);
  box9 = new Box(980, 430, 70, 70);
  box10 = new Box(1050, 430, 70, 70);

  box11 = new Box(1120, 430, 70, 70);
  box12 = new Box(870, 360, 70, 70);
  box13 = new Box(940, 360, 70, 70);
  box14 = new Box(1010, 360, 70, 70);
  box15 = new Box(1080, 360, 70, 70);

  box16 = new Box(910, 290, 70, 70);
  box17 = new Box(980, 290, 70, 70);
  box18 = new Box(1050, 290, 70, 70);
  box19 = new Box(940, 220, 70, 70);
  box20 = new Box(1010, 220, 70, 70);

  

}

function draw() {
  background(bg);
  Engine.update(engine);
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box10.display();
  box11.display();
  box12.display()
  box13.display();
  box14.display();
  box15.display();
  box16.display()
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  

  hero.display();
  rope.display();

  text(mouseX+","+mouseY,mouseX,mouseY);
   
}
