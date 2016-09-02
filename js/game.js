
//set up the stage
var canvas = document.getElementById("canvas");
var stage = new createjs.Stage(canvas);
stage.enableMouseOver();

//stimuli
tiles = ["images/o1.png","images/o2.png", "images/o3.png","images/o4.png","images/o5.png","images/o6.png"]


//here is the whole thing!
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
        box.scaleX = box.scaleY = .50;
        box.x = 400;
        box.y = 260;
        box.regX= box.regY= 50;
        var gear = new createjs.Bitmap("images/gear.png");
        gear.scaleX = gear.scaleY = .3;
        gear.regX=150;
        gear.regY = 150;
        var gear2 = new createjs.Bitmap("images/gear.png");
        gear2.scaleX = gear2.scaleY = .2;
        gear2.regX=150;
        gear2.regY = 150;
        var gear3 = new createjs.Bitmap("images/gear.png");
        gear3.scaleX =gear3.scaleY = .3;
        gear3.regX=150;
        gear3.regY = 150;

        //left robot arm
        var left = new createjs.Bitmap("images/left.png");
        left.scaleX = left.scaleY = .50;
        left.x = 0;
        left.y = 260;


        //right robot arm
        var right = new createjs.Bitmap("images/right.png");
        right.scaleX = right.scaleY = .50;
        right.x = 680;
        right.y = 260;


        //tile holder
        var holder = new createjs.Bitmap("images/holder2.jpg");
        

        //all the tiles
        var t1 = new createjs.Bitmap(tiles[0]);
        var t2 = new createjs.Bitmap(tiles[1]);
        var t3 = new createjs.Bitmap(tiles[2]);
        var t4 = new createjs.Bitmap(tiles[3]);
        var t5 = new createjs.Bitmap(tiles[4]);
        var t6 = new createjs.Bitmap(tiles[5]);
        
        //intro tiles for example only!
        var it1 = new createjs.Bitmap(tiles[0]);
        var it2 = new createjs.Bitmap(tiles[1]);
        var it3 = new createjs.Bitmap(tiles[2]);
        var it4 = new createjs.Bitmap(tiles[3]);
        var it5 = new createjs.Bitmap(tiles[4]);
        var it6 = new createjs.Bitmap(tiles[5]);
        it1.regX=it1.regY=it2.regX=it2.regY=it3.regX=it3.regY=it4.regX=it4.regY=it5.regX=it5.regY=it6.regX=it6.regY=50;
        var next = function(){

                stage.removeChild(it3);
                stage.removeAllChildren();
                stage.update();
                //it1.regX=it1.regY=it2.regX=it2.regY=it3.regX=it3.regY=it4.regX=it4.regY=it5.regX=it5.regY=it6.regX=it6.regY=0;
                holder.scaleX=holder.scaleY=1;
                holder.y=550;
                holder.x=225;
                box.regX=box.regY=0;
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

                //populate the stage
                stage.addChild(box,gear,gear2,gear3,holder,right,left,text,text2,button);
                
                //turn off the button
                button.mouseEnabled = false;

        //possible choices
                var choices = [t1,t2,t3,t4,t5,t6]
                for(var t=0; t< choices.length;t++) {
                        stage.addChild(choices[t]);
                        //choices[t].shadow = new createjs.Shadow("#808080", 3, 3, 0);
                        choices[t].on("mouseover", function(evt){this.shadow = new createjs.Shadow("#49e17a", 3, 3, 25);});
                        choices[t].on("mouseout", function(evt){this.shadow = new createjs.Shadow("#808080", 3, 3, 0);});

                }


                //our arguments!
                f1 = new createjs.Bitmap("images/o1.png");
                f2 = new createjs.Bitmap("images/o2.png");
                f3 = new createjs.Bitmap("images/o3.png");
                f4 = new createjs.Bitmap("images/o4.png");
                argo1 = [f1,f2,f3,f4];
                for(var f=0; f< argo1.length;f++){
                        argo1[f].x=355;
                        argo1[f].y=335;
                }
                a1 = new createjs.Bitmap("images/o1.png");
                a2 = new createjs.Bitmap("images/o2.png");
                a3 = new createjs.Bitmap("images/o3.png");
                a4 = new createjs.Bitmap("images/o4.png");
                argo2 = [a1,a2,a3,a4];
                for(var f=0; f< argo2.length;f++){
                        argo2[f].x=655;
                        argo2[f].y=335;
                }


                //moving the arms, with their arguments
               arg1 = argo1[Math.floor(Math.random() * argo1.length)]
               arg2 = argo2[Math.floor(Math.random() * argo2.length)]
               correct = choices[Math.floor(Math.random() * choices.length)]
               arg1.regX = 40;
               arg1.regY = 35;
               arg2.regX=40;
               arg2.regY=35;
               stage.addChild(arg1,arg2);
               

               //some funky movement now!

               //move the left arm
                createjs.Tween.get(left, {loop:false})
                        .to({ x: 115 }, 1200, createjs.Ease.none)
                        .to({ x: 0 }, 1200, createjs.Ease.none)
                //move the first argument with the left arm
                createjs.Tween.get(arg1, {loop:false})
                        .to({ x: 445 }, 1200, createjs.Ease.none)
                        .to({rotation: 360},500)
                        .to({ alpha: 0, x:515 }, 500, createjs.Ease.getPowInOut(2))

                //move the right arm
                createjs.Tween.get(right, {loop:false})
                        .to({ x: 570 }, 1200, createjs.Ease.none)
                        .to({ x: 680 }, 1200, createjs.Ease.none)
                //move the second argument with the right arm
                createjs.Tween.get(arg2, {loop:false})
                        .to({ x: 550 }, 1200, createjs.Ease.none)
                        .to({rotation: -360},500)
                        .to({ alpha: 0, x:515 }, 500, createjs.Ease.getPowInOut(2))
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
                        .to({ alpha:.6, x:470, y:290 }, 500, createjs.Ease.getPowInOut(2))
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
                var instruct = makebutton();
                
                //start the instruction dialogue
                var instructions = new createjs.Text("Welcome the the Concept Factory!", "bold 50px Arial","white");
                instructions.x = 30;
                instructions.y = 100;
                instructions.shadow= new createjs.Shadow("black",2,2,10);
                var pressnext = new createjs.Text("Press Next to continue.","20px Arial","black");
                pressnext.x = 100;
                pressnext.y = 180;
                
                
                //draw Marvin
                var robot = new createjs.Bitmap("images/robot.png");
                robot.x = 20;
                robot.y = 350;
                robot.scaleX=1.2;
                robot.scaleY=1.2;
                
                //populate the stage
                stage.addChild(robot,instructions,pressnext,instruct);
                
                //point the button
                instruct.on("click", function(){stage.removeChild(instruct);intro2()});

        };
        //second intro panel
        var intro2 = function(){
                
                var instruct = makebutton();

                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 260, 50, 10);

                var instructions = new createjs.Text("Hi, uhh, I'm your robot guide, Marvin. \nI work here at the Factory.", "15px Arial","black");
                instructions.x=110;
                instructions.y=280;
                var contain = new createjs.Container();
                contain.addChild(back,instructions);

                
                stage.addChild(contain,instruct);
                
                instruct.on("click",function(){stage.removeChild(instruct);stage.removeChild(contain);intro3()});


        };
        //third intro panel
        var intro3 = function(){
                var instruct = makebutton();
                
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 350, 60, 10);

                var instructions = new createjs.Text("Here at the factory, we are in the business of, uhh...\n turning things into other things!", "15px Arial","black");
                instructions.x=110;
                instructions.y=280;
                var contain = new createjs.Container();
                contain.addChild(back,instructions);

                
                stage.addChild(contain, instruct);
               
                instruct.on("click",function(){stage.removeChild(instruct);stage.removeChild(contain);intro4()});


        }
        //fourth intro panel
        var intro4 = function(){
                var instruct = makebutton();
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 370, 40, 10);
                

                var instructions = new createjs.Text("We recently found tiles like these in the basement...", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                var contain = new createjs.Container();
                contain.addChild(back,instructions);
               
               //display some example tiles
                it1.y = it2.y = it3.y =345;
                it1.x = 280;
                it2.x=390;
                it3.x=380;
                it1.shadow = it2.shadow = it3.shadow = new createjs.Shadow("#808080", 3, 3, 0);
                stage.addChild(it1,it2,contain,instruct);
                
                //bounce the tiles up and down
                createjs.Tween.get(it1,{loop:false})
                        .to({y:it1.y-10},700)
                        .to({y:it1.y+10},700)
                createjs.Tween.get(it2,{loop:false})
                        .to({y:it2.y-10},700)
                        .to({y:it2.y+10},700)
                        
                //remove the animations and move on
                instruct.on("click",function(){stage.removeChild(instruct);stage.removeChild(contain);createjs.Tween.removeTweens(it1);createjs.Tween.removeTweens(it2);intro5()});


        }
        //fifth intro panel
        var intro5 = function(){
                var instruct = makebutton();
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 430, 40, 10);
                var contain = new createjs.Container();
                
                var instructions = new createjs.Text("So we tried to put them in our Special Transform-O Box 3000...", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
                
                //draw the box! Apparently it is called the Special Transform-O Box 3000.
                gear.x = 540;
                gear.y = 350;
                gear2.x = 540;
                gear2.y = 410;
                gear3.x = 675;
                gear3.y = 480
                box.x=525;
                box.y = 350;
                var box_contain = new createjs.Container();
                box_contain.addChild(box,gear,gear2,gear3);
               
                stage.addChild(contain,box_contain,instruct);
                
                //bounce the box
                createjs.Tween.get(box_contain,{loop:false})
                        .to({y:box_contain.y-10},700)
                        .to({y:box_contain.y+10},700)
                        
                //remove the animations and move on
                instruct.on("click",function(){stage.removeChild(instruct);createjs.Tween.removeTweens(box_contain);stage.removeChild(contain);intro6();});


        }
        //sixth intro panel
        var intro6 = function(){
                var instruct = makebutton();
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 350, 50, 10);
                var contain = new createjs.Container();
                var instructions = new createjs.Text("We discovered that if you combine them in the box, \nthey turn into something else!", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
                
                //position the tiles
                it1.y = it2.y = 345;
                it1.x = 280;
                it2.x=390;
                it3.x=570;
                it3.y=375;
                it1.shadow = it2.shadow = it3.shadow = new createjs.Shadow("#808080", 3, 3, 0);
                stage.addChild(it1,it2,instruct,contain);
                it3.scaleX=it3.scaleY=1.2;
                it3.alpha=0;
                
                //move the tiles into the box
                createjs.Tween.get(it1,{loop:true})
                        .wait(200)
                        .to({alpha:0,x:570, y:375},1500)
                        .wait(1000)
                createjs.Tween.get(it2,{loop:true})
                        .wait(200)
                        .to({alpha:0,x:570, y:375},1500)
                        .wait(1000)  
                createjs.Tween.get(it3,{loop:true})
                        
                        .wait(1500)
                        .call(function(){stage.addChild(it3)})
                        .call(function(){it3.shadow= new createjs.Shadow("yellow",3,3,25)})
                        
                        .to({alpha:1},400)
                        .wait(800)
                        .call(function(){stage.removeChild(it3)})   
                
                //remove the animations and move on
                instruct.on("click",function(){stage.removeChild(instruct);stage.removeChild(contain);stage.removeChild(it1);stage.removeChild(it2);createjs.Tween.removeTweens(it3);createjs.Tween.removeTweens(it2);createjs.Tween.removeTweens(it1);intro7();});


        }
        //seventh intro panel
           var intro7 = function(){
                var instruct = makebutton();
                
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 360, 30, 10);
                var contain = new createjs.Container();
                
                var instructions = new createjs.Text("The only problem is... we can't figure out the pattern.", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
                
                //draw the little question tiles? what equals what? pattern how??!!
                it1.y = it2.y = 345;
                it1.x = 230;
                it2.x=330;
                it3.x=570;
                it3.y=375;
                it1.alpha=it2.alpha=it3.alpha=1;
                it1.scaleX=it1.scaleY=it2.scaleX=it2.scaleY=.6;
                it3.scaleX=it3.scaleY=1.2;
                //it3.shadow = new createjs.Shadow("yellow",3,3,25);
                quest = makequestion(it1,it2,it1.x,it1.y);
                stage.addChild(contain,instruct,quest);
  
                
                
                instruct.on("click",function(){stage.removeChild(instruct,contain);intro8();});


        }
        //eigth intro panel
         var intro8 = function(){
                var instruct = makebutton();
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 400, 60, 10);
                var contain = new createjs.Container();
                
                var instructions = new createjs.Text("We have a bunch of tiles... meaning lots of combinations!\nWe could really use your help to figure out the patterns.", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
               
                it1.y = it2.y = 345;
                it1.x = 230;
                it2.x=330;
                
                it1.alpha=it2.alpha=it3.alpha=1;
                it1.scaleX=it1.scaleY=it2.scaleX=it2.scaleY=.6;

                it4.y = it5.y = 415;
                it4.x = 240;
                it5.x=340;
                it6.x=260;
                it6.y=it3.y=485;
                it3.x=360;
                
                it4.scaleX=it4.scaleY=it5.scaleX=it5.scaleY=it6.scaleX=it6.scaleY=it3.scaleX=it3.scaleY=.6;
                it4.shadow=it5.shadow=it6.shadow=it3.shadow=new createjs.Shadow("gray",3,3,0);
                
                var quest2 = makequestion(it4,it5,it4.x,it4.y);
                var quest3 = makequestion(it6,it3,it6.x,it6.y);
                stage.addChild(contain,instruct,quest,quest2,quest3);
                
                instruct.on("click",function(){stage.removeChild(quest,quest2,quest3,contain,instruct);intro9();});


        }
        //ninth intro panel
          var intro9 = function(){
                var instruct = makebutton();
                
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 390, 70, 10);
                var contain = new createjs.Container();
                
                var instructions = new createjs.Text("So here's how it will work. I will show you some of the \ncombinations that we DO know. Then I will ask you to \npredict the answer to a brand new combination.", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
                
                
                it4.y = it5.y = 380;
                it4.x = 480;
                it5.x=750;
                it4.scaleX=it4.scaleY=it5.scaleX=it5.scaleY=1;
                it4.regX=it5.regX=it4.regY=it5.regY=50;
                
                stage.addChild(it4,it5,instruct,contain);
                
                createjs.Tween.get(it4, {loop:true})
                        .to({ x: 570 }, 1200, createjs.Ease.none)
                        .to({rotation: 360},500)
                        .to({ alpha: 0, x:615 }, 500, createjs.Ease.getPowInOut(2))
                        .wait(800)

               
                createjs.Tween.get(it5, {loop:true})
                        .to({ x: 660 }, 1200, createjs.Ease.none)
                        .to({rotation: -360},500)
                        .to({ alpha: 0, x:625 }, 500, createjs.Ease.getPowInOut(2))
                        .wait(800)
                it1.alpha=0;
                it1.scaleX=it1.scaleY=1.2;
                it1.x=570;
                it1.y=370;
                it1.shadow=new createjs.Shadow("yellow",3,3,25);
                createjs.Tween.get(it1,{loop:true})
                        .wait(1800)
                        .call(function(){stage.addChild(it1)})
                        .to({alpha:1,x:570,y:370},400)
                        .wait(800)
                        .call(function(){stage.removeChild(it1)})
                        
                it4.shadow = new createjs.Shadow("yellow", 3, 3, 25)
                it5.shadow = new createjs.Shadow("yellow", 3, 3, 25)
                
                //make the little copies
                
                it1_copy = new createjs.Bitmap("images/o5.png");
                it1_copy.scaleX=it1_copy.scaleY = .6;
                it1_copy.regX=it1_copy.regY=50;
                it1_copy.x = 505;
                it1_copy.y = 560;
                it1_copy.shadow = new createjs.Shadow("gray",3,3,0);
                it4_copy = new createjs.Bitmap("images/o4.png");
                it4_copy.scaleX=it4_copy.scaleY = .6;
                it4_copy.x = 605;
                it4_copy.y = 560;
                it4_copy.regX=it4_copy.regY=50;
                it4_copy.shadow = new createjs.Shadow("gray",3,3,0);
                
                
                
                var quest = makequestion(it1_copy,it4_copy,it1_copy.x,it1_copy.y);
                stage.addChild(quest);

                instruct.on("click",function(){stage.removeChild(instruct,contain);intro10()});


        }
        //tenth intro panel
        var intro10 = function(){
        
                var instruct = makebutton();
                var back = new createjs.Shape();
                back.name = "back";
                back.graphics.beginFill("white").drawRoundRect(100, 270, 390, 70, 10);
                var contain = new createjs.Container();
                
                var instructions = new createjs.Text("You will select from the options in the panel on the \nbottom of the screen. Click on the answer that you think \nfits the pattern.", "15px Arial","black");
                instructions.x = 110;
                instructions.y = 280;
                contain.addChild(back,instructions);
                
                holder.scaleX=holder.scaleY = .5;
                holder.x = 450;
                holder.y=610;
                stage.addChild(holder,contain,instruct);
                c1 = new createjs.Bitmap("images/o1.png");
                c2 = new createjs.Bitmap("images/o4.png");
                c3 = new createjs.Bitmap("images/o5.png");
                c1.x = 500;
                c2.x= 570;
                c3.x = 630;
                choices = [c1,c2,c3];
                
                for(c=0;c< choices.length;c++){
                        choices[c].scaleX=choices[c].scaleY = .6;
                        choices[c].shadow = new createjs.Shadow("gray",3,3,0);
                        choices[c].y = 620;
                        choices[c].on("mouseover", function(evt){this.shadow = new createjs.Shadow("#49e17a", 3, 3, 25);});
                        choices[c].on("mouseout", function(evt){this.shadow = new createjs.Shadow("#808080", 3, 3, 0);});
                        choices[c].on("click", function(evt){});
                        stage.addChild(choices[c]);
                
                };
                
                
                
                instruct.on("click",function(){createjs.Tween.removeTweens(it1); next();});
        
        
        
        }
        
        //start the intro sequence
        intro();
        
        //this is the next for the trials
        function handleClick(evt){
                
                next();

        }
        
        function makebutton(){
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
                
                return instruct;
        
        
        
        }
        
        function makequestion(arg1,arg2,x,y){
                var plus = new createjs.Text("+","bold 40px Arial","black")
                plus.y = y;
                plus.x = x+60;
                var equal = new createjs.Text("= ?","bold 40px Arial","black")
                equal.y = y;
                equal.x = x+155;
                var quest = new createjs.Container();
                quest.addChild(arg1,arg2,plus,equal);
                
                return quest;
        
        
        }
        
      



}
//call game
game();




//reload frames
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick", stage);
