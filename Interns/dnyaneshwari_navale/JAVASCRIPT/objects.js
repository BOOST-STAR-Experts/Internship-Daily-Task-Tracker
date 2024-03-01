let person = {
    name : "John",
    age : 20,
    greet : function(){
        console.log("Hello, my name is " + this.name + " and i am " + this.age + " years old.");
    }
};
person.greet();

let weather = {
    temp : 25,
    humidity : 60,
    location : "India"
}
console.log(`weather in ${weather.location}: Temperature ${weather.temp}°C and Humidity ${weather.humidity}%`);

let circle = {
    radius: 5,
    area : function(){
        return Math.PI * this.radius ** 2;
    }
};
console.log("Area of circle : " + circle.area());

let rectangle = {
    length : 3,
    breadth : 4,
    area : function(){
        return this.length * this.breadth;
    }
}
console.log("Area of Rectangle : " + rectangle.area());

let square = {
    side : 5,
    area : function(){
        return this.side ** 2;
    }
}
console.log("Area of Square : " + square.area());