var nOs = 6;
var colors = ranCols(nOs);
var chcolor = pikCol();
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#reset");
var nomaec = document.getElementById("nc");
nomaec.textContent = chcolor;
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var msg = document.querySelector("message");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
 for(var i = 0; i < modeButtons.length; i++){
 setModeBut();
 setSqu();
 rst();
}

function setModeBut()
{
			modeButtons[i].addEventListener("click",function()		{
		  modeButtons[0].classList.remove("selected");
		  modeButtons[1].classList.remove("selected");
		  this.classList.add("selected");
		  this.textContent === "Easy" ? nOs = 3: nOs = 6;
	    rst();})
	}
}
function setSqu(){
		for(var i =0; i < squares.length; i++){
		 squares[i].addEventListener("click", function(){
		 var bufcol = this.style.background;
		 if(bufcol==chcolor)
		 {
		 	reset.textContent = "Play Again";
		 	h1.style.background=chcolor;
			changeC(chcolor);
		 } else {
			console.log("mraz blyad");
			this.style.background="#232323";
	 	 }
		})
   }
}
function rst(){
 colors = ranCols(nOs);
 chcolor = pikCol();
 reset.textContent = "New colors";
 nomaec.textContent = chcolor;
 for(var i =0; i < squares.length; i++){
 	  if(colors[i]){
 	  	squares[i].style.display ="block";
 	  	squares[i].style.background= colors[i];}
 	  else
 	  {squares[i].style.display= "none";}
    squares[i].style.background = colors[i];
 }
 h1.style.background= 'steelblue';
}

reset.addEventListener("click", function(){
  rst();
})

function changeC(color){
	for (var i=0; i<squares.length; i++){
	 	squares[i].style.background = color;
	}
}

function pikCol(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function ranCols(num){
	var arr = [];
  for(var i=0; i<num;i++){
   arr[i]="rgb(" + ranCol() +", " +ranCol()+", "+ranCol()+")"; 
  }
	return arr;
} 

function ranCol(){ 	
 	var randomc = Math.floor(Math.random()*256);
  return randomc;
}
