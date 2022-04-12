var cards = ["foto1.jpg", "foto4.jpg", "foto6.jpg", "foto1.jpg", "foto3.png", "foto2.jpg", "foto2.jpg", "foto3.png","foto4.jpg" , "foto5.jpg", "foto5.jpg", "foto6.jpg"];
var oneVisible = false;
var nrKarty;
var licznik=0;
var blokada=false;
var koniec = 6;

document.onselectstart = function(){return false;};

function odkryj(nr){
    var opacityValue=$("#c"+nr).css('opacity');
    if(opacityValue!=0 && blokada==false){
        blokada=true;
        var obraz = "url(" + cards[nr] + ")";
$("#c"+ nr).css("background-image",obraz);

if(oneVisible==false){
    //pierwsza karta
    oneVisible=true;
    nrKarty=nr;
    blokada=false;

}
else{
    //druga karta
    if(cards[nrKarty]==cards[nr]){
        //alert("para");
        setTimeout(function(){para(nr, nrKarty)},50);
    }
    else{
        //alert("pudło");
        setTimeout(function(){pudlo(nr, nrKarty)},1000);
    }
    oneVisible=false;
    licznik++;
    $(".score").html("licznik: "+licznik);
}        
    }


}
function para(nr1, nr2){
    if(nr1 != nr2){
    $("#c"+nr1).css('opacity', '0');
    $("#c"+nr2).css('opacity', '0');
    blokada=false;
    koniec--;
    if (koniec==0){
        $("#board").html("<h1> Wygrałeś <h1> w "+ licznik + " rundach </h1>");
    }    
    }
    else{
        $("#c"+nr1).css("background-image", "url(karta.jpg)");
    }
}

function pudlo(nr1, nr2){
    $("#c"+nr1).css("background-image", "url(karta.jpg)");
    $("#c"+nr2).css("background-image", "url(karta.jpg)");
    blokada=false;
}