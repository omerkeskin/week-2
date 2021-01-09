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
//DatabaseUtil.save('meetup.json', wtmb);
DatabaseUtil.save('person.json', omer);
//const omerFromFile = DatabaseUtil.load('person.json') ;
/*DatabaseUtil.load('meetup.json', (err,loadedFile) => {
    if(err){
        console.log('File couldnt read');
        return;
    }
    const meet = Meetup.create(loadedFile);
    const george = new Person('George', 35);
    george.attend(meet);
    meet.printAttendeeNames();
    DatabaseUtil.save('meetup.json', meet);

});*/
const processContent = function (content){
    console.log('processContent\n',content)
}

/*resp = DatabaseUtil.readFile('meetup.json')
    .then((a) => {processContent(a)})
    .catch((err) => console.log('File read failed\n',err));*/

async function main(){
    const contents1 = await DatabaseUtil.readFile('meetup.json');
    const m = Meetup.create(contents1);
    const p0 = m.attendees[0];
    const  p = contents1.attendees[0];
    const contents2 = await DatabaseUtil.readFile('person.json');
    console.log(contents2);
}

main();
console.log('am i last operation');
console.log('no am i');
console.log('no no');


