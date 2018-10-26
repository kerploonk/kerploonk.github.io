// Hér kemur kóðinn þinn:
  var x = 100;
  var y = 100;

  var AntennaHeightL = 40;
  var AntennaHeightR = 40;

  var EyeHeight = 20;
  var EyeWidth = 20;

  var MouthHeight = 25;
  var MouthWidth = 25;

  var EarHeightR = 110;
  var EarWidthR = 225;
  var EarHeightL = 110;
  var EarWidthL =  75;



  function setup(){
    createCanvas (300,300);
  }

  function draw(){
    background(211,8,8);

    // haus
    fill(60,223,34);
    rect(x, y, 100,100, 20);

    //loftnet
    fill(60,223,34)
    strokeWeight(4);
    line(125, 100, 125, AntennaHeightL);

    fill(60,223,34)
    strokeWeight(4);
    line(175, 100, 175, AntennaHeightR);

    //augu
    fill(0)
    ellipse(x+20,y+20, EyeWidth, EyeHeight);

    fill(0)
    ellipse(x+20,y+45, EyeWidth, EyeHeight);

    fill(0)
    ellipse(x+80,y+20, EyeWidth, EyeHeight);

    fill(0,0,0)
    ellipse(x+80,y+45, EyeWidth, EyeHeight);

    //munnur
    fill(75,25,25)
    ellipse(x+50,y+80, MouthWidth, MouthHeight);

    //eyru
    fill(60,223,34);
    triangle(x+100,y+25,x+100,y+75,EarWidthR, EarHeightR);
    triangle(x,y+25,x,y+75,EarWidthL, EarHeightL);

    //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

  }

  function mousePressed(){
    //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
    AntennaHeightL = random(30, 70);
    AntennaHeightR = random(30, 70);
    EyeHeight = random(10, 20);
    EyeWidth = random(10, 20);
    MouthHeight = random(5,25);
    MouthWidth = random(5,25);
    EarWidthR = random(220,230)
    EarHeightR = random(105,115)
    EarWidthL = random(70,80)
    EarHeightL = random(105,115)

  }
