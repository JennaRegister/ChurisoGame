

var coinImage = new Image();
coinImage.src="coin-sprite-animation-sprite-sheet.png";

function coin (features) {

        var thiscoin = {}, frameIndex=0,ticktock=0,ticksperFrame=0,numberofFrames=features.numberofFrames || 1;
        thiscoin.context = features.context;
        thiscoin.width = features.width;
        thiscoin.height = features.height;
        thiscoin.image = features.image;
        thiscoin.loop = features.loop;
        
        thiscoin.render = function(){
                thiscoin.context.clearRect(0,0,thiscoin.width,thiscoin.height);
                this.context.drawImage(thiscoin.image,frameIndex*(thiscoin.width/numberofFrames),0,thiscoin.width/numberofFrames,thiscoin.height,0,0,thiscoin.width/numberofFrames,thiscoin.height);
        
        
        };
        
        thiscoin.update = function(){
                ticktock +=1;
                if(ticktock > ticksperFrame){
                        ticktock=0;
                        if(frameIndex < numberofFrames -1){
                                frameIndex +=1;
                        } else if (thiscoin.loop){
                                frameIndex =0;
                        }
                }
        
        };
        
        return thiscoin;
}

var canvas = document.getElementById("coinAnimation");
canvas.width = 100;
canvas.height = 100;

var coin = coin({context: canvas.getContext("2d"), width: 440, height:50, image: coinImage, numberofFrames: 10, ticksperFrame: 1, loop:true});

function gameLoop(){
        window.requestAnimationFrame(gameLoop);
        coin.update();
        coin.render();
        
};
coinImage.addEventListener("load", gameLoop);


