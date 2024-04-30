class Employee {
    constructor(firstName, lastName, employeeID){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.fullTime = true;
        this.vipParking = true;
        this.reviews = [];
    }
    printMetaData(){
        console.log(`${this.firstName} ${this.lastName} Employee # ${this.employeeID}`)
    }
    addReview(review){
        this.reviews.push(review);
    }
}

class Review {
    constructor(title, body, date){
        this.title = title;
        this.body = body;
        this.date = date;
        this.valid = true;
    }
}

const bob = new Employee("Bob", "Dobalina", "0987443");
const samsReviewOnBob = new Review("Sams Review", "Bobs Great", "04/29/2024");
const jimsReviewOnBob = new Review("Bobs Review", "Bobs Good", "04/29/2024");

bob.addReview(samsReviewOnBob);
bob.addReview(jimsReviewOnBob);

console.log(bob)




