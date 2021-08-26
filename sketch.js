function setup() {
  createCanvas(600, 400);
  slider1 = createSlider(120,200,150)
  slider1.position(9,675)
  slider2 = createSlider(30,120,80)
  slider2.position(9,715)
  slider3 = createSlider(210,315,250)
  slider3.position(150,677)
  slider4 = createSlider(100,200,150)
  slider4.position(150,715)
  
  slider5 = createSlider(210,315,210)
  slider5.position(310,677)
  slider6 = createSlider(100,200,100)
  slider6.position(310,715)
  
  slider7 = createSlider(220,310,220)
  slider7.position(475,677)
  

}

function draw() {
  //sky
  background(135,206,250);
  //ground
  fill(181, 101, 29);
  rect(0,300, 600,100);
  // Building
  fill(255, 229, 180);
  rect(200,slider2.value(), slider1.value(),(200 + 100-slider2.value()));
  //building extension
  rect(350,200,75,100);
  //Window 1
  fill(255, 255 ,255);
  rect(slider3.value(),slider4.value(), 25,40);
  //Window 2
  rect(slider5.value(),slider6.value(), 25,40);
  //Door
  rect(slider7.value(),260, 20,40);
  //tree left  1
  fill(114,92,66);
  rect(120,200, 10,100);
  fill(42,126,25);
  ellipse(124,200, 70,70);
  //tree left 2 smaller
  fill(114,92,66);
  rect(46,200, 10,100);
  fill(42,126,25);
  ellipse(50,220, 40,40);
  //tree right 1
  fill(114,92,66);
  rect(520,200, 10,100);
  fill(42,126,25);
  ellipse(525,218, 40,40);
  text('red', 20, 400)
  
  
  
  
  line(0, 300, 600, 300);
  //
}