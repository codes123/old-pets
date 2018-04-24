function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function(Pet) {
    this.age ++;
    this.hunger += 5;
    this.fitness -= 3;
return Pet;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    };
};

Pet.prototype.feed = function(Pet) {
    if ((this.hunger -3) <= 0) {
        this.hunger = 0;
      } else {
        this.hunger = 3;
      };
};

Pet.prototype.checkUp = function() { 
    if (this.fitness <=3) {
        return(10);
    } else {
        this.fitness = ('i need a walk');
    };

if (this.hunger <=5) {
        return(0);
    } else {
        this.hunger = ('i am hungry');
    };
// add more code for the last two strings
// further updates

module.exports = Pet;
jkjjlj