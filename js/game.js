

/*things I need:
Possible choices
Combinations for each trial
Move from trial to trial
Feedback for correct answer


*/


//set up the stage
var canvas = document.getElementById("canvas");
var stage = new createjs.Stage(canvas);
stage.enableMouseOver();

//welcome
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

//here is the "apply box"
var box = new createjs.Bitmap("images/metalbox.jpg");
box.scaleX = .50;
box.scaleY = .50;
box.x = 400;
box.y = 260;
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

//tile holder
var holder = new createjs.Bitmap("images/holder2.jpg");
holder.y=550;
holder.x=225;
stage.addChild(holder);

//all the tiles
var t1 = new createjs.Bitmap("images/s1.jpg");
t1.y=600;
t1.x=260;
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
t5.x=620;
var t6 = new createjs.Bitmap("images/s2.jpg");
t6.y=600;
t6.x=710;



var game = function(){
//possible choices
var choices = [t1,t2,t3,t4,t5,t6]
for(var t=0; t< choices.length;t++) {
        stage.addChild(choices[t]);
        choices[t].shadow = new createjs.Shadow("#808080", 3, 3, 0);
        choices[t].on("pressmove", function(evt) {
                evt.target.x = evt.stageX;
                evt.target.y = evt.stageY;
        });
        choices[t].on("pressup", function(evt) { console.log("up"); })
        choices[t].on("mouseover", function(evt){this.shadow = new createjs.Shadow("#49e17a", 3, 3, 25);});
        choices[t].on("mouseout", function(evt){this.shadow = new createjs.Shadow("#808080", 3, 3, 0);});

}


var bouncetile = function(t){
        createjs.Tween.get(t)
        .to({y:560},400)
        .wait(500)
        .to({y:600},400)

}

//our arguments!
f1 = new createjs.Bitmap("images/s1.jpg");
f2 = new createjs.Bitmap("images/s2.jpg");
f3 = new createjs.Bitmap("images/s3.jpg");
f4 = new createjs.Bitmap("images/s4.jpg");
args1 = [f1,f2,f3,f4];
for(var f=0; f< args1.length;f++){
        args1[f].x=325;
        args1[f].y=305;
}
a1 = new createjs.Bitmap("images/s1.jpg");
a2 = new createjs.Bitmap("images/s2.jpg");
a3 = new createjs.Bitmap("images/s3.jpg");
a4 = new createjs.Bitmap("images/s4.jpg");
args2 = [a1,a2,a3,a4];
for(var f=0; f< args2.length;f++){
        args2[f].x=590;
        args2[f].y=305;
}


//moving the arms, with their arguments
var movearms =function(arg1,arg2,correct){

        stage.addChild(arg1);
        stage.addChild(arg2);
        createjs.Tween.get(left, {loop:false})
                .to({ x: 115 }, 1200, createjs.Ease.none)
                .to({ x: 0 }, 1200, createjs.Ease.none)
        createjs.Tween.get(arg1, {loop:false})
                .to({ x: 425 }, 1200, createjs.Ease.none)


        createjs.Tween.get(right, {loop:false})
                .to({ x: 570 }, 1200, createjs.Ease.none)
                .to({ x: 680 }, 1200, createjs.Ease.none)
        createjs.Tween.get(arg2, {loop:false})
                .to({ x: 510 }, 1200, createjs.Ease.none)
        arg1.shadow = new createjs.Shadow("red", 3, 3, 25)
        arg2.shadow = new createjs.Shadow("blue", 3, 3, 25)


                createjs.Tween.get(correct, {loop:false})


                        .wait(2500)
                        .call(turngreen)
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:560},400)
                        .wait(500)
                        .to({y:600},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:560},400)
                        .wait(500)
                        .to({y:600},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:560},400)
                        .wait(500)
                        .to({y:600},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:560},400)
                        .wait(500)
                        .to({y:600},400)
                        .to({scaleX: 1, scaleY: 1})

                        .call(turnback)


        function turngreen() {
                correct.shadow=new createjs.Shadow("#49e17a", 3, 3, 25);
        }
        function turnback() {
                correct.shadow=new createjs.Shadow("#808080", 3, 3, 0);
        }




};
        choices.shift();
        var nextSequence = function(choices){



                //choose random arguments, place them in "apply" box
                movearms(args1[Math.floor(Math.random() * args1.length)],args2[Math.floor(Math.random() * args2.length)],choices[0]);




        }

        nextSequence();

}

while(choices.length>0){
        game();
}




//reload frames
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);
