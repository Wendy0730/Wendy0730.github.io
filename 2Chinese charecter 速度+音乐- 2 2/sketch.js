var streams = [];
var fadeInterval = 5;
var symbolSize = 100;


mic = new p5.AudioIn();

var micLevel;


function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);

    var x = 0;
    for (var i = 0; i <= width / symbolSize; i++) {
        var stream = new Stream();
        stream.generateSymbols(x, random(-2000, 0));
        streams.push(stream);
        x += symbolSize
    }
    mic.start();

    textFont('Consolas');
    textSize(symbolSize);
}

function draw(micLevel) {
  background(0, 0, 0, 8);

    micLevel = mic.getLevel() * 500;
    micLevel = map(micLevel, 0, 500, 0, 300);

    symbolSize =+ micLevel + 20;
    textSize(symbolSize);

    
    // text(micLevel, 50, 50);


    streams.forEach(function(stream) {
        stream.changeSpeed(micLevel);
        stream.render();
    });

}

function Symbol(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.first = first;
    this.opacity = opacity;

    this.switchInterval = round(random(2, 25));

    this.setToRandomSymbol = function() {
        var charType = round(random(0, 5));
        if (frameCount % this.switchInterval == 0) {
            if (charType > 0) {
                // set it to Katakana
                var item= [0x281F,0x281D, 0x281F];
                var items = item[Math.round(Math.random(item.length))];
                this.value = String.fromCharCode(
                    
                    items
                    //items
                    //0x4E00 + round(random(0, 96))
                    // 0x30A0 + round(random(0, 96))
                );
            } else {
                // set it to numeric
                this.value = String.fromCharCode(
                    
                    items

                );
                //this.value = round(random(0, 9));
            }
        }
    }

    this.rain = function() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }

}

function Stream(micLevel) {
    micLevel = mic.getLevel()*1;
    symbolSize = micLevel +100;
    this.symbols = [];
    this.totalSymbols = round(random(1, 1));
    this.speed = 10;
    // this.speed = micLevel;

    this.generateSymbols = function(x, y) {
        var opacity = 255;
        var first =  round(random(0, 4)) == 1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(
                x,
                y,
                this.speed,
                first,
                opacity
            );
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            opacity -= (255 / this.totalSymbols) / fadeInterval;
            y -= symbolSize;
            x += random(-1000,1000);
            first = false;
        }
    }

    this.render = function() {
        this.symbols.forEach(function(symbol) {
            if (symbol.first) {
                fill(225, 255, 225, symbol.opacity);
            } else {
                fill(184, 184, 184, symbol.opacity);
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
    this.changeSpeed = function(speedChang){
        this.symbols.forEach(function(symbol){
          symbol.speed = speedChang;
        });
    }
}