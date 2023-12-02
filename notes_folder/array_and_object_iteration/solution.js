// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for (var product of dairy){
        console.log(product);
    }
}


// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for (var property of Object.keys(bird)) {
        console.log(property + ": " + bird[property]);
    }
}
// Task 3

function animalCan() {
    for (var property of Object.keys(animal)) {
        //console.log(property + ": " + bird[property]);
        birdCan();
        console.log(property + ": " + animal[property]);
    }
}

logDairy();
birdCan();
animalCan();