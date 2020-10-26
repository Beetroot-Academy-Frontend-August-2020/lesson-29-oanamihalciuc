/* 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

A method for displaying the time. 
A method for changing the time by a given amount of seconds. 
A method for changing the time by a given amount of minutes.  
A method for changing the time by a given amount of hours. 
Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75». */

let time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
    showTime() {
        console.log(`The time is ${this.hours}:${this.minutes}:${this.seconds}.`);
    },
    addSeconds(seconds1) {
        var seconds1;
        this.seconds = this.seconds + seconds1;
        if (this.seconds >= 60) {
            ++this.minutes;
            this.seconds = this.seconds - 60;
        } else {
            this.seconds = this.seconds + seconds1;
        }
        return this.showTime();
    },
    addMinutes(minutes1) {
        var minutes1;
        this.minutes = this.minutes + minutes1;
        if (this.minutes >= 60) {
            ++this.hours;
            this.minutes = this.minutes - 60;
        } else {
            this.minutes = this.minutes + minutes1;
        }
        return this.showTime();
    },
    addHours(hour1) {
        this.hours = this.hours + hour1;
        return this.showTime();
    }
}

time.addSeconds(30);
time.addMinutes(40);
time.addHours(5);