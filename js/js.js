/* SLIDER */
const botonAtras = document.getElementById("atras");
let botonAdelante = document.getElementById("adelante");
let imagen = document.getElementById("imagen");
let level = 1;


$('#imagen619').on('mouseover',function(e) {
    level = 1;
    changeImage();
});
$('a#imagen630').on('mouseover',function(e) {
    level = 2;
    changeImage();
});
/* Funciones para determinar que valor debe tener la variable level. */
function ahead(){
    level++;
    if (level === 5){
        level = 1;
    }
    changeImage();
}
function behind(){
    level--;
    if (level === 0){
        level = 4;
    }
    changeImage();
}
/* Función para cargar la imagen correspondiente a cada número */
function changeImage(){
    switch (level) {
        case 1:
            imagen.setAttribute("src","https://cdn.pixabay.com/photo/2020/07/22/08/17/power-station-5428427__480.jpg");
            break;

        case 2:
            imagen.setAttribute("src","https://cdn.pixabay.com/photo/2020/07/22/08/39/waterfall-5428468__480.jpg");         
            break;

        case 3:
            imagen.setAttribute("src","https://cdn.pixabay.com/photo/2016/10/18/21/28/seljalandsfoss-1751463__480.jpg");
            break;

        case 4: 
            imagen.setAttribute("src","https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811__480.jpg");
            break;
    }
}
/* Eventos para ejecutar las variables que determinan el valor de level y por tanto determinan que imagen se va a cargar */
botonAdelante.addEventListener('click',ahead);

botonAtras.addEventListener('click',behind);

