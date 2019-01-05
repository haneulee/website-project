
import ddf.minim.*;

Minim minim = new Minim(this);

AudioPlayer playDo;
AudioPlayer playRe;
AudioPlayer playMi;
AudioPlayer playPa;
AudioPlayer playSol;
int wait;

int Do;
int Re;
int Mi;
int Pa;
int Sol;

int D;
int R;
int M;
int P;
int S;

int Last_Do;
int Last_Re;
int Last_Mi;
int Last_Pa;
int Last_Sol;

void setup(){
  //size(450,400,P3D);
  size(640,360,P3D);
  //fullScreen(P3D);
  
  playDo = minim.loadFile("/static/images/p_jung.mp3");
  playRe = minim.loadFile("/static/images/p_im.mp3");
  playMi = minim.loadFile("/static/images/p_mu.mp3");
  playPa = minim.loadFile("/static/images/p_hwang.mp3");
  playSol = minim.loadFile("/static/images/p_tae.mp3");
  
  //playDo = minim.loadFile("p_jung.mp3");
  //playRe = minim.loadFile("p_im.mp3");
  //playMi = minim.loadFile("p_mu.mp3");
  //playPa = minim.loadFile("p_hwang.mp3");
  //playSol = minim.loadFile("p_tae.mp3");
  
  Last_Do = 0;
  Last_Re = 0;
  Last_Mi = 0;
  Last_Pa = 0;
  Last_Sol = 0;

}

void draw(){
  background(#122639);
  lights();
  
  if (keyPressed == true) {
    if (key == 'a') {
      Do = 1;
      D = 0;
    } else if (key == 's') {
      Re = 1;
      R = 0;
    } else if (key == 'd') {
      Mi = 1;
      M = 0;
    } else if (key == 'f') {
      Pa = 1;
      P = 0;
    } else if (key == 'g') {
      Sol = 1;
      S = 0;
    }
  }
  
    //======================================== box
    float fov = PI/3.0; 
    float cameraZ = (height/2.0) / tan(fov/2.0); 
    perspective(fov*1.2, float(width)/float(height), cameraZ/2.0, cameraZ*2.0); 
    
    pushMatrix();
    noStroke();
    fill(255,255,255);
    translate(width/2+30, height/2-140, -25);
    rotateX(-PI/20); 
    rotateY(-PI/4);
    //top pillar
    box(30,30, 350);
    
    //bottom pillar
    translate(0, height/2 + 90, 0);
    box(30,30, 350); 
    
    //vertical pillar
    translate(0, -height/4 - 40, -height/2 + 20);
    rotateX(-PI/2);
    box(30,30, 290);
    popMatrix();
    
    
    
  if (Do > 0) {
    float period = 15;
    float amplitude = 15;
    float x = amplitude * cos(TWO_PI * frameCount / period);
  
    playD(x, true);
    
    if (D == 100) {
     resetD();
    }
    
    D++;
  } else {
    playD(0, false);
  }
  
 
  if (Re > 0) {
    float period = 15;
    float amplitude = 15;
    float x = amplitude * cos(TWO_PI * frameCount / period);
    
    playR(x, true);
    
    if (R == 100) {
      resetR();
    }
    
    R++;
  } else {
    playR(0, false);
  }
  
  
  if (Mi > 0) {
    float period = 15;
    float amplitude = 15;
    float x = amplitude * cos(TWO_PI * frameCount / period);
    
    playM(x, true);
    
    if (M == 100) {
      resetM();
    }
    
    M++;
  } else {
   playM(0, false); 
  }
  
  
  if (Pa > 0) {
    float period = 15;
    float amplitude = 15;
    float x = amplitude * cos(TWO_PI * frameCount / period);
    
    playP(x, true);
    
    if (P == 100) {
      resetP();
    }
    
    P++;
  } else {
    playP(0, false);
  }
  
  
  if (Sol > 0) {
    float period = 15;
    float amplitude = 15;
    float x = amplitude * cos(TWO_PI * frameCount / period);
    
    playS(x, true);
    
    if (S == 100) {
      resetS();
    }
    
    S++;
  } else {
    playS(0, false);
  }
  
  //======================================== sound control
  if(Do > 0) {
   if(Last_Do <= 0) {
     playDo.play();
     Last_Do = 1;
   }
  }
  else{
   Last_Do = 0;
  }
  
if(Re > 0) {
   if(Last_Re <= 0) {
     playRe.play();
     Last_Re = 1;
   }
  }
  else{
   Last_Re = 0;
  }
  
  if(Mi > 0) {
   if(Last_Mi <= 0) {
     playMi.play(0);
     Last_Mi = 1;
   }
  }
  else{
   Last_Mi = 0;
  }
  
   if(Pa > 0) {
   if(Last_Pa <= 0) {
     playPa.play(0);
     Last_Pa = 1;
   }
  }
  else{
   Last_Pa = 0;
  }
  
 if(Sol > 0) {
   if(Last_Sol <= 0) {
     playSol.play(0);
     Last_Sol = 1;
   }
  }
  else{
   Last_Sol = 0;
  }
}

void playD(float x, boolean isPlaying) {
  pushMatrix();
  rotateX(-PI/41); 
  rotateY(-PI/4);
  
  stroke(222,186,186);
  strokeWeight(2);
  noFill();
  translate(50, 0, -90);
  
  if (isPlaying) {
    //translate(random(-3,3), random(-3,3));
  }
  
  bezier(width/2 - 90, height/2 - 95, 0, width/2 - 90 + x, height/2 - 95, 0,width/2 - 90 + x, height/2 + 97, 0,width/2 - 90, height-97,0);
  popMatrix();
}

void playR(float x, boolean isPlaying) {
  pushMatrix();
  rotateX(-PI/41); 
  rotateY(-PI/4);
  stroke(85,87,91);
  strokeWeight(2);
  noFill();
  translate(40, 0, -125);
  
   if (isPlaying) {
    //translate(random(-3,3), random(-4,4));
  }
  bezier(width/2 - 90, height/2 - 100, 0, width/2 - 90 + x, height/2 - 100, 0, width/2 - 90 + x, height/2 + 100, 0, width/2 - 90, height-90, 0);
  
  popMatrix();
}

void playM(float x, boolean isPlaying) {
  pushMatrix();
  rotateX(-PI/41); 
  rotateY(-PI/4);
    
  stroke(217,106,41);
  strokeWeight(2);
  noFill();
  translate(40, 0, -160);
      
  if (isPlaying) {
    //translate(random(-3,3), random(-3,3));
  }
 
  bezier(width/2 - 90, height/2 - 103, 0,width/2 - 90 + x, height/2 - 103, 0,width/2 - 90 + x, height/2 + 103, 0,width/2 - 90, height-93, 0);
  
  popMatrix(); 
  
}

void playP(float x, boolean isPlaying) {
  pushMatrix();
  rotateX(-PI/41); 
  rotateY(-PI/4);
  
  stroke(22,20,38);
  strokeWeight(2);
  noFill();
  translate(40, 0, -200);
      
  if (isPlaying) {
    //translate(random(-3,3), random(-3,3));
  }
  bezier(width/2 - 90, height/2 - 103, 0,width/2 - 90 + x, height/2 - 95, 0,width/2 - 90 + x, height/2 + 95, 0,width/2 - 90, height-95, 0);
  
  popMatrix();
}

void playS(float x, boolean isPlaying) {
  pushMatrix();
  rotateX(-PI/41); 
  rotateY(-PI/4);
  stroke(68,59,44);
  strokeWeight(2);
  noFill();
  
  translate(40, 0, -240);
      
  if (isPlaying) {
    //translate(random(-2,2), random(-2,2));
  }
  bezier(width/2 - 90, height/2 - 105, 0,width/2 - 90 + x, height/2 - 98, 0,width/2 - 90 + x, height/2 + 98, 0,width/2 - 90, height-98, 0);
  
  popMatrix();
}

void resetD() {
  Do = 0;
  D = 0;
  key = 0;
}

void resetR() {
  Re = 0;
  R = 0;
  key = 0;
}

void resetM() {
  Mi = 0;
  M = 0;
  key = 0;
}

void resetP() {
  Pa = 0;
  P = 0;
  key = 0;
}

void resetS() {
  Sol = 0;
  S = 0;
  key = 0;
}