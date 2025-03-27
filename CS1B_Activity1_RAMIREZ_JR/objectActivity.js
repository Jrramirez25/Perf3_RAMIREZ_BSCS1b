// Create a car object
const car = {
    type: "Camry",
    model: "camry",
    color: "red",
};

// It check typeOf car
console.log(typeof car); // The output: object

// It update the type of property
car.type = "Toyota";
console.log(car); // The ouput: {type: 'toyota', model: 'camry', color: 'red'}

// It add the wheels property
car.wheels = 4;
console.log(car); // The output: {type: 'toyota', model: 'camry', color: 'red', wheels: 4}