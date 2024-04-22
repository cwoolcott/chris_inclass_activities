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

//Props for Checkboxes and Radios
// $("#agreeToTerms").prop("checked", true);



// $("#agreeToTerms").prop("checked", false);




var groceryItemList = $("li");

groceryItemList.eq(1).css("background-color", "orange");
groceryItemList.eq(1).css("font-weight", "bold");


for (let groceryItem of groceryItemList){
    //console.log(groceryItem.getAttribute("data-grocery-sku"));
    // const groceryItemEl = $(groceryItem);
    console.log($(groceryItem).data("grocerySku"))

}



$("#addNameButton").on("click", function(e){
    e.preventDefault();
    if ($("#agreeToTerms").prop("checked")){
        alert("Checked");
    }
    else{
        alert("Unchecked");
    }
})







$("#sayHiBtn").on("click", function(e){
    carDealerName.text("HI!")
});










