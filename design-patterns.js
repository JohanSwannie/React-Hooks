// Functions as first class citizens

const calculate1 = () => {
  return 5 + 19;
};

const result = calculate1();
console.log(result);

// Callback - a function being called in another function

const calculate2 = () => {
  return (18 + 14) / 4;
};

const result2 = (callback) => {
  console.log(callback());
};

result2(calculate2);

//CREATIONAL PATTERNS
// Prototype Class Pattern or Class Design Pattern

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const volkswagen = new Car(5, "v8", "green");
console.log(volkswagen);

//CREATIONAL PATTERNS
// Constructor Pattern

class BMW extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const honda = new BMW(4, "v12", 'blue');
console.log(honda);

//CREATIONAL PATTERNS
// Singleton Pattern

let instance = null;

class Car2 {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const mercedes = new Car2(4, "v12", "red");
const mazda = new Car2(5, "v8", "purple");
console.log(mercedes);
console.log(mazda);

//CREATIONAL PATTERNS
// Factory Pattern

class Car3 {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch(type) {
      case "Jaguar":
        return new Car3(5, "v12A", 'Metallic Green');
      case "Toyota":
        return new Car3(4, "v8", 'Blaze Orange');
      case "Saab":
        return new Car3(2, "v8", 'Light Gray');
      case "Suzuki":
        return new Car3(4, "v6", 'Light Blue');
      default:
        console.log('Not Found');
    }
  }
}

const factory = new CarFactory();

const theJaguar = factory.createCar("Jaguar");
const theToyota = factory.createCar("Toyota");
const theSaab = factory.createCar("Saab");
const theSuzuki = factory.createCar("Suzuki");
const theTinCar = factory.createCar("Tin Car");

console.log(theJaguar);
console.log(theToyota);
console.log(theSaab);
console.log(theSuzuki);
console.log(theTinCar);

//CREATIONAL PATTERNS
// Abstract Factory Pattern

class Car4 {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class Car4Factory {
  createCar(model) {
    switch(model) {
      case "Jaguar":
        return new Car4(5, "v12A", 'Metallic Green');
      case "Toyota":
        return new Car4(4, "v8", 'Blaze Orange');
      case "Saab":
        return new Car4(2, "v8", 'Light Gray');
      case "Suzuki":
        return new Car4(4, "v6", 'Light Blue');
      default:
        console.log('Not Found');
    }
  }
}

class Suv {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SuvFactory {
  createSuv(model) {
    switch(model) {
      case "Mercedes":
        return new Suv(3, "v12A", 'Metallic Blue');
      case "BMW":
        return new Suv(4, "v12B", 'Deep red');
      case "Ferrari":
        return new Suv(2, "v12X", 'Light Green');
      case "Audi":
        return new Suv(3, "v12M", 'Sky Blue');
      default:
        console.log('Not Found');
    }
  }
}

const car4Factory = new Car4Factory();
const suvFactory = new SuvFactory();

const overallManufacturer = (type, model) => {
  switch(type) {
    case "other cars":
      return car4Factory.createCar(model);
    case "SUV":
      return suvFactory.createSuv(model);
  }
};

const myMerc = overallManufacturer('SUV', 'Mercedes');
console.log(myMerc);
const myToyota = overallManufacturer('other cars', 'Toyota');
console.log(myToyota);

//STRUCTURAL PATTERNS
// Mixin Pattern

let carMixin =  {
  enginPerformance() {
    console.log(`The ${this.engine} has a 94% performance rating`);
  }
};

Object.assign(Car4.prototype, carMixin);

const mySuzuki = overallManufacturer('other cars', "Suzuki");
mySuzuki.enginPerformance();

console.log(mySuzuki);

//STRUCTURAL PATTERNS
// Facade Patterns

// The Façade pattern provides an interface which shields clients
// from complex functionality in one or more subsystems.
// It is a simple pattern that may seem trivial but it is powerful
// and extremely useful. It is often present in systems that are
// built around a multi-layer architecture.
// Example is a React Application where modules are imported to use
// the code of that module in the current module

//STRUCTURAL PATTERNS
// Flyweight Patterns

// Similar to the Singleton PATTERNS
// We use it to minimize recreating the same item twice
// This will minimize memonry impact on your systems


//STRUCTURAL PATTERNS
// Decorator Patterns

// The Decorator pattern extends (decorates) an object's behavior dynamically.
// The ability to add new behavior at runtime is accomplished by a Decorator
// object which 'wraps itself' around the original object. Multiple decorators
// can add or override functionality to the original object.

//STRUCTURAL PATTERNS
// Module View Controller Pattern

// The model-view-controller (MVC) design pattern specifies that an application consist
// of a data model, presentation information, and control information. The pattern
// requires that each of these be separated into different objects.

//STRUCTURAL PATTERNS
// Module View Presenter PATTERN

// View — the UI layer. Displays the data and notifies the Presenter about user actions.
// Presenter — retrieves the data from the Model, applies the UI logic and manages the
// state of the View, decides what to display and reacts to user input notifications from the View.


//STRUCTURAL PATTERNS
// Model View View Module PATTERN

// Like many other design patterns, MVVM helps organize code and break programs
// into modules to make development, updating and reuse of code simpler and faster.
// The pattern is often used in Windows and web graphics presentation software.

//BEHAVIORAL PATTERNS
// Observer Pattern

class Car5 {
    constructor(gas) {
        this.gas = gas;
    }

    setGasLevel(val) {
        this.gas = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions.remove.filter(function(el) {
            return el !== observer;
        });
    }

    notifyAll() {
        return this.actions.forEach(function(el) {
            el.update(this);
        }.bind(this));
    }
}

class consumption {
    update(Car5) {
        Car5.gas = Car5.gas + 1;
    }
}

//BEHAVIORAL PATTERNS
// State Pattern

// It is a behavioural design pattern that allows an object to alter its
// behaviour based on changes to its internal state. The object returned
// by a state pattern class seems to change its class. Used in React.js

//BEHAVIORAL PATTERNS
// Iterator Pattern

const newsfeeds = [
    {
      type: 'top-headlines',
      query: 'sources=bbc-news'
    },
    {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
    {
      type: 'technology',
      query: 'domains=comicbookmovie.com&language=en'
    }
]

for (let feed of newsfeeds) {
    console.log(feed.type);
}

//BEHAVIORAL PATTERNS
// Strategy Pattern

class Car6 {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class SUV2 extends Car6 {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}


const civic = new Car6(4, 'V6', 'grey');
const cx5 = new SUV2(4, "V8", 'red');

console.log(civic);
console.log(cx5);

//BEHAVIORAL PATTERNS
// Memento Pattern

// The Memento pattern provides temporary storage as well as restoration of
// an object. The mechanism in which you store the object's state depends on
// the required duration of persistence, which may vary.

//BEHAVIORAL PATTERNS
// Mediator PATTERN

class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(airplane => {
            return airplane.position;
        });
    }
}

class Airplane{
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

//BEHAVIORAL PATTERNS
// Command PATTERN

// The Command pattern aims to encapsulate method invocation, requests,
// or operations into a single object and gives us the ability to both
// parameterize and pass method calls around that can be executed at our discretion.
