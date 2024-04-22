// find elements
var addItemButton = $("#addItem")

// handle click and add class
addItemButton.on("click", function() {
    const itemValue = $("#groceryName").val();
    const listEl = $("<li>");
    listEl.text(itemValue);

    const removeButton = $("<div>");
    removeButton.attr("style", "display:inline-block; background-color:red; margin:5px; padding:5px")
    removeButton.addClass("removeButton");
    removeButton.text("X")

    listEl.append(removeButton)
    $("#groceryItems").append(listEl)
});

// $(".removeButton").on("click", function(){
//     console.log("CLICKED!!!!")
// 	$(this).parent("li").remove();
// });

$("#groceryItems").on("click", ".removeButton", function(){
	$(this).parent("li").remove();
})
