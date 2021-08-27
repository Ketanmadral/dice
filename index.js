
 var dice = ["1.png","2.png","3.png","4.png","5.png","6.png"];
   
var Score1=0;
 var count =0;
var Score2 =0;
   
function ShowImage(index){
     var pic = document.getElementById("pic");
     pic.src = dice[index];
 }  
 
function bodyload(){
  ShowImage(0);
 
 
document.getElementById("Score1").innerHTML = Score1;
document.getElementById("Score2").innerHTML = Score2;
document.getElementById("btn1").disabled = false;
document.getElementById("btn2").disabled = false;
document.getElementById("num1").innerHTML = count;
document.getElementById("num2").innerHTML = count;


}

  
function player1Click(){
  
count = Math.floor( Math.random() * 6 );
ShowImage(count);
count++;
Score1 = Score1 + count;
document.getElementById("num1").innerHTML =count;
document.getElementById("Score1").innerHTML = Score1;

if(Score1 >= 20){
 
  document.getElementById("msg1").innerHTML ="🏅PLAYER 1 WON THE GAME🏆";
  
 
  
document.getElementById("btn1").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("c1").style.backgroundColor = "pink";

}
 }
 
function player2Click(){
count = Math.floor( Math.random() * 6 );
ShowImage(count);
count++;
Score2 = Score2 + count;
document.getElementById("num2").innerHTML = count;
document.getElementById("Score2").innerHTML = Score2;

if(Score2 >= 20){
  
  
  document.getElementById("msg2").innerHTML ="🏅PLAYER 2 WON THE GAME🏆";
  
  document.getElementById("btn2").disabled = true;
document.getElementById("btn1").disabled =true;
document.getElementById("c2").style.backgroundColor = "pink";
  
}
}

