const chalk = require('chalk');
const PersonUtil = require('./person');
const Person = PersonUtil.Person;

class Meetup{
    constructor(name, attendees = []) {
        this.name = name;
        this.attendees = attendees;
    }
    printAttendeeNames(){
        this.attendees.forEach(person => {console.log(chalk.red(person.name)) });
    }

    static create({name, attendees}){
        const meetup = new Meetup(name, attendees);
        meetup.attendees = attendees.map(Person.create)
        return meetup;
    }
}

module.exports = {
    Meetup:Meetup
}