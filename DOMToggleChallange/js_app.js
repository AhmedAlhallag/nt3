var main  = document.getElementsByClassName("main")[0] ;
// var spanTag = main.querySelector(".main-span") ;

var currentState = "main circle" ;
var prevState = "square" ;
// alert("Hit the red circle in the middle") ;




main.onclick = function() {

  if(currentState==main.className && prevState=="square") {



      main.innerHTML = "<span class=\"main-span added-span\">I'm a square Now ! </span>"  ;
      main.classList.replace("circle" ,  "square") ;
      prevState= "circle" ;
      currentState="main square" ;


}



else if (currentState==main.className && prevState=="circle") {


  main.innerHTML = "<span class=\"main-span current-span\">I'm a Circle Now ! </span>"  ;
  main.classList.replace("square" ,  "circle") ;
  prevState= "square" ;
  currentState="main circle" ;

}

}




// function toggleMe () {




// if(currentState==main.className && prevState==circle) {
//
// main.classList.replace("square", "circle");
//
// }
