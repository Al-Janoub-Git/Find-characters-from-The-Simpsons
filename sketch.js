//==========================================================================
//    Personajes de los Simpson
//==========================================================================
let img_inicio, img_instructiones;
let sonido;
let estado = "inicio";
// coordenadas del botón (puedes ajustar)
let btnW = 200;
let btnH = 80;

// Nombres de personajes
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
              "Rafa Gorgory",
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
              "Hombre Radioactivo",
              "Krusty",
              "Jefe Gorgory",
              "Apu Nahasapeemapetilon",
              "Manjula",
              "Martin Prince",
              "Rainier Wolfcastle",
              "Profesor Lombardo",
              "Juan Topo",
              "Abraham Simpson",
              "Kent Brockman",
              "Lenny",
              "Serpiente",
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
              [575, 155], // Hombre Radioactivo
              [605, 260], // Krusty
              [605, 212], // Jefe Gorgory
              [287, 372], // Apu
              [187, 340], // Manjula Nahasapeemapetilon
              [107, 360], // Manrtin Prince
              [127, 380], // Rainier Wolfcastle
              [192, 375], // "Profesor Lombardo"
              [182, 420], // "Juan Topo"
              [682, 415], // "Abraham Simpson"
              [652, 405], // "Kent Brockman"
              [625, 400], // "Lenny"
              [565, 397], // "Serpiente"
            ]

let bandera = 0;
let genericox = 565;
let genericoy = 397;

let index_per_1=0, index_per_2=1, index_per_3=2, index_per_4=3, index_per_5=4;
let coordX_per_1, coordY_per_1, coordX_per_2, coordY_per_2,coordX_per_3,coordY_per_3,coordX_per_4,coordY_per_4,coordX_per_5,coordY_per_5;
//Contador
let contador=0;
let encontrado1 = 0,encontrado2 = 0,encontrado3 = 0,encontrado4 = 0,encontrado5 = 0; 

//=================================================================
function preload() {
  img_inicio = loadImage("assets/background.jpg");
  img_juego = loadImage("assets/simpson.jpg");
  img_trans = loadImage("assets/imagentrans.png");
  sonido = loadSound("assets/introlossimpson.mp3");
  }

//=================================================================
function setup() {
  createCanvas(img_inicio.width + 350, img_inicio.height);
  noFill();
  stroke(0);
  strokeWeight(1);
  }

//=================================================================
function draw() {
  background(255,217,15);
  if (estado === "inicio") {pantallaInicio();}
  else if (estado === "instrucciones") {pantallaInstrucciones();}
  else if (estado === "resultado") {pantallaResultado();}
  }

//=================================================================
function pantallaInicio() {
  //pantalla = img_inicio;
  image(img_inicio, 0, 0);

  coordX_per_1=coordenadas[index_per_1][0];
  coordY_per_1=coordenadas[index_per_1][1];

  coordX_per_2=coordenadas[index_per_2][0];
  coordY_per_2=coordenadas[index_per_2][1];

  coordX_per_3=coordenadas[index_per_3][0];
  coordY_per_3=coordenadas[index_per_3][1];
  
  coordX_per_4=coordenadas[index_per_4][0];
  coordY_per_4=coordenadas[index_per_4][1];

  coordX_per_5=coordenadas[index_per_5][0];
  coordY_per_5=coordenadas[index_per_5][1];
  
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Personajes de Los Simpson", (img_inicio.width + 260) / 2, 80);
  text("Encuentra a:", (img_inicio.width + 260) / 2, 140);
  text(nombres[index_per_1], (img_inicio.width + 260) / 2, 180);
  text(nombres[index_per_2], (img_inicio.width + 260) / 2, 210);
  text(nombres[index_per_3], (img_inicio.width + 260) / 2, 240);
  text(nombres[index_per_4], (img_inicio.width + 260) / 2, 270);
  text(nombres[index_per_5], (img_inicio.width + 260) / 2, 300);

  // botón
  fill(100, 200, 255);
  rect(500, 350, btnW, btnH, 10);

  fill(0);
  textSize(27);
  text("Inicio", 500 + btnW / 2, 350 + btnH / 2);
}

//=================================================================
function pantallaInstrucciones() {
  image(img_juego, 0, 0);
  //image(img_trans, 0, 0);

  noStroke();

  textAlign(LEFT, CENTER);
  textSize(15);
  fill(0);
  text("Encuentra a: ", img_inicio.width, 100);
  
  fill(0);
  if(encontrado1===1){fill(0,200,100);}
  text(nombres[index_per_1] + " ", img_inicio.width, 150);
  
  fill(0);
  if(encontrado2===1){fill(0,200,100);}
  text(nombres[index_per_2] + " ", img_inicio.width, 200);
  
  fill(0);
  if(encontrado3===1){fill(0,200,100);}
  text(nombres[index_per_3] + " ", img_inicio.width, 250);
  
  fill(0);
  if(encontrado4===1){fill(0,200,100);}
  text(nombres[index_per_4] + " ", img_inicio.width, 300);
  
  fill(0);
  if(encontrado5===1){fill(0,200,100);}
  text(nombres[index_per_5] + " ", img_inicio.width, 350);
  fill(0);
  strokeWeight(1);
  
  rectwidth = 50
  rectheight = 50

  if(encontrado1===1){resalta_personaje(coordX_per_1,coordY_per_1,rectwidth,rectheight);}
  if(encontrado2===1){resalta_personaje(coordX_per_2,coordY_per_2,rectwidth,rectheight);}
  if(encontrado3===1){resalta_personaje(coordX_per_3,coordY_per_3,rectwidth,rectheight);}
  if(encontrado4===1){resalta_personaje(coordX_per_4,coordY_per_4,rectwidth,rectheight);}
  if(encontrado5===1){resalta_personaje(coordX_per_5,coordY_per_5,rectwidth,rectheight);}

  // Genérico
  if(bandera===1){resalta_personaje(genericox,genericoy,rectwidth,rectheight);}
  
  //

}

//=================================================================
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
  rect(400+100, 350, btnW, btnH, 10);

  fill(0);
  textSize(20);
  text("Jugar de nuevo", 400 + 100 + btnW / 2, 350 + btnH / 2);
}

//=================================================================
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

    encontrado1=revisa_posicion(1);
    if(contador===5){
      estado="resultado";
      sonido.play();}

    encontrado2=revisa_posicion(2);
    if(contador===5){
      estado="resultado";
      sonido.play();}

    encontrado3=revisa_posicion(3);
    if(contador===5){
      estado="resultado";
      sonido.play();}

    encontrado4=revisa_posicion(4);
    if(contador===5){
      estado="resultado";
      sonido.play();}

    encontrado5=revisa_posicion(5);
    if(contador===5){
      estado="resultado";
      sonido.play();}
  }

  if (estado === "resultado") {
    // detectar click dentro del botón
    if (
      mouseX > 400 + 100 &&
      mouseX < 400 + 100 + 200 &&
      mouseY > 350 &&
      mouseY < 350 + 80
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


//=================================================================
function resalta_personaje(x1,y1,x2,y2){
  //let cordx1 = x1, cordx2 = x2, cordy1 = y1, cordy2 = y2;
    stroke(0,0,150);
    fill(0,150,150,120);
    //rect(cordx1,cordy1,cordx2,cordy2);
    rect(x1,y1,x2,y2);
  }


//=================================================================  
function aleatorio_personajes(){
      index_per_1 = floor(random(coordenadas.length));
      index_per_2 = floor(random(coordenadas.length));
      while (index_per_2 === index_per_1) {
        index_per_2 = floor(random(coordenadas.length));}
      index_per_3 = floor(random(coordenadas.length));
      while ((index_per_3 === index_per_2)||(index_per_3 === index_per_1)){
        index_per_3 = floor(random(coordenadas.length));}
      index_per_4 = floor(random(coordenadas.length));
      while ((index_per_4 === index_per_3)||(index_per_4 === index_per_2)||(index_per_4 === index_per_1)){
        index_per_4 = floor(random(coordenadas.length));}
      index_per_5 = floor(random(coordenadas.length));
      while ((index_per_5 === index_per_4)||(index_per_5 === index_per_3)||(index_per_5 === index_per_2)||(index_per_5 === index_per_1)){
        index_per_5 = floor(random(coordenadas.length));}
      }


//=================================================================
function revisa_posicion(personaje){
        let posx, posy, enco;
        switch (personaje) {
        case 1:
          posx = coordX_per_1;
          posy = coordY_per_1;
          enco = encontrado1;
        break;
        case 2:
          posx = coordX_per_2;
          posy = coordY_per_2;
          enco = encontrado2;
        break;
        case 3:
          posx = coordX_per_3;
          posy = coordY_per_3;
          enco = encontrado3;
        break;
        case 4:
          posx = coordX_per_4;
          posy = coordY_per_4;
          enco = encontrado4;   
        break;
        case 5:
          posx = coordX_per_5;
          posy = coordY_per_5;
          enco = encontrado5;   
        break;
        default:  
        }

      if (
      mouseX > posx &&
      mouseX < posx + rectwidth &&
      mouseY > posy &&
      mouseY < posy + rectheight
      )
      {
        if(enco==0){
          enco=1;
          contador+=1;}
        /*if(contador===5){
          estado="resultado";
          sonido.play();}*/
        }
      return enco;
      }