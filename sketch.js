const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var myengine,myworld; 
var slingshot;
function setup() {
  createCanvas(1200,500);

  myengine = Engine.create();
  myworld = myengine.world;
 
  ball = new Ball(200,100,30);
  box1 = new Box(800,480);
  box4 = new Box(800,430);
  box5 = new Box(800,380);
  box6 = new Box(800,330);
  box7 = new Box(800,280);
  box12 = new Box(800,130);
  box13= new Box(800,90);

  box2 = new Box(900,480);
  box8 = new Box(900,430);
  box9 = new Box(900,380);
  box10 = new Box(900,330);
  box14 = new Box(900,280);
  
  box3 = new Box(1000,480);
  box11 = new Box(1000,430);
  box15 = new Box(1000,380);
  /*box16 = new Box(690,280);
  box17 = new Box(900,340);
  box18 = new Box(790,290);
  box19 = new Box(570,334);*/

  ground = new Ground(600,490,1200,20);
  slingshot = new Slingshot(ball.body,{x:600,y:80});
  Engine.run(myengine);
}

function draw() {
  background(0);  
  fill("pink");
  box1.display();
  box2.display();
  fill("lightgreen");
  box3.display();
  ball.display();
  box4.display();
  box5.display();
  box6.display();
  fill("lightblue");
  box7.display();
  box8.display();
  
  box9.display();
  fill("lightgreen");
 
  box10.display(); 
  fill("pink");
  box11.display();
  box12.display(); 
  box13.display(); 
  box14.display(); 
  fill("lime");
  box15.display(); 
  ground.display();
  slingshot.display();
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  
}
function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
