

function total(outSidePayment, permission) { //HOISTED
    if (!permission) return false;

   let clientPayment = 1000;
    function installment(payment){
        clientPayment -= payment;
        return clientPayment
    }
    return installment(outSidePayment)
}

console.log(total(500, true))









