//Create variables here
var  dog,dogImg, milkImg, happyDog, database,  foodStock,foodS,feed,addFood,foodObj;

function preload()
{
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(1000,400);
  dog = createSprite(800,200,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  database = firebase.database();

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  foodS = 0;
  database.ref('/').update({
    foodStock:foodS
  })
  foodObj = new Food();
  
  addFood=createButton("Add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}
  


function draw(){
  background(46, 139, 87);
  drawSprites();
  foodObj.display();
}

function feedDog(){
  if (foodS > 0) {
      dog.addImage(happyDog);
      foodS--; 
      foodObj.updateFoodStock(foodS);
  }
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    foodStock:foodS
  })
}