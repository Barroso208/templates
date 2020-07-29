let linksContainer = document.getElementById("links-container");
let iconoMenu      = document.getElementById("menu");
const link1          = document.getElementById("link1");
const link2          = document.getElementById("link2");
const link3          = document.getElementById("link3");
const link4          = document.getElementById("link4");

function menu(){
    if(window.screen.width<1090){
        
        if(linksContainer.className == "links-none"){
            linksContainer.setAttribute("class","links-container");
        }else {
            linksContainer.setAttribute("class","links-none");
        }
    }
}

iconoMenu.onclick = function(){menu();}
link1.onclick = function(){menu();}
link2.onclick = function(){menu();}
link3.onclick = function(){menu();}
link4.onclick = function(){menu();}


/* SLIDER */
const botonAtras = document.getElementById("atras");
let botonAdelante = document.getElementById("adelante");
let imagen = document.getElementById("imagen");
let level = 1;


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