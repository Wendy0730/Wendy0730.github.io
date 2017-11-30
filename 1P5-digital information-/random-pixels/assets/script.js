$(document).ready(function(){

// radndom b


    /* init this trash */
    var soundValue,
        sum = 0,
        temp;
    var $window = $(window);
    var $canvas = $('<canvas id="chill-vibes" width="' + $window.width() + '" height="' + $window.height() + '">Your browser doesn\'t support canvas. Boo-hiss.</canvas>');
    $('body').prepend($canvas);
    var ctx = $canvas[0].getContext('2d');

    ctx.font = "40px monospace";
    var gradient = ctx.createLinearGradient(0, 0, $canvas.width(), 0);
    gradient.addColorStop("0", "lime");
    gradient.addColorStop("0.5", "magenta");
    gradient.addColorStop("1.0", "orange");
    ctx.fillStyle = gradient;
    ctx.fillText("press j until the smiths", 200, 200);


    /* helpers to randomize */

    var getRandomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var getRandomPosition = function() {
        var pos = {
            x: getRandomNumber(0, $window.width()),
            y: getRandomNumber(0, $window.height())
        };

        return pos;
    };

    var getRandomColor = function() {
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
        var xPos = (Math.ceil(position.x / pixelSize) * pixelSize) - pixelSize;
        var yPos = (Math.ceil(position.y / pixelSize) * pixelSize) - pixelSize;
        ctx.moveTo(position.x, position.y);
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


            if (dataArrayAlt[i] < dataArrayAlt[i - 1]) {
                temp = dataArrayAlt[i - 1];
                // dataArrayAlt[i] = dataArrayAlt[i+1];
                // dataArrayAlt[i+1] = temp;
            }
            // sum = sum / dataArrayAlt.length;
            // console.log(   parseInt(sum * 10));
            // sum = parseInt(sum * 10);


        }

        // console.log(temp);
        if (temp > 200) {
            ctx.fillRect(xPos, yPos, pixelSize, pixelSize);

        } else if (temp < 200 && temp > 150) {
            // ctx.arc(xPos, yPos, 7.5 , 0, 2 * Math.PI, false);
            console.log("yuan");

            // ctx.arc(100,75,50,0,2*Math.PI);
            // ctx.stroke();
            ctx.arc(xPos, yPos, pixelSize, 0, 2 * Math.PI);
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

    var onKeyDown = function(e) {
        switch (e.keyCode) {
            case 74: // j
                playSong();
                break;
        }
    };

    var playSong = function() {
        if (midiBuffer && !playSound) {
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

    // var audioURL = "assets/17f.mp3";
    var audioURL = "https://wendy0730.github.io/interactive2/natural:bird.mp4";

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
    window.addEventListener("keydown", onKeyDown);


// radndom E




        $("#a").hover(function(){
            audioURL = $("#01a source").src;
            loadAudio(audioURL);
            playSong();
  			$("#01a")[0].pause();
  			$("#01a")[0].currentTime = 0;
  			$("#01a")[0].play();
  			});
 
 		$("#s").hover(function(){
            audioURL = $("#02s source").src;
            loadAudio(audioURL);
            playSong();
  			$("#02s")[0].pause();
  			$("#02s")[0].currentTime = 0;
  			$("#02s")[0].play();
  			});

 		$("#t").hover(function(){
            audioURL = $("#03t source").src;
            loadAudio(audioURL);
            playSong();
  			$("#03t")[0].pause();
  			$("#03t")[0].currentTime = 0;
  			$("#03t")[0].play();
  			});

 		$("#i").hover(function(){
            audioURL = $("#04i source").src;
            loadAudio(audioURL);
            playSong();
  			$("#04i")[0].pause();
  			$("#04i")[0].currentTime = 0;
  			$("#04i")[0].play();
  			});

 		$("#p").hover(function(){
            audioURL = $("#05p source").src;
            loadAudio(audioURL);
            playSong();
  			$("#05p")[0].pause();
  			$("#05p")[0].currentTime = 0;
  			$("#05p")[0].play();
  			});

 		$("#k").hover(function(){
            audioURL = $("#06k source").src;
            loadAudio(audioURL);
            playSong();
  			$("#06k")[0].pause();
  			$("#06k")[0].currentTime = 0;
  			$("#06k")[0].play();
  			});

 		$("#e").hover(function(){
            audioURL = $("#07e source").src;
            loadAudio(audioURL);
            playSong();
  			$("#07e")[0].pause();
  			$("#07e")[0].currentTime = 0;
  			$("#07e")[0].play();
  			});

        $("#n").hover(function(){
            audioURL = $("#08n source").src;
            loadAudio(audioURL);
            playSong();
            $("#08n")[0].pause();
            $("#08n")[0].currentTime = 0;
            $("#08n")[0].play();
            });

        $("#h").hover(function(){
            audioURL = $("#09h source").src;
            loadAudio(audioURL);
            playSong();
            $("#09h")[0].pause();
            $("#09h")[0].currentTime = 0;
            $("#09h")[0].play();
            });
        
        $("#r").hover(function(){
            audioURL = $("#10r source").src;
            loadAudio(audioURL);
            playSong();
            $("#10r")[0].pause();
            $("#10r")[0].currentTime = 0;
            $("#10r")[0].play();
            });

        $("#m").hover(function(){
            audioURL = $("#11m source").src;
            loadAudio(audioURL);
            playSong();
            $("#11m")[0].pause();
            $("#11m")[0].currentTime = 0;
            $("#11m")[0].play();
            });

        $("#d").hover(function(){
            audioURL = $("#12d source").src;
            loadAudio(audioURL);
            playSong();
            $("#12d")[0].pause();
            $("#12d")[0].currentTime = 0;
            $("#12d")[0].play();
            });

        $("#g").hover(function(){
            audioURL = $("#13g source").src;
            loadAudio(audioURL);
            playSong();
            $("#13g")[0].pause();
            $("#13g")[0].currentTime = 0;
            $("#13g")[0].play();
            });

        $("#o").hover(function(){
            audioURL = $("#14o source").src;
            loadAudio(audioURL);
            playSong();
            $("#14o")[0].pause();
            $("#14o")[0].currentTime = 0;
            $("#14o")[0].play();
            });

        $("#a2").hover(function(){
            audioURL = $("#15a source").src;
            loadAudio(audioURL);
            playSong();
            $("#15a")[0].pause();
            $("#15a")[0].currentTime = 0;
            $("#15a")[0].play();
            });

        $("#l").hover(function(){
            audioURL = $("#16l source").src;
            loadAudio(audioURL);
            playSong();
            $("#16l")[0].pause();
            $("#16l")[0].currentTime = 0;
            $("#16l")[0].play();
            });

        $("#f").hover(function(){
            audioURL = $("#17f source").src;
            loadAudio(audioURL);
            playSong();
            $("#17f")[0].pause();
            $("#17f")[0].currentTime = 0;
            $("#17f")[0].play();
            });

        $("#b").hover(function(){
            audioURL = $("#18b source").src;
            loadAudio(audioURL);
            playSong();
            $("#18b")[0].pause();
            $("#18b")[0].currentTime = 0;
            $("#18b")[0].play();
            });

        $("#a3").hover(function(){
            audioURL = $("#19a source").src;
            loadAudio(audioURL);
            playSong();
            $("#19a")[0].pause();
            $("#19a")[0].currentTime = 0;
            $("#19a")[0].play();
            });

        $("#j").hover(function(){
            audioURL = $("#20j source").src;
            loadAudio(audioURL);
            playSong();
            $("#20j")[0].pause();
            $("#20j")[0].currentTime = 0;
            $("#20j")[0].play();
            });


        $("#o2").hover(function(){
            audioURL = $("#21o source").src;
            loadAudio(audioURL);
            playSong();
            $("#21o")[0].pause();
            $("#21o")[0].currentTime = 0;
            $("#21o")[0].play();
            });

        $("#i2").hover(function(){
            audioURL = $("#22i source").src;
            loadAudio(audioURL);
            playSong();
            $("#22i")[0].pause();
            $("#22i")[0].currentTime = 0;
            $("#22i")[0].play();
            });

        $("#e2").hover(function(){
            audioURL = $("#23e source").src;
            loadAudio(audioURL);
            playSong();
            $("#23e")[0].pause();
            $("#23e")[0].currentTime = 0;
            $("#23e")[0].play();
            });

        $("#o3").hover(function(){
            audioURL = $("#24o source").src;
            loadAudio(audioURL);
            playSong();
            $("#24o")[0].pause();
            $("#24o")[0].currentTime = 0;
            $("#24o")[0].play();
            });

        $("#z").hover(function(){
            audioURL = $("#25z source").src;
            loadAudio(audioURL);
            playSong();
            $("#25z")[0].pause();
            $("#25z")[0].currentTime = 0;
            $("#25z")[0].play();
            });

        $("#w").hover(function(){
            audioURL = $("#26w source").src;
            loadAudio(audioURL);
            playSong();
            $("#26w")[0].pause();
            $("#26w")[0].currentTime = 0;
            $("#26w")[0].play();
            });

        $("#n2").hover(function(){
            audioURL = $("#27n source").src;
            loadAudio(audioURL);
            playSong();
            $("#27n")[0].pause();
            $("#27n")[0].currentTime = 0;
            $("#27n")[0].play();
            });

        $("#v").hover(function(){
            audioURL = $("#28v source").src;
            loadAudio(audioURL);
            playSong();
            $("#28v")[0].pause();
            $("#28v")[0].currentTime = 0;
            $("#28v")[0].play();
            });

        $("#u").hover(function(){
            audioURL = $("#29u source").src;
            loadAudio(audioURL);
            playSong();
            $("#29u")[0].pause();
            $("#29u")[0].currentTime = 0;
            $("#29u")[0].play();
            });

        $("#u2").hover(function(){
            audioURL = $("#30u source").src;
            loadAudio(audioURL);
            playSong();
            $("#30u")[0].pause();
            $("#30u")[0].currentTime = 0;
            $("#30u")[0].play();
            });
      
        $("#y").hover(function(){
            audioURL = $("#31y source").src;
            loadAudio(audioURL);
            playSong();
            $("#31y")[0].pause();
            $("#31y")[0].currentTime = 0;
            $("#31y")[0].play();
            });
      
        $("#x").hover(function(){
            audioURL = $("#32x source").src;
            loadAudio(audioURL);
            playSong();
            $("#32x")[0].pause();
            $("#32x")[0].currentTime = 0;
            $("#32x")[0].play();
            });
      
        $("#ch").hover(function(){
            audioURL = $("#03chsource").src;
            loadAudio(audioURL);
            playSong();
            $("#33ch")[0].pause();
            $("#33ch")[0].currentTime = 0;
            $("#33ch")[0].play();
            });
      
        $("#sh").hover(function(){
            audioURL = $("#04shsource").src;
            loadAudio(audioURL);
            playSong();
            $("#34sh")[0].pause();
            $("#34sh")[0].currentTime = 0;
            $("#34sh")[0].play();
            });
      
        $("#th").hover(function(){
            audioURL = $("#05thsource").src;
            loadAudio(audioURL);
            playSong();
            $("#35th")[0].pause();
            $("#35th")[0].currentTime = 0;
            $("#35th")[0].play();
            });
      
        $("#th").hover(function(){
            audioURL = $("#06thsource").src;
            loadAudio(audioURL);
            playSong();
            $("#36th")[0].pause();
            $("#36th")[0].currentTime = 0;
            $("#36th")[0].play();
            });
      
        $("#q").hover(function(){
            audioURL = $("#37q source").src;
            loadAudio(audioURL);
            playSong();
            $("#37q")[0].pause();
            $("#37q")[0].currentTime = 0;
            $("#37q")[0].play();
            });

        $("#ow").hover(function(){
            audioURL = $("#08owsource").src;
            loadAudio(audioURL);
            playSong();
            $("#38ow")[0].pause();
            $("#38ow")[0].currentTime = 0;
            $("#38ow")[0].play();
            });

        $("#oi").hover(function(){
            audioURL = $("#09oisource").src;
            loadAudio(audioURL);
            playSong();
            $("#39oi")[0].pause();
            $("#39oi")[0].currentTime = 0;
            $("#39oi")[0].play();
            });

        $("#u3").hover(function(){
            audioURL = $("#40u source").src;
            loadAudio(audioURL);
            playSong();
            $("#40u")[0].pause();
            $("#40u")[0].currentTime = 0;
            $("#40u")[0].play();
            });

        $("#er").hover(function(){
            audioURL = $("#01ersource").src;
            loadAudio(audioURL);
            playSong();
            $("#41er")[0].pause();
            $("#41er")[0].currentTime = 0;
            $("#41er")[0].play();
            });

        $("#ar").hover(function(){
            audioURL = $("#02arsource").src;
            loadAudio(audioURL);
            playSong();
            $("#42ar")[0].pause();
            $("#42ar")[0].currentTime = 0;
            $("#42ar")[0].play();
            });

        $("#d2").hover(function(){
            audioURL = $("#43d source").src;
            loadAudio(audioURL);
            playSong();
            $("#43d")[0].pause();
            $("#43d")[0].currentTime = 0;
            $("#43d")[0].play();
            });

        $("#h2").hover(function(){
            audioURL = $("#44h source").src;
            loadAudio(audioURL);
            playSong();
            $("#44h")[0].pause();
            $("#44h")[0].currentTime = 0;
            $("#44h")[0].play();
            });

        $("#p2").hover(function(){
            audioURL = $("#45p source").src;
            loadAudio(audioURL);
            playSong();
            $("#45p")[0].pause();
            $("#45p")[0].currentTime = 0;
            $("#45p")[0].play();
            });

        $("#n3").hover(function(){
            audioURL = $("#46n source").src;
            loadAudio(audioURL);
            playSong();
            $("#46n")[0].pause();
            $("#46n")[0].currentTime = 0;
            $("#46n")[0].play();
            });

        $("#m2").hover(function(){
            audioURL = $("#47m source").src;
            loadAudio(audioURL);
            playSong();
            $("#47m")[0].pause();
            $("#47m")[0].currentTime = 0;
            $("#47m")[0].play();
            });

        $("#k2").hover(function(){
            audioURL = $("#48k source").src;
            loadAudio(audioURL);
            playSong();
            $("#48k")[0].pause();
            $("#48k")[0].currentTime = 0;
            $("#48k")[0].play();
            });

        $("#e3").hover(function(){
            audioURL = $("#493 source").src;
            loadAudio(audioURL);
            playSong();
            $("#493")[0].pause();
            $("#493")[0].currentTime = 0;
            $("#493")[0].play();
            });

        $("#r2").hover(function(){
            audioURL = $("#50r source").src;
            loadAudio(audioURL);
            playSong();
            $("#50r")[0].pause();
            $("#50r")[0].currentTime = 0;
            $("#50r")[0].play();
            });

        $( "#s" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#s" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#t" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#t" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#i" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#i" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#p" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#p" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#k" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#k" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#e" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#e" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#n" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#n" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#h" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#h" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#r" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#r" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#m" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#m" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#d" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#d" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#g" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#g" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#o" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#o" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

         $( "#a2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#a2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#l" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#l" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

 
        $( "#f" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#f" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#b" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#b" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#a3" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#a3" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#j" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#j" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#o2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#o2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#i2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#i2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

 
        $( "#a" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#a" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#e2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#e2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#o3" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#o3" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#z" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#z" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#w" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#w" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#n2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#n2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#v" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#v" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#u" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#u" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#u2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#u2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#y" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#y" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#x" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#x" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#ch" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#ch" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#sh" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#sh" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#th" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#th" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#th2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#th2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#q" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#q" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#ow" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#ow" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#oi" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#oi" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#u3" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#u3" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#er" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#er" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#ar" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#ar" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#d2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#d2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#h2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#h2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#p2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#p2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#n3" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#n3" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#m2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#m2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#k2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#EEEEEE",
            });
        });
        $( "#k2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });


        $( "#e3" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#0096ff",
            });
        });
        $( "#e3" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });

        $( "#r2" ).mousedown(function() {
            $( this ).css({
            backgroundColor: "#96ff00",
            });
        });
        $( "#r2" ).mouseup(function() {
            $( this ).animate({
            backgroundColor: "white",
            }, 2000, function() {
            });
        });
});
