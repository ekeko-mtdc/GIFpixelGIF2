let gif;
let frames = 18; // se utiliza para establecer la velocidad de fotogramas (frame rate) en la función frameRate() más adelante.

function preload() {
gif = loadImage("assets/fenta5.gif"); //Aquí, se carga la imagen GIF y se asigna a la variable gif.
                                  //Conseguí mejores resultados visuales subiendo GIFs de 150x150px.
}

//paleta uno
//const colors = ["#FF4654", "#000000", "#FFBB35", "#FFFCE3", "#FF7D47", "#3EC7E6"]; //Se define una paleta de colores como un array de códigos hexadecimales. Esta paleta se utiliza más adelante para colorear los rectángulos en la animación.
//paleta dos
//const colors = ["#1EC7a6", "#000000", "#FF7D47",  "#9fed3c", "#9aed3f"]; 
const colors = ["#FFFFFF", "#FF7D47", "#000000", "#FF4654", "#3EC7E6"]; 




function setup() {
  //fenta
  createCanvas(495 , 847);
  //createCanvas(1080 , 1080);
  frameRate(frames); // establece la velocidad de fotogramas en x frames por segundo.
  saveGif('mySketch',12); //indica que se debe guardar la animación como un archivo GIF llamado "mySketch.gif" con una duración de x segundos.
}

function draw() {
  gif.setFrame(frameCount); //establece el fotograma actual del GIF según el número de fotogramas transcurridos.
  noStroke(); //Hace que todos los rectángulos creados no tengán contornos visibles, y solo mostrarán el color de relleno especificado por la paleta de colores.
  var tileW = (width / gif.width); //establece las dimensiones de ancho de cada rectangulo
  var tileH = (height / gif.height); //establece las dimensiones de alto de cada rectangulo
  for (var x = 0; x < gif.width; x++) {
    for (var y = 0; y < gif.height; y++) {
      var c = gif.get(x, y); //obtiene el color del píxel.
      var b = brightness(c); //Se calcula la luminosidad del color.
      var b2 = map(b, 0, 250, 0, 620); //Se ajusta la luminosidad (b2) y se mapea al rango de colores disponibles.
      var index = Math.floor(map(b2, 0, 255, 0, colors.length)); //Estas líneas están asignando un color de la paleta de colores a cada píxel en función de su luminosidad, permitiendo así que la imagen se represente con una paleta específica según la intensidad de brillo de cada píxel.
      var theColor = colors[index];
      fill(theColor);
      rect(x * tileW, y * tileH, tileW, tileH);
    }
  }
}