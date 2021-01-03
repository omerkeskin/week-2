const personUtil = require('./person');
const meetupUtil = require('./meetup');

const Person = personUtil.Person;
const Meetup = meetupUtil.Meetup;

const wtmb = new Meetup("Women Techmakers in Berlin");

const omer = new Person('Omer', 23);
const merve = new Person('Merve', 21);
omer.greet(merve);

omer.attend(wtmb);
merve.attend(wtmb);
wtmb.printAttendeeNames();