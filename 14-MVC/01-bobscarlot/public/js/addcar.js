const addCarButtonEl = document.getElementById("addCarButton");

async function addCarFunction(){
    const yearEl = document.getElementById("year");
    const makeEl = document.getElementById("make");
    const modelEl = document.getElementById("model");
    const imageEl = document.getElementById("image");
    const sold = document.querySelector("#sold:checked") ? true : false;
    
    const response = await fetch("/api/addcar", {
        method:'POST',
        body: JSON.stringify({
            yearMade: yearEl.value.trim(),
            make: makeEl.value.trim(),
            model: modelEl.value.trim(),
            image: imageEl.value.trim(),
            sold: sold
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
    });

    if (response.ok){
        document.location.replace("/")
    }
    else{
        alert("Broken");
    }
}

addCarButtonEl.addEventListener("click", addCarFunction)