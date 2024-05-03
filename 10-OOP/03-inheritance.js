class Animal {
    constructor (sound){
        this.name = "No Name";
        this.legs = 4;
        this.tail = true;
        this.noise = sound;
        this.tailString = this.tail ? "a tail" : "has no tail";
    }
    displayAnimalInfo(){
        console.log(`${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}.`)
    }
}

class Cat extends Animal {
    constructor(name, sound){
        super();
        this.name = "A cat named " + name;
        this.noise = sound;
    }
    purr(){
        console.log("Purr!!!!")
    }
}

class Fish extends Animal {
    constructor(name){
        super("Gulb Glub");
        this.name = name;
        this.legs = 0;
    }
}

class Kitten extends Cat {
    constructor(name, sound){
        super(sound);
        this.name = name;
        this.noise = sound;
    }
    scratch(){
        console.log("Scratches FUrniture!")
    }
    displayAnimalInfo(food){
        console.log(`This is a Kitten and ${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}. EATS ${food}`)
    }
}

// const mrPants = new Cat("Mr. Pants", "Meow!");

// mrPants.displayAnimalInfo();
// mrPants.purr();

// const shinySides = new Fish("Lt. Shiny Sides");

// shinySides.displayAnimalInfo();

const nermal = new Kitten("Nermal", "little meow");

nermal.displayAnimalInfo("Cat Food");
nermal.purr();
nermal.scratch();