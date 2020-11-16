let penz = 0;
function Ar10(){
    penz +=1000;
    document.getElementById("tar").innerHTML = penz + "Ft";
}
function Ar12(){
    penz +=1200;
    document.getElementById("tar").innerHTML = penz + "Ft";
}
function Ar13(){
    penz +=1300;
    document.getElementById("tar").innerHTML = penz + "Ft";
}
function Ar14(){
    penz +=1400;
    document.getElementById("tar").innerHTML = penz + "Ft";
}
function Ar15(){
    penz +=1500;
    document.getElementById("tar").innerHTML = penz + "Ft";
}
function reset(){
    penz = 0;
    document.getElementById("tar").innerHTML = "Tegyen valamit a kosárba";
}