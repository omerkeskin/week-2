class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.meetups = [];
    }

    greet (person) {
        console.log('Hello everybody -> '+person.name);
    }

    attend(meetup){
        this.meetups.push(meetup.name);
        meetup.attendees.push(this);
    }
}

module.exports = {
    Person : Person
}