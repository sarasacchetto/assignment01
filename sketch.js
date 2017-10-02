function setup() {
  createCanvas(800,600);
   // Set here the values that are not changing all over the sketch
  
}

function draw() {
  strokeWeight(2);
  stroke(0,0,0);
    // Antennas
      line(330,150,375,200);   //sx
      line(420,50,375,200);   //centro
      line(410,205,460,220);  //dx
    
  
  // Neck
      line(360,200,360,300);   //sn
      line(375,200,375,300);  //centro
      line(390,200,390,300);  //dx
      
  // Head
        
      ellipse(375,200,100,100); //testa nera
        fill(200,200,200);
      ellipse(365,190,10,10);  //grigio sx
      ellipse(395,173,8,8);   //grigio sopra
      ellipse(410,205,5,5);   //grigio dx
        fill(250,250,250);
      ellipse(390,195,30,30);   //occhio bianco
        fill(0,0,0);
      ellipse(390,195,3,3);     //pupilla nera

  // Body
        fill(0,250,250);
        noStroke();
      ellipse(360,450,70,70);    //piedi
        fill(0,0,0);
      rect(310,300,100,150);    //corpo
        strokeWeight(6);
        stroke(0,0,250);
      line(310,330,410,330);    //linea centrale
  


}