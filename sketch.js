const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ground1,ground2;
var box;
var polygon;


var slingShot;

function setup() {
  createCanvas(800,1200);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(300,500,350,20);
  ground2 = new Ground(570,400,300,20);
  box1 = new Box(200,476,30,30);
  box2 = new Box(239,476,30,30);
  box3 = new Box(279,476,30,30);
  box4 = new Box(315,476,30,30);
  box5 =new Box(350,476,30,30);
  box6 = new Box(385,476,30,30);
  box7 = new Box(418,476,30,30);
  box8 = new Box(240,445,30,30);
  box9 = new Box(279,445,30,30);
  box10 = new Box(315,445,30,30);
  box11 = new Box(350,445,30,30);
  box12 = new Box(382,445,30,30);
  box13 = new Box(278,415,30,30);
  box14 = new Box(315,415,30,30);
  box15 = new Box(350,415,30,30);
  box16 = new Box(315,389,30,30);
  box17 = new Box(450,370,40,40);
  box18 = new Box(500,370,40,40);
  box19 = new Box(550,370,40,40);
  box20 = new Box(600,370,40,40);
  box21 = new Box(650,370,40,40);
  box22 = new Box(500,328,40,40);
  box23 = new Box(550,328,40,40);
  box24 = new Box(600,328,40,40);
  box25 = new Box(550,287,40,40);

  polygon = new Polygon(100,300,20,20);
  slingShot = new SlingShot(polygon.body,{x:100,y:350});
}

function draw() {
  background(255);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  polygon.display();

}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}