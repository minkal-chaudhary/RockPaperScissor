function rpsGame(yourChoice){
    var humanChoice=yourChoice;
    var batChoice;
    console.log(yourChoice);
    
    var no=randomGen();
    var  computerChoice=numberToChoice(no);
    console.log(computerChoice);
    var result=decideWinner(yourChoice.id,computerChoice.id)
    console.log(result);
    var message=getMessage(result);
    console.log(message);
   
    var div=document.getElementById("flex-box");
    div.innerHTML="";
    var image=document.createElement("img");
    var text=document.createElement("h1");
    var image1=document.createElement("img");
    var msg=message['message'];
    var color=message['color'];
    console.log(color);
    text.innerHTML="<h1 style='color:"+color+";'>"+msg+"</h1>";
    text.color=message['color'];
    image.src=yourChoice.src;
    image1.src=computerChoice.src;
    console.log(image.src)
    div.appendChild(image);
    div.appendChild(text);
    div.appendChild(image1);
    
}
function getMessage(result){
    if(result==0.5)
    return {'message':'Tied','color':'yellow'};
    else if(result==1)
    return {'message':'You Won','color':'green'};
    else
    return {'message':'You Lost','color':'red'};
}
function randomGen()
{
    return Math.floor(Math.random()*3);
}
function numberToChoice(no){
    return [rock,paper,scissor][no];
}
function decideWinner(yourChoice,computerChoice)
{
    var winner={
        'rock':{'rock':0.5,'paper':0,'scissor':1},
    'paper':{'paper':0.5,'rock':1,'scissor':0},
    'scissor':{'scissor':0.5,'paper':1,'rock':0}
};
    var score=winner[yourChoice][computerChoice];
    return score;
}