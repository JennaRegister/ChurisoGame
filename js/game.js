
//set up the stage
var canvas = document.getElementById("canvas");
var stage = new createjs.Stage(canvas);
stage.enableMouseOver();




var game = function(){
        //welcome
        var text = new createjs.Text("Welcome to the", "bold 48px Arial", "white");
        text.x=300;
        text.y=10;
        text.shadow = new createjs.Shadow("#000", 4, 4, 8);
        var text2 = new createjs.Text("Concept Factory", "bold 70px Arial", "white");
        text2.shadow = new createjs.Shadow("#000", 4, 4, 8);
        text2.x=225;
        text2.y=80;
        stage.update();

        //here is the "apply box and associated gears"
        var box = new createjs.Bitmap("images/metalbox.jpg");
        box.scaleX = .50;
        box.scaleY = .50;
        box.x = 400;
        box.y = 260;
        var gear = new createjs.Bitmap("images/gear.png");
        gear.scaleX = .3;
        gear.scaleY = .3;
        gear.regX=150;
        gear.regY = 150;
        var gear2 = new createjs.Bitmap("images/gear.png");
        gear2.scaleX = .2;
        gear2.scaleY = .2;
        gear2.regX=150;
        gear2.regY = 150;
        var gear3 = new createjs.Bitmap("images/gear.png");
        gear3.scaleX = .3;
        gear3.scaleY = .3;
        gear3.regX=150;
        gear3.regY = 150;

        //left robot arm
        var left = new createjs.Bitmap("images/left.png");
        left.scaleX = .50;
        left.scaleY = .50;
        left.x = 0;
        left.y = 260;


        //right robot arm
        var right = new createjs.Bitmap("images/right.png");
        right.scaleX = .50;
        right.scaleY = .50;
        right.x = 680;
        right.y = 260;


        //tile holder
        var holder = new createjs.Bitmap("images/holder2.jpg");
        holder.y=550;
        holder.x=225;

        //all the tiles
        var t1 = new createjs.Bitmap("images/s1.jpg");
        var t2 = new createjs.Bitmap("images/s2.jpg");
        var t3 = new createjs.Bitmap("images/s3.jpg");
        var t4 = new createjs.Bitmap("images/s7.jpg");
        var t5 = new createjs.Bitmap("images/s8.jpg");
        var t6 = new createjs.Bitmap("images/s10.jpg");

        var next = function(){


                stage.removeAllChildren();
                stage.update();
                stage.addChild(text);
                stage.addChild(text2);
                box.x = 400;
                box.y = 260;
                gear.x=440;
                gear.y = 290;
                gear2.x=440;
                gear2.y = 350;
                gear3.x=575;
                gear3.y = 420;
                t1.y=600;
                t1.x=260;
                t1.scaleX = t1.scaleY = 1.
                t2.y=600;
                t2.x=350;
                t2.scaleX = t2.scaleY = 1.
                t3.y=600;
                t3.x=440;
                t3.scaleX = t3.scaleY = 1.
                t4.y=600;
                t4.x=530;
                t4.scaleX = t4.scaleY = 1.
                t5.y=600;
                t5.x=620;
                t5.scaleX = t5.scaleY = 1.
                t6.y=600;
                t6.x=710;
                t6.scaleX = t6.scaleY = 1.

                //populate the stage
                stage.addChild(box);
                stage.addChild(gear);
                stage.addChild(gear2);
                stage.addChild(gear3);
                stage.addChild(holder);
                stage.addChild(right);
                stage.addChild(left);
                //make a button
                var background = new createjs.Shape();
		background.name = "background";
		background.graphics.beginFill("gray").drawRoundRect(0, 0, 150, 60, 10);

                var label = new createjs.Text("Next", "bold 24px Arial", "#FFFFFF");
                label.name = "label";
                label.textAlign = "center";
                label.textBaseline = "middle";
                label.x = 150/2;
                label.y = 60/2;

                var button = new createjs.Container();
                button.name = "button";
                button.x = 450;
                button.y = 735;
                button.addChild(background, label);
                button.on("click", handleClick);

                stage.addChild(button);
                //turn off the button
                button.mouseEnabled = false;

        //possible choices
                var choices = [t1,t2,t3,t4,t5,t6]
                for(var t=0; t< choices.length;t++) {
                        stage.addChild(choices[t]);
                        choices[t].shadow = new createjs.Shadow("#808080", 3, 3, 0);
                        choices[t].on("mouseover", function(evt){this.shadow = new createjs.Shadow("#49e17a", 3, 3, 25);});
                        choices[t].on("mouseout", function(evt){this.shadow = new createjs.Shadow("#808080", 3, 3, 0);});

                }


                //our arguments!
                f1 = new createjs.Bitmap("images/s1.jpg");
                f2 = new createjs.Bitmap("images/s2.jpg");
                f3 = new createjs.Bitmap("images/s3.jpg");
                f4 = new createjs.Bitmap("images/s7.jpg");
                args1 = [f1,f2,f3,f4];
                for(var f=0; f< args1.length;f++){
                        args1[f].x=355;
                        args1[f].y=335;
                }
                a1 = new createjs.Bitmap("images/s1.jpg");
                a2 = new createjs.Bitmap("images/s2.jpg");
                a3 = new createjs.Bitmap("images/s3.jpg");
                a4 = new createjs.Bitmap("images/s7.jpg");
                args2 = [a1,a2,a3,a4];
                for(var f=0; f< args2.length;f++){
                        args2[f].x=655;
                        args2[f].y=335;
                }


                //moving the arms, with their arguments
               arg1 = args1[Math.floor(Math.random() * args1.length)]
               arg2 = args2[Math.floor(Math.random() * args2.length)]
               correct = choices[Math.floor(Math.random() * choices.length)]
               arg1.regX = 40;
               arg1.regY = 35;
               arg2.regX=40;
               arg2.regY=35;
               stage.addChild(arg1);
               stage.addChild(arg2);

               //some funky movement now!

               //move the left arm
                createjs.Tween.get(left, {loop:false})
                        .to({ x: 115 }, 1200, createjs.Ease.none)
                        .to({ x: 0 }, 1200, createjs.Ease.none)
                //move the first argument with the left arm
                createjs.Tween.get(arg1, {loop:false})
                        .to({ x: 445 }, 1200, createjs.Ease.none)
                        .to({rotation: 360},500)
                        .to({ alpha: .6, x:515 }, 500, createjs.Ease.getPowInOut(2))

                //move the right arm
                createjs.Tween.get(right, {loop:false})
                        .to({ x: 570 }, 1200, createjs.Ease.none)
                        .to({ x: 680 }, 1200, createjs.Ease.none)
                //move the second argument with the right arm
                createjs.Tween.get(arg2, {loop:false})
                        .to({ x: 550 }, 1200, createjs.Ease.none)
                        .to({rotation: -360},500)
                        .to({ alpha: .6, x:515 }, 500, createjs.Ease.getPowInOut(2))
                arg1.shadow = new createjs.Shadow("yellow", 3, 3, 25)
                arg2.shadow = new createjs.Shadow("yellow", 3, 3, 25)

                //rotate the gears all cute-like and whatnot
                createjs.Tween.get(gear, {loop:false})
                        .wait(900)
                        .to({rotation: 360},2000)
                createjs.Tween.get(gear2, {loop:false})
                        .wait(900)
                        .to({rotation: 360},2000)
                createjs.Tween.get(gear3, {loop:false})
                        .wait(900)
                        .to({rotation: 360},2000)


                stage.removeChild(correct);
                stage.addChild(correct);
                //show the correct!
                createjs.Tween.get(correct, {loop:false})
                        .wait(2500)
                        .call(turncolor)
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({ alpha: .6, x:470, y:290 }, 500, createjs.Ease.getPowInOut(2))
                        .to({ alpha: 1, x:470, y:290 }, 500, createjs.Ease.getPowInOut(2))
                        .to({x:470,y:290})
                        .wait(500)
                        .to({y:280},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:290},400)
                        .wait(500)
                        .to({y:280},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:290},400)
                        .wait(500)
                        .to({y:280},400)
                        .to({scaleX: 1, scaleY: 1})
                        .to({scaleX: 1.2, scaleY: 1.2})
                        .to({y:290},400)
                        .call(turnback)
                        .call(lightbutton)



                function turncolor() {
                        correct.shadow=new createjs.Shadow("yellow", 3, 3, 25);
                }
                function turnback() {
                        correct.shadow=new createjs.Shadow("#808080", 3, 3, 0);
                }
                //light up the next button
                function lightbutton(){
                         background.graphics.beginFill("#1a8cff").drawRoundRect(0, 0, 150, 60, 10);
                         button.mouseEnabled = true;
                         button.onClick = handleClick;
                }

        }
        //////////////////////////////////////END OF THE NEXT FUNCTION//////////////////////////////////

        //first intro panel (passes to next intros)
        var intro = function(){

                //make the next button for instructions
                var background = new createjs.Shape();
                background.name = "background";
                background.graphics.beginFill("#1a8cff").drawRoundRect(0, 0, 150, 60, 10);

                var label = new createjs.Text("Next", "bold 24px Arial", "#FFFFFF");
                label.name = "label";
                label.textAlign = "center";
                label.textBaseline = "middle";
                label.x = 150/2;
                label.y = 60/2;
                var instruct = new createjs.Container();
                instruct.name = "button";
                instruct.x = 450;
                instruct.y = 735;
                instruct.addChild(background, label);
                instruct.on("click", function(){intro2(instruct,pressnext)});
                stage.addChild(instruct);

                var instructions = new createjs.Text("Welcome the the Concept Factory. Here, we put things together!", "bold 30px Arial","white");
                instructions.x = 30;
                instructions.y = 200;
                var pressnext = new createjs.Text("Press Next to continue.","20px Arial","black");
                pressnext.x = 100;
                pressnext.y = 250;
                stage.addChild(pressnext);
                instructions.shadow= new createjs.Shadow("black",2,2,0);
                var robot = new createjs.Bitmap("images/robot.png");
                robot.x = 650;
                robot.y = 350;
                robot.scaleX=1.2;
                robot.scaleY=1.2;
                stage.addChild(robot);
                stage.addChild(instructions);





        };
        //second intro panel
        var intro2 = function(instruct,pressnext){

                //Displays the box!
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(290, 350, 380, 100, 10);

                var instructions = new createjs.Text("Here is our special box. \nWhen we put two objects into the box, \nthey transform to create something new!", "15px Arial","black");
                instructions.x=300;
                instructions.y=360;
                var contain = new createjs.Container();
                contain.addChild(back,instructions);

                stage.removeChild(pressnext);
                stage.addChild(contain);
                stage.addChild(box);
                gear.x = 90;
                gear.y = 350;
                gear2.x = 90;
                gear2.y = 410;
                gear3.x = 225;
                gear3.y = 480

                stage.addChild(gear);
                stage.addChild(gear2);
                stage.addChild(gear3);

                box.x=50;
                box.y = 320;
                instruct.on("click",function(){intro3(instruct,contain)});


        }
        //third intro panel
        var intro3 = function(instruct,oldinstructions){
                //displays the equipment!
                stage.removeChild(oldinstructions);
                //stage.addChild(oldinstructions);
                var instructions = new createjs.Text("And here is our special equipment! \nWe found these tiles in the basement... ", "15px Arial","black");
                instructions.x = 300;
                instructions.y = 450;
                stage.addChild(instructions);
                t1.y = t2.y = t3.y =565;
                t1.x = 300;
                t2.x=390;
                t3.x=480;
                t1.shadow = t2.shadow = t3.shadow = new createjs.Shadow("#808080", 3, 3, 0);
                stage.addChild(t1,t2,t3);
                instruct.on("click",function(){intro4(instruct,instructions)});


        }
        var intro4 = function(instruct,oldinstructions){
                instruct.off("")

                stage.removeChild(oldinstructions);

                var instructions = new createjs.Text("\nWe accidentally found out that if you combine them,\nthey make new things!!!", "15px Arial","black");
                instructions.x = 300;
                instructions.y = 650;
                stage.addChild(instructions);
                t1.y = t2.y = t3.y =565;
                t1.x = 300;
                t2.x=390;
                t3.x=480;
                t1.shadow = t2.shadow = t3.shadow = new createjs.Shadow("#808080", 3, 3, 0);
                stage.addChild(t1,t2,t3);

                instruct.on("click",next);


        }
        //the first trial
        intro();
        function handleClick(evt){
               next();

        }



}
//call game
game();




//reload frames
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);
