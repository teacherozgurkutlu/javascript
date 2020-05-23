const five=require('johnny-five');
const Oled=require('oled-js');

const font = require('oled-font-5x7');
const temporal = require("temporal");
const board=new five.Board();

board.on("ready", function() {
    console.log('Arduino kart ile bağlantı kuruldu')
    var led = new five.Led(13);
    led.blink(50);
    const opts = {
        width: 128,
        height: 64,
        address: 0x3C
      };
    
      const ekran = new Oled(board, five, opts);
      ekran.clearDisplay();
      ekran.drawRect(10, 34, 20, 30, 1);
      ekran.drawRect(40, 34, 20, 30, 1);
      ekran.drawRect(70, 20, 20, 44, 1);
      ekran.drawRect(100, 20, 20, 44, 1);
      //ekran.drawLine(0,0,20,20,1);
      //ekran.drawRect(20, 20, 100, 20, 1);
      //ekran.drawCircle(60, 30, 5, 1);
      //ekran.fillRect(20, 20, 50, 20, 1);
      ekran.update();       
       
         
    function myFunc() {
        ekran.setCursor(100, 10);
        ekran.writeString(font, 1, "Cat", 1, true, 2);
        ekran.setCursor(10, 20);
        ekran.writeString(font, 1, "Alp", 1, true, 2);
        ekran.setCursor(35, 20);
        ekran.writeString(font, 1, "Birce", 1, true, 2);
      
        ekran.setCursor(70, 10);
        ekran.writeString(font, 1, "Kedi", 1, true, 2);
              }
             
setTimeout(myFunc, 1500, 'funky');    
            
    function myFunc2() {
        ekran.clearDisplay();
        
        let i=0;
   temporal.loop(500, function() {
       i=i+5;
        if(i>110){
            i=0;
        this.stop(); 
        }
        else{
         ekran.clearDisplay();   
        }
    
    ekran.drawRect(10, 34, i, 30, 1);
    
  });
             
         }
         
setTimeout(myFunc2, 6500, 'funky');
   

      
      
  });
  