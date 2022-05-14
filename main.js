x = 0;
y = 0;

draw_apple = "apple.png";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  
      document.getElementById("status").innerHtml="sorry i coudn't recognise"+content;
    
    to_number=Number(content);

    if(Number.isInteger(to_number));
}

function setup() {
 screen_width=window.innerWidth
 screen_height=window.innerHeight
 canvas=createCanvas(700,400);

 canvas.position();
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "set";
  }

  for(let i=1; i<to_number; i++ ){
    x=Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*400);
    document.getElementById("status").innerHTML='<img src="apple.png">';
    document.getElementsByName("draw_apple").style.width=40;
    document.getElementsByName("draw_apple").style.height=40;
    document.getElementById("status").inneerHTML=to_number+"Apple Drawn";
    draw_apple="speak()";}
  }


function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload(){
loadImage("apple.png")

}


