var mic;
var brushX;
var brushY;
var brushes ;


function mouseClicked() {

  console.log('click');
  saveCanvas('my_image', 'jpg');

}


function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(windowWidth, windowHeight);
  brushes = [];
  background(0 , 0, 0);
  
  for(var i = 0; i < 1; i++){
    var b = new Brush(random(0,0), random(height));
    brushes.push(b)
  }
  
  
}

function draw() {
   micLevel = mic.getLevel()*1;
  text(micLevel, 50, 50);
  for(var j = 0; j < brushes.length; j++){
    brushes[j].updateLocation(micLevel)
    brushes[j].show()
  }  
}


function Brush(startX,startY){
  this.x = startX
  this.y = startY
  this.minSize = (0,10);
  this.maxSize = (0,100);
  this.levelMultiplier = random(100)
  this.color = color(255,255,255);
  this.speed = (0.1,0.3)
  this.show = function(){
    fill(this.color)
    rect(this.y, this.x, this.size, this.size)
  }
  
  this.updateLocation = function(m){
    this.x += this.speed;
    this.x += m * this.levelMultiplier;
    this.size = map(m, 0.01, 0.5, this.minSize, this.maxSize);
    
    if (this.x > width){
        this.x = -20
        this.color = color(255,255,255);
        this.y = random(height);
      }
    
  }
  
  
}