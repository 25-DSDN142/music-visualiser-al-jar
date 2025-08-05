// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(20)
   
   //variables
   angleMode(DEGREES);
   rectMode(CENTER);
   let midX = canvasWidth/2;
   let midY = canvasHeight/2;



   //MAPS
   //let mapName = map(variable, OgMin, OgMax, NewMin, NewMax);
   //pretty much all the OG values are from 0-100!!!!! 
   //second range is anything u want it to be
 
   let linePosX = map(drum, 0,100, 60, 900);
   let linePosY = map(bass,0,100,60,900);

   let voMap = map(vocal, 0, 100, 10,950);
   let antiVoMap = map(vocal, 0, 100, 950,10);

   let rectScale = map(vocal,0,100,200,800);  
   let rotRect = map(vocal, 0,100,270,360)
   let yRect = map(drum,60,100,400,600);

   // stroke(255);
   // strokeWeight(7);
   // fill(255, backEllipse);
   // ellipse(midX, midY, 900);
   // fill(255, backEllipse);
   // ellipse(midX, midY, 600);
   
   

   strokeWeight(7);
   stroke(150,0,0);
   //top
   line(0,0, linePosX, linePosY);
   line(midX,0, linePosX, linePosY);
   line(midX*2,0, linePosX, linePosY);
   //bottom
   line(0,midY*2, linePosX, linePosY);
   line(midX,midY*2, linePosX, linePosY);
   line(midX*2,midY*2, linePosX, linePosY);

   noStroke();
   if(drum > 75){
      rect(midX, midY*2, midX*2, yRect)
   }
   
   stroke(255);
   strokeWeight(5);
   
   if(vocal > 75){
      textFont('Impact');

      push();
      translate(midX, midY);
         fill(29, 13, 79);
         noStroke();
         rotate(rotRect);
         rect(0,0,rectScale)
      pop();

   } else if (vocal < 25) {
      textFont('Helvetica');
   } else {
      textFont('Courier New');
   }

   textAlign(CENTER)
   textSize(100);
   fill(230,200,0);
   strokeWeight(0);
   text(words, midX, midY);
}