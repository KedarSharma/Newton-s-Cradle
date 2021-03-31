const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var state = "intro";
var start;
var k1,k2,k3,k4,k5;
var lk,rk

function preload(){
	No1 = loadImage("No 1.jpg");
	No2 = loadImage("No 2.jpg");
	No3 = loadImage("No 3.jpg");
	No4 = loadImage("No 4.jpg");
	No5 = loadImage("No 5.jpg");
	se = loadImage("start experiment.jpg");
	key1 = loadImage("no1key.jpg");
	key2 = loadImage("no2 key.png");
	key3 = loadImage("no3key.jpg");
	key4 = loadImage("no4key.jpg");
	key5 = loadImage("no5key.jpg");
	l = loadImage("lkey.png");
	r = loadImage("rkey.png");
}

function setup() {
	createCanvas(800, 600);

	start = createSprite(400,450);
	start.addImage(se);
	start.scale = 0.2;	

	k1 = createSprite(870,100);
	k1.addImage(key1);
	k1.scale = 0.15;
	k2 = createSprite(870,150);
	k2.addImage(key2);
	k2.scale = 0.075;
	k3 = createSprite(870,200);
	k3.addImage(key3);
	k3.scale = 0.15;
	k4 = createSprite(870,250);
	k4.addImage(key4);
	k4.scale = 0.15;
	k5 = createSprite(870,300);
	k5.addImage(key5);
	k5.scale = 0.15;

	lk = createSprite(800,400);
	lk.addImage(l);
	lk.scale = 0.1;

	rk = createSprite(850,400);
	rk.addImage(r);
	rk.scale = 0.1;

	holder1 = new Holder(400,150);

	engine = Engine.create();
	world = engine.world;

	ball3 = new Ball(400,350);
	ball2 = new Ball(350,350);
	ball1 = new Ball(300,350);
	ball4 = new Ball(450,350);
	ball5 = new Ball(500,350);

	sling1 = new Slingshot(ball1.body,holder1.body,-100,0);
	sling2 = new Slingshot(ball2.body,holder1.body,-50,0);
	sling3 = new Slingshot(ball3.body,holder1.body,0,0);
	sling4 = new Slingshot(ball4.body,holder1.body,50,0);
	sling5 = new Slingshot(ball5.body,holder1.body,100,0);

	Engine.run(engine);
}

function draw() {
	if(state == "intro"){
		lk.visible = false
		rk.visible = false;
		background("black");
		fill("yellow")
		textSize(35);
		stroke("red")
		strokeWeight(2);
		text("NEWTON'S CRADLE",225,40);

		fill("red");
		textSize(25);
		stroke("red");
		strokeWeight(1);
		text("Newton's Cradle is a device that demonstarates the concepts of \nconservation of momentum and conservation of energy.",30,100)
		text("When one sphere at the end is lifted and released, it strikes \nthe stationary spheres, transmitting a force through the stationary \nspheres that pushes the last sphere upward.",30,185)
		text("The same works for any number of spheres pulled towards a certain \ndirection.",30,295);

		fill("lime");
		stroke("black");
		ellipse(15,93,10,10);
		ellipse(15,178,10,10);
		ellipse(15,288,10,10);

		stroke("cyan");
		strokeWeight(3);
		line(225,50,565,50);

		if(mousePressedOver(start)){
			state = "play";
			start.visible = false;
			lk.visible = true;
			rk.visible = true;	
		}
	}

	if(state == "play"){
		createCanvas(1120,600);
		rectMode(CENTER);
		background("black");
		ball1.display("magenta");
		ball2.display("white");
		ball3.display("orange");
		ball4.display("blue");
		ball5.display("yellow");
		holder1.display();
		sling1.display();
		sling2.display();
		sling3.display();
		sling4.display();
		sling5.display();

		fill("magenta");
		noStroke();
		ellipse(800,100,40,40);
		fill("white");
		ellipse(800,150,40,40);
		fill("orange");
		ellipse(800,200,40,40);
		fill("blue");
		ellipse(800,250,40,40);
		fill("yellow");
		ellipse(800,300,40,40);

		fill("white");
		textSize(20);
		text("=",830,107);
		text("=",830,157);
		text("=",830,207);
		text("=",830,257);
		text("=",830,307);

		fill("white");
		textSize(30);
		noStroke();
		text("Press the left or right keys and the corresponding bob number together to move the \n                          																specified bob.",10,500);

		myEventLeft();
		myEventRight();
	}

	drawSprites();
}

function myEventLeft(){
	if(keyDown("1") && keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -70, y: 0});
	}
	if(keyDown("2") && keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball2.body,ball2.body.position,{x: -70, y: 0});
	}
	if(keyDown("3") && keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x: -70, y: 0});
	}
	if(keyDown("4") && keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x: -70, y: 0});
	}
	if(keyDown("5") && keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x: -70, y: 0});
	}
}

function myEventRight(){
	if(keyDown("1") && keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x: 70, y: 0});
	}
	if(keyDown("2") && keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball2.body,ball2.body.position,{x: 70, y: 0});
	}
	if(keyDown("3") && keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x: 70, y: 0});
	}
	if(keyDown("4") && keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball4.body,ball4.body.position,{x: 70, y: 0});
	}
	if(keyDown("5") && keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x: 70, y: 0});
	}
}