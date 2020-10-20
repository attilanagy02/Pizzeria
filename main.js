let val = -1;
let pizza = document.getElementById("pizza");
let pizza_kepek = ["margarita.jpg","sonkas.jpg","szalamis.jpg","gombas.jpg","pepperoni.jpg","rantottas.jpg","hawaii.jpg","bestfm.jpg","negysajtos.jpg"];
let pizza_arak = [1000,1200,1200,1150,1200,1300,1400,1500,1500];
for(let i = 0; i < pizza_kepek.length; i++){
    pizza.innerHTML += '<div> <img src = "' + pizza_kepek[i] + '"></img>' + (i + 1) + 
    '<br>' + pizza_arak[i] + 'Ft' 
    '</div>';
}