const header = document.querySelector("h1");
const subheader = document.querySelector("h2");

function keyUP(event){
    console.log("key", event.key);
    console.log("code", event.code);
    header.textContent = event.key;
    subheader.textContent = "KEYUP";
}

function keyDOWN(event){
    console.log("key", event.key);
    console.log("code", event.code);
    header.textContent = event.key;
    subheader.textContent = "KEYDOWN";
}

document.addEventListener("keyup", keyUP)

document.addEventListener("keydown",keyDOWN)