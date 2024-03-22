const wayOutsideContainerEl = document.querySelector("#wayOutsideContainer");
const outsideContainerEl = document.querySelector("#outsideContainer");
const insideContainerEl = document.querySelector("#insideContainer");


wayOutsideContainerEl.addEventListener("click", function(e){
    e.stopPropagation();
	alert("Clicked WAY Outside Container")
});

outsideContainerEl.addEventListener("click", function(e){
    e.stopPropagation();
	alert("Clicked Outside Container")
})

insideContainerEl.addEventListener("click", function(e){
    e.stopPropagation();
	alert("Clicked INSIDE Container")
})
