const PersonUtil = require('./person');
const MeetupUtil = require('./meetup');
const Chalk = require('chalk');
const DatabaseUtil = require('./database');

const Person = PersonUtil.Person;
const Meetup = MeetupUtil.Meetup;

const wtmb = new Meetup("Women Techmakers in Berlin");

const omer = new Person('Omer', 23);
const merve = new Person('Merve', 21);

omer.attend(wtmb);
merve.attend(wtmb);
DatabaseUtil.save('meetup.json', wtmb);
DatabaseUtil.save('person.json', omer);
const omerFromFile = DatabaseUtil.load('person.json') ;
const meetupFromFile = DatabaseUtil.load('meetup.json');

const meet = Meetup.create(meetupFromFile);

const george = new Person('George', 35);
george.attend(meet);
meet.printAttendeeNames();
DatabaseUtil.save('meetup.json', meet);