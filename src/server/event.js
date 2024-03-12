const events = require('events'); 
const fs = require('fs');

var em = new events.EventEmitter(); //created event

em.on('FirstEvent', function (data) { // every event has its own function and whenever we run that event the function gets called. Can be called multiple times and each time it will print in the console.
    console.log('First Subscriber: '+data);
})

em.on('FirstEvent', function (data) {
    console.log('Second Subscriber: '+data);
})

em.once('NewEvent', function(data){ //only this event will be called once.  
    console.log(data)
})

em.on('status',function(code,msg){
    console.log('Got '+code+msg)
})

function c1(){
    console.log("Event listner removed.")
}

em.on("Error",function(error){
    console.error(error)
})

fs.open('sample.txt','r+',function (err,fd){
    if(err){
        em.emit("error","File not found")
    }
})

fs.open('sample1.txt','r+',function(err,fd){
    if(err){
        em.emit("error","File not found 1")
    }
})

em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
em.emit('FirstEvent', 'This is my Second Node.js event emitter example.');
em.emit('NewEvent',"my new event");
em.emit('NewEvent',"my new event");//this event will not be listened
em.emit('status',200,'OK');
em.off('status',c1);        

    

