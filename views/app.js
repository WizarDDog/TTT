
// module.exports = win();

var square = document.getElementsByClassName("sq")[0];
var square1 = document.getElementsByClassName("sq")[1];
var square2 = document.getElementsByClassName("sq")[2];
var square3 = document.getElementsByClassName("sq")[3];
var square4 = document.getElementsByClassName("sq")[4];
var square5 = document.getElementsByClassName("sq")[5];
var square6 = document.getElementsByClassName("sq")[6];
var square7 = document.getElementsByClassName("sq")[7];
var square8 = document.getElementsByClassName("sq")[8];


var table = document.querySelector("table");

var squares = [square, square1, square2, square3, square4, square5, square6, square7, square8]; 


for (var i= 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        this.classList.add("selected");
        $(this).html("<i class='fas fa-times'></i>");
        comp();
        gameEnd();
        gameEnd2();
    });
}

var output = document.getElementById('output');

var wins = 0;

 function win(){
    wins++ ;
    console.log(wins)
    alert("You won!")   
    clear()
    output.innerHTML = ("<h1 class='bravo'>Wins: </h1>" + wins)
};

function clear(){
    $("i").remove()
    $("#1").removeClass("selected");
    $("#1").removeClass("pcSelected");
    $("#2").removeClass("selected");
    $("#2").removeClass("pcSelected");
    $("#3").removeClass("selected");
    $("#3").removeClass("pcSelected");
    $("#4").removeClass("selected");
    $("#4").removeClass("pcSelected");
    $("#5").removeClass("selected");
    $("#5").removeClass("pcSelected");
    $("#6").removeClass("selected");
    $("#6").removeClass("pcSelected");
    $("#7").removeClass("selected");
    $("#7").removeClass("pcSelected");
    $("#8").removeClass("selected");
    $("#8").removeClass("pcSelected");
    $("#9").removeClass("selected");
    $("#9").removeClass("pcSelected");
}
  

function lose(){
    alert("You loose");
    if (win()){
        wins++;
        return;
    } // if (lose()){
    //     loses++;
    //     return;
    // } 
}
 
function comp(){
    switch (true){
    case !$("#1").hasClass("selected") && !$("#1").hasClass("pcSelected") : 
        square.classList.add("pcSelected");
        $(square).html("<i class='far fa-circle'></i>");
        break;
    case !$("#2").hasClass("selected") && !$("#2").hasClass("pcSelected") : 
        square1.classList.add("pcSelected");
        $(square1).html("<i class='far fa-circle'></i>");
        break;
    case !$("#3").hasClass("selected") && !$("#3").hasClass("pcSelected") : 
        square2.classList.add("pcSelected");
        $(square2).html("<i class='far fa-circle'></i>");
        break;
    case !$("#4").hasClass("selected") && !$("#4").hasClass("pcSelected") : 
        square3.classList.add("pcSelected");
        $(square3).html("<i class='far fa-circle'></i>");
        break;
    case !$("#5").hasClass("selected") && !$("#5").hasClass("pcSelected") : 
        square4.classList.add("pcSelected");
        $(square4).html("<i class='far fa-circle'></i>");
        break;
    case !$("#6").hasClass("selected") && !$("#6").hasClass("pcSelected") : 
        square5.classList.add("pcSelected");
        $(square5).html("<i class='far fa-circle'></i>");
        break;
    case !$("#7").hasClass("selected") && !$("#7").hasClass("pcSelected") : 
        square6.classList.add("pcSelected");
        $(square6).html("<i class='far fa-circle'></i>");
        break;
    case !$("#8").hasClass("selected") && !$("#8").hasClass("pcSelected") : 
        square7.classList.add("pcSelected");
        $(square7).html("<i class='far fa-circle'></i>");
        break;
    case !$("#9").hasClass("selected") && !$("#9").hasClass("pcSelected") : 
        square8.classList.add("pcSelected");
        $(square8).html("<i class='far fa-circle'></i>");
        break;
    }
}
function gameEnd(){
    switch (true){
        case $("#1").hasClass("selected") && $("#2").hasClass("selected") && $("#3").hasClass("selected"):
            win();
            break;
        case $("#4").hasClass("selected") && $("#5").hasClass("selected") && $("#6").hasClass("selected"):
            win();
            break;
        case $("#7").hasClass("selected") && $("#8").hasClass("selected") && $("#9").hasClass("selected"):
            win();
            break;
        case $("#1").hasClass("selected") && $("#4").hasClass("selected") && $("#7").hasClass("selected"):
            win();
            break;
        case $("#2").hasClass("selected") && $("#5").hasClass("selected") && $("#8").hasClass("selected"):
            win();
            break;
        case $("#3").hasClass("selected") && $("#6").hasClass("selected") && $("#9").hasClass("selected"):
            win();
            break;
        case $("#1").hasClass("selected") && $("#5").hasClass("selected") && $("#9").hasClass("selected"):
            win();
            break;
        case $("#3").hasClass("selected") && $("#5").hasClass("selected") && $("#7").hasClass("selected"):
            win();
            break;
    }
}
function gameEnd2(){
    switch (true){
        case $("#1").hasClass("pcSelected") && $("#2").hasClass("pcSelected") && $("#3").hasClass("pcSelected"):
            lose();
            break;
        case $("#4").hasClass("pcSelected") && $("#5").hasClass("pcSelected") && $("#6").hasClass("pcSelected"):
            lose();
            break;
        case $("#7").hasClass("pcSelected") && $("#8").hasClass("pcSelected") && $("#9").hasClass("pcSelected"):
            lose();
            break;
        case $("#1").hasClass("pcSelected") && $("#4").hasClass("pcSelected") && $("#7").hasClass("pcSelected"):
            lose();
            break;
        case $("#2").hasClass("pcSelected") && $("#5").hasClass("pcSelected") && $("#8").hasClass("pcSelected"):
            lose();
            break;
        case $("#3").hasClass("pcSelected") && $("#6").hasClass("pcSelected") && $("#9").hasClass("pcSelected"):
            lose();
            break;
        case $("#1").hasClass("pcSelected") && $("#5").hasClass("pcSelected") && $("#9").hasClass("pcSelected"):
            lose();
            break;
        case $("#3").hasClass("pcSelected") && $("#5").hasClass("pcSelected") && $("#7").hasClass("pcSelected"):
            lose();
            break;
    }
}





