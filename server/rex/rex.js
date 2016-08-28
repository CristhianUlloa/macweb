//var CSV = Npm.require('csv');

Events = new Mongo.Collection("rex");
Events.remove({});

buffer=Assets.getText("rex/rex.csv");
//console.log(buffer);

CSV().from(
    buffer,
    {comment: '#', delimiter: '|', quote: ''}
)
  .to.array( Meteor.bindEnvironment( function(data){
    //console.log(data);

    for(var row=0; row<data.length; row++) {
       var newRecord = {
            'name': data[row][0],
            'day': data[row][1],
            'time': data[row][2],
            'location': data[row][3],
            'description': data[row][4],
        };

        Events.insert(newRecord);
    }
  } ));

Meteor.publish('rex', function() {
  return Events.find();
});
