var box;

function setup() {

createcanvas (400,400)
  box = createSprite(200,200,30,80)
}

function draw() 
{
   background(30);
   //kayIsDown verifica se tecla a está sendo pressionada e retorna ' 
   if (kayIsDown (RIGHT_ARROW))
   {
    box.position.x += 5;
    backgroud("red");
   }
  drawSprites();
}




