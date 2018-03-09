var events = require('events');

/*var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function (mssg) {
    console.log(mssg);
});

myEmitter.emit('someEvent','the event was emitted');*/


var util =require('util');
var Person =function (name) {
    this.name=name;
};
util.inherits(Person,events.EventEmitter);
var rahul=new Person('rahul');
var rohit=new Person('rohit');

var people= [rahul,rohit];

people.forEach(function(person) {
    person.on('speak',function (mssg){
        console.log(person.name+' said:'+mssg);
    });
});
rahul.emit('speak',' hey dudes');
rohit.emit('speak',' please do it');