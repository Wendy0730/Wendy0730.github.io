(function(){
         
  /* init this trash */
  var soundValue, 
  sum = 0,
   temp;
  var $window = $(window);
  var $canvas = $('<canvas id="chill-vibes" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
  $('body').prepend($canvas);
  var ctx = $canvas[0].getContext('2d');
  
  ctx.font="40px monospace";
  var gradient=ctx.createLinearGradient(0,0,$canvas.width(),0);
  gradient.addColorStop("0","lime");
  gradient.addColorStop("0.5","magenta");
  gradient.addColorStop("1.0","orange");
  ctx.fillStyle=gradient;
  ctx.fillText("press j until the smiths",200,200);

  
  /* helpers to randomize */
  
  var getRandomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  var getRandomPosition = function(){
    var pos = {
      x: getRandomNumber(0, $window.width()),
      y: getRandomNumber(0, $window.height())
    };
    
    return pos;
  };
  
  var getRandomColor = function(){
    var color = {
      r: getRandomNumber(0, 0),
      g: getRandomNumber(0, 0),
      b: getRandomNumber(0, 255)
    };
    
    return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
  };
  
  
  
  /* helpers to draw */
  
  var draw = function() {
    drawVisual = requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    
    var position = getRandomPosition();
    
    ctx.beginPath();
    var xPos = ( Math.ceil(position.x/pixelSize) * pixelSize ) - pixelSize;
    var yPos = ( Math.ceil(position.y/pixelSize) * pixelSize ) - pixelSize;
    ctx.moveTo (position.x, position.y);
    ctx.fillStyle = getRandomColor();
    ctx.lineHeight = 0;
    
    
    // ctx.fillRect(xPos,yPos,pixelSize,pixelSize);


// fillRect

analyser.fftSize = 256;
    var bufferLengthAlt = analyser.frequencyBinCount;
// console.log(bufferLengthAlt);
var dataArrayAlt = new Uint8Array(bufferLengthAlt);

analyser.getByteFrequencyData(dataArrayAlt);

// fre




    // dataArray = new Uint8Array(analyser.fftSize);
      // analyser.getByteTimeDomainData(dataArray);
      for (var i = dataArrayAlt.length - 1; i >= 0; i--) {
      sum = sum + dataArrayAlt[i];
      // console.log(dataArrayAlt[i]);


       if(dataArrayAlt[i]<dataArrayAlt[i-1]) {
     temp = dataArrayAlt[i-1];
     // dataArrayAlt[i] = dataArrayAlt[i+1];
     // dataArrayAlt[i+1] = temp;
    }
    // sum = sum / dataArrayAlt.length;
      // console.log(   parseInt(sum * 10));
      // sum = parseInt(sum * 10);
      

    }

          // console.log(temp);
if (temp > 200) {
      ctx.fillRect(xPos,yPos,pixelSize,pixelSize);

}else if (temp < 200 && temp > 150) {
  // ctx.arc(xPos, yPos, 7.5 , 0, 2 * Math.PI, false);
  console.log("yuan");

// ctx.arc(100,75,50,0,2*Math.PI);
// ctx.stroke();
  ctx.arc(xPos,yPos, pixelSize,0,2*Math.PI);
// Try it Yourself »
ctx.fillStyle = getRandomColor();
  ctx.fill();
          console.log(xPos);


}


    sum = 0;
  };
  
  
  
  /* AUDIO GARBAGE */
  
  var loadAudio = function(url) {
    var request = new XMLHttpRequest();
    request.open('GET', audioURL, true);
    request.responseType = 'arraybuffer';
  
    request.onload = function() {
      audioCtx.decodeAudioData(request.response, function(buffer) {
        midiBuffer = buffer;
      });
    }
    request.send();
  }

  var onKeyDown = function(e){
    switch (e.keyCode) {
      case 74: // j
        playSong();
        break;
    }
  };
  
  var playSong = function(){
    if ( midiBuffer && !playSound ) {
      playSound = audioCtx.createBufferSource();
      playSound.buffer = midiBuffer;
      playSound.connect(audioCtx.destination);
      playSound.start(0);
      
      playSound.connect(analyser);
      
      analyser.fftSize = 2048;
      soundValue = analyser;
      dataArray = new Uint8Array(analyser.fftSize);
      analyser.getByteTimeDomainData(dataArray);
      console.log(dataArray[8]);
      
      draw();
    }

  };
  
  
  /* LET'S MAKE SOME GARBAGE ART */
        
  var playSound, dataArray;
  var midiBuffer = null;
  
  var audioURL = "https://beccakao.github.io/interactive2/projects/project1/phonetics/assets/03t.mp3";

   //var audioURL = "https://wendy0730.github.io/interactive2/natural:bird.mp4";

  //var audioURL = "https://wendy0730.github.io/interactive2/videoplayback.mp4";
  // this is natural music

  //var audioURL = "https://wendy0730.github.io/interactive2/XF.mp3";
  // This music is  sym·pho·ny / 5sImfEnI ; 5sImfEni /
  //var audioURL = "https://wendy0730.github.io/interactive2/test.mp3";
  // var audioURL = 'https://cdn.glitch.com/5112be86-af43-4967-8d38-be0c9b610868%2Fgirlfriend.mp3';
  var pixelSize = 15;
  
  // web audio api turn upppp
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  var analyser = audioCtx.createAnalyser();
  
  loadAudio(audioURL);
  window.addEventListener("keydown",onKeyDown);

})()