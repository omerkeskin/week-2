const chalk = require('chalk');
class Meetup{
    constructor(name, attendees = []) {
        this.name = name;
        this.attendees = attendees;
    }
    printAttendeeNames(){
        this.attendees.forEach(person => {console.log(chalk.blue.bgYellow(person.name)) });
    }

    static create({name, attendees}){
        return new Meetup(name, attendees);
    }
}

module.exports = {
    Meetup:Meetup
}