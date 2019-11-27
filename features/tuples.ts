// Example object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// Used in the Tuples below
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Perhaps tuples aren't useful as you lose the meaning when compared to objects
const carSpecs: [number, number] = [400, 3354];

const carStates = {
  horsepower: 400,
  weight: 3354
};
