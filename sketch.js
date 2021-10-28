function setup() {
  createCanvas(400, 400);
}

let noiseScale=0.02;

function draw() {
  background(randomGaussian(25,5),25,100);
  
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  }
  
  
  if(mouseX > 0 && mouseY > 0){
  noStroke();
  fill(randomGaussian(170,3));
  rect(mouseX *noiseScale*40 , mouseY*noiseScale*20 , 200, 200);
    
    fill(250,randomGaussian(120,3));
  rect(mouseX-50 , mouseY-50*noiseScale*20 , 200, 200);
  
 }
  
  /*
  stroke(250,230,230);
  noFill();
  rect(150, 50, 200, 200);
  */
  
  noStroke();
  fill(randomGaussian(250,10) ,150 ,150);
rect(100, 100, 100, 100);
  
  noStroke();
  fill(randomGaussian(240,10),140 ,140);
rect(200, 100, 100, 100);
  
  noStroke();
  fill(randomGaussian(260,10) ,160 ,160);
rect(100, 200, 100, 100);
  
  noStroke();
  fill(randomGaussian(230,10) ,130 ,130);
rect(200, 200, 100, 100);
    


}