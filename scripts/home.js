const hireme = document.querySelector("#hire-me");
const promptname = document.querySelector(".hire-meprompt");
const close = document.querySelector("#close");
const header = document.querySelector(".header");
const imwidth = document.querySelector(".img");
const grey = document.querySelector(".grey");
const dude = document.querySelector("#send");
const test = document.querySelector("#hillo");
const button = document.querySelector("#button");
const openmenu = document.querySelector(".menu");
const menu = document.querySelector(".menu-show")
const back = document.querySelector(".back");
let thewidth = screen.width

header.style.width=thewidth;

//if(screen.width < 1200){
    //imwidth.style.width="450px";
//}
//button.onclick=email;
hireme.onclick = prompt;
close.onclick = closeIt;
openmenu.onclick = themenu;

function prompt(){
    promptname.style.display="block";
    grey.style.display="flex";
    console.log(thewidth);
}

function themenu(){
    menu.style.display="flex";
    back.style.display="flex";
}

function closeIt(){
    promptname.style.display="none";
    grey.style.display="none";
}

/**function email(){
    var radio = document.getElementsByName('test');

    for(i = 0; i < radio.length; i++) {
        if(radio[i].checked){
        document.getElementById("send").href
                = "mailto:zakmbusiness02@gmail.com?" 
        }
    }
}**/

