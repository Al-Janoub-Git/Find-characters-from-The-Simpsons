let img_inicio, img_instructiones;
let estado = "inicio";

// coordenadas del botón (puedes ajustar)
let btnX = 400;
let btnY = 350;
let btnW = 200;
let btnH = 80;

// Nombres
let nombres =[
              "Homero Simpson",
              "Marge Bouvier",
              "Bart Simpson",
              "Lisa Simpson",
              "Maggie Simpson",
              "Rasputin el ruso amistoso",
              'dice la frase: ya estoy hasta aquí de su "reglamento"',
              "Belle, propietaria de La Maison Derrière",
              "Encías Sangrantes Murphy",
              "Nick Riviera",
              "Nelson Muntz",
              "Chester J. Lampwick",
              "Rafa Gorgori",
              "Le vende un pony a Homero",
              "Jeremías Springfield",
              "Roger Meyers Jr.",
              "Jimbo",
              "Doctor Coloso",
              "Matt Groening",
              "Otto",
              "Ned Flanders",
              "Troy McClure",
              "Gordo Tony",
              "Willie",
              "Michael Jackson",
              ]

// Coordenadas de personajes
let coordenadas =[
              [660, 200], // Homero
              [750, 125], // Marge
              [820, 260], // Bart
              [670, 335], // Lisa
              [860, 365], // Maggie
              [40, 25], // Rasputín
              [62, 20], // "Estoy hasta aquí de su reglamento"
              [90, 220], // Belle
              [60, 350], // Encías Sangrantes
              [5, 120], // Nick Riviera
              [75, 120], // Nelson Muntz
              [40, 150], // Chester J. Lampwick
              [155, 255], // Rafa Gorgori
              [90, 22], // Vende Pony
              [25, 245], // Jeremías Springfield
              [60, 270], // Roger Meyers Jr
              [80, 300], // Jimbo
              [115, 270], // Doctor Coloso
              [112, 310], // Matt Groening
              [300, 280], // Otto
              [210, 240], // Ned Flanders
              [190, 305], // Troy McClure
              [165, 285], // Gordo Tony
              [310, 105], // Willie
              [355, 115], // Michael Jackson
            ]


let genericox = 355
let genericoy = 115

//Contador
let contador=0
let encontrado1 = 0,encontrado2 = 0,encontrado3 = 0,encontrado4 = 0,encontrado5 = 0; 
let personaje1=0, personaje2=1, personaje3=2, personaje4=3, personaje5=4;
let coordx_personaje_1,coordy_personaje_1,coordx_personaje_2,coordy_personaje_2,coordx_personaje_3,coordy_personaje_3,coordx_personaje_4,coordy_personaje_4,coordx_personaje_5,coordy_personaje_5; 
let sonido;

function preload() {
  img_inicio = loadImage("assets/background.jpg");
  img_juego = loadImage("assets/simpson.jpg");
  sonido = loadSound("assets/introlossimpson.mp3");
}

function setup() {
  createCanvas(img_inicio.width + 350, img_inicio.height);
  noFill();
  stroke(0);
  strokeWeight(1);
  }

function draw() {
  background(255,217,15);
  if (estado === "inicio") {pantallaInicio();}
  else if (estado === "instrucciones") {pantallaInstrucciones();}
  else if (estado === "resultado") {pantallaResultado();}
  }

// ----------------------

function pantallaInicio() {
  //pantalla = img_inicio;
  image(img_inicio, 0, 0);

  coordx_personaje_1=coordenadas[personaje1][0];
  coordy_personaje_1=coordenadas[personaje1][1];

  coordx_personaje_2=coordenadas[personaje2][0];
  coordy_personaje_2=coordenadas[personaje2][1];

  coordx_personaje_3=coordenadas[personaje3][0];
  coordy_personaje_3=coordenadas[personaje3][1];
  
  coordx_personaje_4=coordenadas[personaje4][0];
  coordy_personaje_4=coordenadas[personaje4][1];

  coordx_personaje_5=coordenadas[personaje5][0];
  coordy_personaje_5=coordenadas[personaje5][1];
  
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Personajes de Los Simpson", (img_inicio.width + 260) / 2, 80);
  text("Encuentra a: ", (img_inicio.width + 260) / 2, 140);
  text(nombres[personaje1] + " ", (img_inicio.width + 260) / 2, 180);
  text(nombres[personaje2] + " ", (img_inicio.width + 260) / 2, 210);
  text(nombres[personaje3] + " ", (img_inicio.width + 260) / 2, 240);
  text(nombres[personaje4] + " ", (img_inicio.width + 260) / 2, 270);
  text(nombres[personaje5] + " ", (img_inicio.width + 260) / 2, 300);

  // botón
  fill(100, 200, 255);
  rect(500, 350, btnW, btnH, 10);
  
  //rect(700, 350, btnW, btnH, 10);

  fill(0);
  textSize(27);
  text("Inicio", 500 + btnW / 2, 350 + btnH / 2);
  
  //text("Aleatorio", 700 + btnW / 2, 350 + btnH / 2);
}

function pantallaInstrucciones() {
  image(img_juego, 0, 0);

  noStroke();
  fill(0);
  textAlign(LEFT, CENTER);
  textSize(15);
  
  text("Encuentra a: ", img_inicio.width, 100);
  text(nombres[personaje1] + " ", img_inicio.width, 150);
  text(nombres[personaje2] + " ", img_inicio.width, 200);
  text(nombres[personaje3] + " ", img_inicio.width, 250);
  text(nombres[personaje4] + " ", img_inicio.width, 300);
  text(nombres[personaje5] + " ", img_inicio.width, 350);

  strokeWeight(1);
  
  rectwidth = 50
  rectheight = 50

  if(encontrado1===1){resalta_personaje(coordx_personaje_1,coordy_personaje_1,rectwidth,rectheight);}
  if(encontrado2===1){resalta_personaje(coordx_personaje_2,coordy_personaje_2,rectwidth,rectheight);}
  if(encontrado3===1){resalta_personaje(coordx_personaje_3,coordy_personaje_3,rectwidth,rectheight);}
  if(encontrado4===1){resalta_personaje(coordx_personaje_4,coordy_personaje_4,rectwidth,rectheight);}
  if(encontrado5===1){resalta_personaje(coordx_personaje_5,coordy_personaje_5,rectwidth,rectheight);}

  // Genérico
  //resalta_personaje(genericox,genericoy,rectwidth,rectheight);
}


function pantallaResultado() {
  //pantalla = img_inicio;
  image(img_inicio, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  stroke(0,0,0);
  text("¡Felicidades!", (img_inicio.width + 260) / 2, 80);
  textSize(30);
  text("Eres un experto en Los Simpson", (img_inicio.width + 260) / 2, 150);
  
  // botón
  fill(100, 200, 255);
  rect(btnX+100, btnY, btnW, btnH, 10);

  fill(0);
  textSize(20);
  text("Jugar de nuevo", btnX + 100 + btnW / 2, btnY + btnH / 2);
}

// ----------------------
function mousePressed() {
  if (estado === "inicio") {
    // detectar click dentro del botón
    if (
      mouseX > 500 &&
      mouseX < 500 + btnW &&
      mouseY > 350 &&
      mouseY < 350 + btnH
    ) {
      estado = "instrucciones";
    }
  
    /*
    if (
      mouseX > 700 &&
      mouseX < 700 + btnW &&
      mouseY > 350 &&
      mouseY < 350 + btnH
    ) {
      aleatorio_personajes();
      }
      */
  
  }
  
  if (estado === "instrucciones"){

    if (
      mouseX > coordx_personaje_1 &&
      mouseX < coordx_personaje_1 + rectwidth &&
      mouseY > coordy_personaje_1 &&
      mouseY < coordy_personaje_1 + rectheight
    ){
      if(encontrado1==0){
        encontrado1=1;
        contador+=1;}
      //encontrado1=1;
      //contador+=1;
      if(contador===5){
        estado="resultado";
        sonido.play();}}

    if (
      mouseX > coordx_personaje_2 &&
      mouseX < coordx_personaje_2 + rectwidth &&
      mouseY > coordy_personaje_2 &&
      mouseY < coordy_personaje_2 + rectheight
    ){
      if(encontrado2==0){
        encontrado2=1;
        contador+=1;}      
      //encontrado2=1;
      //contador+=1;
      if(contador===5){
        estado="resultado";
        sonido.play();}}

    if (
      mouseX > coordx_personaje_3 &&
      mouseX < coordx_personaje_3 + rectwidth &&
      mouseY > coordy_personaje_3 &&
      mouseY < coordy_personaje_3 + rectheight
    ){
      if(encontrado3==0){
        encontrado3=1;
        contador+=1;} 
      //encontrado3=1;
      //contador+=1;
      if(contador===5){
        estado="resultado";
        sonido.play();}}

    if (
      mouseX > coordx_personaje_4 &&
      mouseX < coordx_personaje_4 + rectwidth &&
      mouseY > coordy_personaje_4 &&
      mouseY < coordy_personaje_4 + rectheight
    ){
      if(encontrado4==0){
        encontrado4=1;
        contador+=1;} 
      //encontrado4=1;
      //contador+=1;
      if(contador===5){
        estado="resultado";
        sonido.play();}}


    if (
      mouseX > coordx_personaje_5 &&
      mouseX < coordx_personaje_5 + rectwidth &&
      mouseY > coordy_personaje_5 &&
      mouseY < coordy_personaje_5 + rectheight
    ){
      if(encontrado5==0){
        encontrado5=1;
        contador+=1;} 
      //encontrado5=1;
      //contador+=1;
      if(contador===5){
        estado="resultado";
        sonido.play();}}

  }

  if (estado === "resultado") {
    // detectar click dentro del botón
    if (
      mouseX > btnX + 100 &&
      mouseX < btnX + 100 + btnW &&
      mouseY > btnY &&
      mouseY < btnY + btnH
    ) {
      estado = "inicio";
      contador = 0;
      encontrado1=0;
      encontrado2=0;
      encontrado3=0;
      encontrado4=0;
      encontrado5=0;
      sonido.stop();
      aleatorio_personajes();
    }
  } 
}


function resalta_personaje(x1,y1,x2,y2){
  let cordx1 = x1
  let cordx2 = x2
  let cordy1 = y1
  let cordy2 = y2 

    stroke(0,0,150);
    fill(0,150,150,120);
    rect(cordx1,cordy1,cordx2,cordy2);
  }

function aleatorio_personajes(){
      personaje1 = floor(random(coordenadas.length));

      personaje2 = floor(random(coordenadas.length));
      while (personaje2 === personaje1) {
        personaje2 = floor(random(coordenadas.length));}
      
      personaje3 = floor(random(coordenadas.length));
      while ((personaje3 === personaje2)||(personaje3 === personaje1)){
        personaje3 = floor(random(coordenadas.length));}
      
      personaje4 = floor(random(coordenadas.length));
      while ((personaje4 === personaje3)||(personaje4 === personaje2)||(personaje4 === personaje1)){
        personaje4 = floor(random(coordenadas.length));}

      personaje5 = floor(random(coordenadas.length));
      while ((personaje5 === personaje4)||(personaje5 === personaje3)||(personaje5 === personaje2)||(personaje5 === personaje1)){
        personaje5 = floor(random(coordenadas.length));}
}  

/*function mouseClicked() {
  // cada clic se guarda en el arreglo
  clicks.push({x: mouseX, y: mouseY});
}


  noStroke();
  fill(150,10,250);
    for (let i = 0; i < clicks.length; i++) {
      if (mouseX > homerx && mouseX < (homerx+homerx2) && mouseY > homery && mouseY < (homery+homery2)){
  stroke(200,0,0);
  fill(0,150,150,120);
  rect(homerx,homery,homerx2,homery2);
  }
  }*/