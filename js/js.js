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