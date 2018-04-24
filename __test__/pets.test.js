const Pet = require('../src/pet');

describe('constructor', () => {
  it('sets the name property',() => {
      const fido = new Pet('Fido');
      expect(fido.name).toEqual('Fido');

      const buster = new Pet('Buster');
      expect(buster.name).toEqual('Buster');
  });

  it('should have an initial age of 0', () => {
    const john = new Pet('John');
    expect(john.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increases the age property by 1', () => {
    const fredo = new Pet('fredo');
    // growUp age to increase by 1
    fredo.growUp() 
    expect(fredo.age).toEqual(1)
  });
});

describe('hunger', () => {
  it('should have an initial hunger of 0 and increase value by 5', () => { 
    const gerald  = new Pet('gerald');
    // growUp age to increase hunger level by 5
    gerald.growUp()
    expect(gerald.hunger).toEqual(5);
  });
});

describe('fitness', () => {
  it('should have an initial fitness level of 10', () => { 
    const gerald  = new Pet('gerald');
    
    // growUp age to decrease fitness by 3
    gerald.growUp()
    expect(gerald.fitness).toEqual(7);
  });
});

describe('walk', () => {
  it('should have the pet/s fitness level by 4 with a maximum fitness of 10', () => { 
    const gerald  = new Pet('gerald');
    //gerald.fitness = 8;
    gerald.walk();
    // walking should increase fitnes  level by 4
    // fitness level to be <= 10
    expect(gerald.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('should decrease the pet/s hunger level by 3', () => { 
    const gerald  = new Pet('gerald');
    gerald.feed();
    // a pet/s hunger level to be => 0
    expect(gerald.hunger).toBeGreaterThanOrEqual(0);
  });
});
describe('checkUp', () => {
  it('returns the given string statement', () => {
    const gerald  = new Pet('gerald');
    gerald.checkUp();
    //gerald.fitness = 10;
    //gerald.hunger = 0;
    expect(gerald.fitness).toBe(('i need a walk'));
    expect(gerald.hunger).toBe(('i am hungry'));
    expect(gerald.feed).toBe(( 'fitter'));
    expect(gerald.hunger && gerald.fitness == true).toEqual(('I am hungry AND I need a walk'));
    expect(gerald.hunger !== gerald.fitness == true).toEqual(('I feel great!'));
  });
});
