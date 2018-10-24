// Hér kemur kóðinn þinn:
  var x = 100;
  var y = 100;
  var antennaHeightL = 40;
  var antennaHeightR = 40;
  EyeHeight = 20;
  EyeWidth = 20;
  MouthHeight = 25;
  MouthWidth = 25;

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
    line(125, 100, 125, antennaHeightL);

    fill(60,223,34)
    strokeWeight(4);
    line(175, 100, 175, antennaHeightR);

    //augu
    fill(0)
    ellipse(x+20,y+20, EyeHeight, EyeWidth);

    fill(0)
    ellipse(x+20,y+45, EyeHeight, EyeWidth);

    fill(0)
    ellipse(x+80,y+20, EyeHeight, EyeWidth);

    fill(0)
    ellipse(x+80,y+45, EyeHeight, EyeWidth);


    //munnur
    ellipse(x+50,y+80, MouthHeight, MouthWidth)

    //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

  }

  function mousePressed(){
    //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
    antennaHeightL = random(30, 70);
    antennaHeightR = random(30, 70);
    EyeHeight = random(10, 20);
    EyeWidth = random(10, 20);
    MouthHeight = random(5,25);
    MouthWidth = random(5,25);
  }
