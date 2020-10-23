var dog,dogIMG, happyDog, happyDogIMG; 
var database; 
var foodS, foodStock;

function preload(){
	dogIMG = loadImage('images/dogImg.png')
	happyDogIMG = loadImage('images/dogImg1.png')
}

function setup() {
   database = firebase.database();

  createCanvas(500, 500);

  dog = createSprite(width/2,250,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.3;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogIMG);
}  

  drawSprites();

  //add styles here

}

function readStock(data){
   foodS = data.val(); 
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })

}



