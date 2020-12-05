var mr
var fr
var o1, o2, o3, o4


function setup() {
  createCanvas(1200,800);
  mr = createSprite(200, 200, 50, 80);
  fr = createSprite(400, 200, 80, 30)
  o1 = createSprite(100,100,50,50)
  o2 = createSprite(200,100,50,50)
  o3 = createSprite(300,100,50,50)
  o4 = createSprite(400,100,50,50)
  mr.shapeColor = "green"
  fr.shapeColor = "green"
  o1.shapeColor = "green"
  o2.shapeColor = "green"
  o3.shapeColor = "green"
  o4.shapeColor = "green"
  mr.debug = true
  fr.debug = true
}

function draw() {
  background(0); 
mr.x = World.mouseX
mr.y = World.mouseY




 
  
if(isTouching(mr,o1)){
mr.shapeColor = "red"
o1.shapeColor = "red"

}
else{
mr.shapeColor = "green"
o1.shapeColor = "green"

}
if(isTouching(mr,o3)){
  mr.shapeColor = "red"
  o3.shapeColor = "red"
  
  }
  else{
  mr.shapeColor = "green"
  o3.shapeColor = "green"
  
  }


  drawSprites();
}

function isTouching(Object1, Object2){
  var z = Object1.width/2 + Object2.width/2
  var a = Object1.height/2 + Object2.height/2
  if(Object1.x-Object2.x<z&&Object2.x-Object1.x<z&&Object1.y-Object2.y<a&&Object2.y-Object1.y<a){
  
  
  return true
  
  }
  else{
    return false
  }


}


























