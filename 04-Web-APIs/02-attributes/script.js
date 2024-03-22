const sectionsEl = document.querySelectorAll("section");
const myImage = document.querySelector("#imageOne")

myImage.setAttribute("src", "images/thurman_1.png");
myImage.setAttribute("style", "width:200px");

for (let section of sectionsEl){
    section.setAttribute("style", "font-size:21px; color:red");
    section.setAttribute("class", "fancyBackground");
}


myImage.addEventListener("click",function(){
    if (myImage.getAttribute("src")==="images/thurman_1.png"){
        myImage.setAttribute("src", "images/catjam.gif");
    }
    else{
        myImage.setAttribute("src", "images/thurman_1.png");
    }
});