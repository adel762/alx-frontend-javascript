import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Return a new instance of Car with the original brand, motor, and color
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;

