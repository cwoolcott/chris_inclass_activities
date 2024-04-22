// const containerEl = document.querySelector("#container");

// const carDealerName = document.createElement("h1");
// carDealerName.textContent = "Bob's Cars";
// containerEl.append(carDealerName);

//const sayHiBtn = $("#sayHiBtn");
const containerEl = $("#container");

const carDealerName = $("<h1>");
carDealerName.text("Bob's Cars");
carDealerName.addClass("redText")
carDealerName.attr("style", "font-size:48px");
containerEl.append(carDealerName);

// sayHiBtn.addEventListener("click", function(e){
//     alert("hi!");
// });

//firstNameEl.value;
//GETTER
const firstName = $("#firstName").val();
//SETTER
$("#firstName").val("BOB");

console.log(firstName)

$("#addNameButton").on("click", function(e){
    e.preventDefault();
    alert("SUBMITTED")
})







$("#sayHiBtn").on("click", function(e){
    carDealerName.text("HI!")
});










