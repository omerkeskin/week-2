const PersonUtil = require('./person');
const MeetupUtil = require('./meetup');
const Chalk = require('chalk');
const DatabaseUtil = require('./database');

const Person = PersonUtil.Person;
const Meetup = MeetupUtil.Meetup;

const wtmb = new Meetup("Women Techmakers in Berlin");

const omer = new Person('Omer', 23);
const merve = new Person('Merve', 21);
omer.greet(merve);

omer.attend(wtmb);
merve.attend(wtmb);
wtmb.printAttendeeNames();
DatabaseUtil.save('meetup.json', wtmb);
DatabaseUtil.save('person.json', omer);
const omerFromFile = DatabaseUtil.load('person.json') ;
const meetupFromFile = DatabaseUtil.load('meetup.json') ;
const newWtmb = new Meetup(meetupFromFile.name, meetupFromFile.attendees);
newWtmb.printAttendeeNames();
Meetup.create();