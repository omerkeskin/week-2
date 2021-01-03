class Meetup{
    constructor(name) {
        this.name = name;
        this.attendees = [];
    }
    printAttendeeNames(){
        this.attendees.forEach(person => console.log(person.name, person.age) );
    }
}

module.exports = {
    Meetup:Meetup
}