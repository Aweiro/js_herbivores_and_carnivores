'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  isAlive(name) {
    if (name.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== name);
    }
  }

  hide() {
    this.hidden = true;
  }

  bite(name) {
    if (name.hidden === false) {
      name.health -= 50;
      this.isAlive(name);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    super.bite(name);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// const deer = new Herbivore('Bembi');
// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

// // Animal.alive === [
// //   {name: 'Bembi', health: 100, hidden: false},
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100, hidden: false},
// // ];
// console.log(Animal.alive);

// lion.bite(deer);
// panther.bite(lion);

// // Animal.alive === [
// //   {name: 'Bembi', health: 50},
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100},
// // ];
// console.log(Animal.alive);

// panther.bite(deer);
// rabbit.hide();
// panther.bite(rabbit);

// // Animal.alive === [
// //   {name: 'Bagira', health: 100},
// //   {name: 'King', health: 100},
// //   {name: 'Max', health: 100, hidden: true},
// // ];
// console.log(Animal.alive);
