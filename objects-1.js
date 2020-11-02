/* 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

A method that displays the car info 
A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break. */

let car = {
    manufacturer: 'Tesla',
    model: 3,
    releaseYear: 2017,
    averageSpeed: 100,
    carInfo() {
        console.log(car)
    },
    timeFrame(distance) {
        var time = distance / this.averageSpeed;
        if (time >= 4 && time < 8) {
            time = time + 1;
        } 
        if (time >= 8 && time < 12) {
            time = time + 2;
        } 
        if (time >= 12 && time < 16) {
            time = time + 3;
        } 
        return time;
    }
}

car.carInfo();
car.timeFrame(300);

/* How do I write all te IF rules in a easier and faster way? Every 4hours, I need to add 1 hour more to the km. */

