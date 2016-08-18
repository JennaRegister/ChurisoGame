


/*things I need:
Possible choices
Combinations for each trial
Move from trial to trial
Feedback for correct answer


*/



//set up the stage
var canvas = document.getElementById("canvas");
var stage = new createjs.Stage(canvas);


//here is the "apply box"
var box = new createjs.Bitmap("images/metalbox.jpg");
box.scaleX = .50;
box.scaleY = .50;
box.x = 400;
box.y = 260;
box.addEventListener("click",function(event){alert("Hey you");})

stage.addChild(box);

//left robot arm
var left = new createjs.Bitmap("images/left.png");
left.scaleX = .50;
left.scaleY = .50;
left.x = 0;
left.y = 260;
stage.addChild(left);

//right robot arm
var right = new createjs.Bitmap("images/right.png");
right.scaleX = .50;
right.scaleY = .50;
right.x = 680;
right.y = 260;
stage.addChild(right);





var holder = new createjs.Bitmap("images/holder2.jpg");
holder.y=550;
holder.x=225;
stage.addChild(holder);
var t1 = new createjs.Bitmap("images/s1.jpg");
t1.y=600;
t1.x=260;
t1.shadow = new createjs.Shadow("#000000", 5, 5, 10);
var t2 = new createjs.Bitmap("images/s2.jpg");
t2.y=600;
t2.x=350;
var t3 = new createjs.Bitmap("images/s3.jpg");
t3.y=600;
t3.x=440;
var t4 = new createjs.Bitmap("images/s4.jpg");
t4.y=600;
t4.x=530;
var t5 = new createjs.Bitmap("images/s5.jpg");
t5.y=600;
t5.x=630;
var t6 = new createjs.Bitmap("images/s2.jpg");
t6.y=600;
t6.x=730;


stage.addChild(t1);
stage.addChild(t2);
stage.addChild(t3);
stage.addChild(t4);
stage.addChild(t5);
stage.addChild(t6);




var text = new createjs.Text("Welcome to the", "bold 48px Arial", "white");
text.x=300;
text.y=10;
text.shadow = new createjs.Shadow("#000", 4, 4, 8);
stage.addChild(text);
var text2 = new createjs.Text("Concept Factory", "bold 70px Arial", "white");
text2.shadow = new createjs.Shadow("#000", 4, 4, 8);
stage.addChild(text2);
text2.x=225;
text2.y=80;
stage.update();




//possible choices
//var choices = [t1,t2,t3,t4,t5,t6]
var movearms =function(){
createjs.Tween.get(left, {loop:false})
        .to({ x: 200 }, 1500, createjs.Ease.none)
        .to({ x: 0 }, 1500, createjs.Ease.none)
createjs.Tween.get(right, {loop:false})
        .to({ x: 500 }, 1500, createjs.Ease.none)
        .to({ x: 680 }, 1500, createjs.Ease.none)

                
};

var bouncetile = function(t){
        createjs.Tween.get(t)
        .to({y:600},400)
        .wait(500)
        .to({y:650},400)

}

movearms();
//bouncetile(t2);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);


