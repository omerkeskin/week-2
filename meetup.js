const chalk = require('chalk');
class Meetup{
    constructor(name) {
        this.name = name;
        this.attendees = [];
    }
    printAttendeeNames(){
        this.attendees.forEach(person => {console.log(chalk.blue.bgRed.bold(person.name));console.log(person.age) });
    }
}

module.exports = {
    Meetup:Meetup
}