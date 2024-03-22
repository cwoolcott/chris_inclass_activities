



const whatsTheTotal = sumTotal(34,40,30);
const whatsTheTotal2 = sumTotalFunction2(34,40,30);

console.log(whatsTheTotal);



console.log("whatsTheTotal", whatsTheTotal);




//Function Declaration
function sumTotal(itemPrice1, itemPrice2, itemPrice3){
    const subTotal = itemPrice1 + itemPrice2 + itemPrice3;
    const tax = subTotal * .06;
    const total = subTotal + tax;
    return total;  //return 110.24
}
//Function Expression
const sumTotalFunction2 = function(itemPrice1, itemPrice2, itemPrice3){
    const subTotal = itemPrice1 + itemPrice2 + itemPrice3;
    const tax = subTotal * .06;
    const total = subTotal + tax;
    return total;  //return 110.24
}
