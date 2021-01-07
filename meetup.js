const chalk = require('chalk');
class Meetup{
    constructor(name, attendees = []) {
        this.name = name;
        this.attendees = attendees;
    }
    printAttendeeNames(){
        this.attendees.forEach(person => {console.log(chalk.blue.bgYellow(person.name)) });
    }

    static create(){
        console.log('From static create()');
    }
}

module.exports = {
    Meetup:Meetup
}