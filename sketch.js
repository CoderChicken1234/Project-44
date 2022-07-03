var bg, bgImg, marsBgImg
var spaceShipImg, spaceShip
var venus;
var mars, marsImg;
var acid_planet;
var Kepler232b;
var gameState = 0;
var marsObject, venusObject, keplerObject, acidObject;
var marsTablet, marsTabletImg;




function preload(){
bgImg = loadImage("./assets/Space BG.png")
spaceShipImg = loadImage("./assets/SpaceShip.png")
marsImg = loadImage("./assets/Mars.png")
marsBgImg = loadImage("./assets/MarsBg.png")
marsTabletImg = loadImage("./assets/Mars_tablet.png")


}

function setup(){
createCanvas(1500,700);
background(bgImg)

spaceShip = createSprite(750,350,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3

venus = createImg('./assets/Venus.png',"venus")
venus.position(-150,0)
venus.size(650,250)
venus.mouseClicked(venusFunc)

mars = createImg('./assets/Mars.png',"mars")
mars.position(1150,0)
mars.size(250,250)
mars.mouseClicked(marsFunc)

acid_planet = createImg('./assets/Acid_planet.png',"Acid")
acid_planet.position(1150,380)
acid_planet.size(350,350)
acid_planet.mouseClicked(acidPlanetFunc)

Kepler232b = createImg('./assets/HabitPlanet.png',"Acid")
Kepler232b.position(50, 400)
Kepler232b.size(300,300)
Kepler232b.mouseClicked(Kepler232bFunc)










}

function draw() {

  if(gameState == 1){
    marsObject = new Mars()
    marsObject.play()
  }

  if(gameState == 2){
    venusObject = new venus_planet()  
    venusObject.play()
  }

  
  if(gameState == 3){
    keplerObject = new kepler()
    keplerObject.play()
  }

  if(gameState == 4){
    acidObject = new acidPlanet
    acidObject.play()
  }
    
console.log(gameState)

  
 drawSprites(); 

}

function venusFunc(){
gameState = 2
}

function marsFunc(){
gameState = 1
venus.hide()
acid_planet.hide()
Kepler232b.hide()
mars.hide()
spaceShip.remove()
}

function acidPlanetFunc(){
gameState = 4
}

function Kepler232bFunc(){
gameState = 3
}


