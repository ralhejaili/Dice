
function myFunction() {
  var result;
  var fNumber=Math.floor((Math.random() * 6)+1);
  var sNumber=Math.floor((Math.random() * 6)+1);
  if(fNumber==1){
    document.getElementById("dice").src="1.png";
  }
  else if(fNumber==2){
    document.getElementById("dice").src="2.png";
  }
  else if(fNumber==3){
    document.getElementById("dice").src="3.png";
  }
  else if(fNumber==4){
    document.getElementById("dice").src="4.png";
  }
  else if(fNumber==5){
    document.getElementById("dice").src="5.png";
  }
  else if(fNumber==6){
    document.getElementById("dice").src="6.png";
  }


  if(sNumber==1){
    document.getElementById("dice2").src="1.png";
  }
  else if(sNumber==2){
    document.getElementById("dice2").src="2.png";
  }
  else if(sNumber==3){
    document.getElementById("dice2").src="3.png";
  }
  else if(sNumber==4){
    document.getElementById("dice2").src="4.png";
  }
  else if(sNumber==5){
    document.getElementById("dice2").src="5.png";
  }
  else if(sNumber==6){
    document.getElementById("dice2").src="6.png";
  }

  if (fNumber > sNumber) {
    result = "First Player Wins";
  } else if (fNumber < sNumber) {
    result = "Second Player Wins";
  } else if(fNumber == sNumber) {
    result = "Tie";
  }
  document.getElementById("pResult").innerHTML = result;
}
