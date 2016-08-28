Meteor.startup(function() {
  fs = Npm.require('fs')
  var google = Npm.require('googleapis');
  var googleAuth = Npm.require('google-auth-library');
  var calendar = google.calendar('v3');

  var SCOPES = ['https://www.googleapis.com/auth/calendar'];
  var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';
  var TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';

  var oauth2Client;
  // Load client secrets from a local file.
  var client_secret=Assets.getText("dininghall/client_secret.json");
  // Authorize a client with the loaded credentials, then call the
  // Google Calendar API.
  authorize(JSON.parse(client_secret));

  var ResCal = new Mongo.Collection("reservation-cal-dirty")
  ResCal.upsert({},{$set: {status:false}})
  Meteor.publish('reservation-cal-dirty', function() {
    return ResCal.find();
  });

  /**
  * Create an OAuth2 client with the given credentials, and then execute the
  * given callback function.
  *
  * @param {Object} credentials The authorization client credentials.
  */
  function authorize(credentials) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function(err, token) {
      oauth2Client.credentials = JSON.parse(token);
    });
  }

  Meteor.methods({
    cleanedDirtyCalendar: function() {
      ResCal.update({},{$set: {status:false}})
    },
    insertCalenderEvent: function (data) {
      var event = {
        'summary': data.summary,
        'location': data.location,
        'description': 'via MacWeb',
        'start': {
          'dateTime': data.start,
          'timeZone': 'America/New_York',
        },
        'end': {
          'dateTime': data.end,
          'timeZone': 'America/New_York',
        },
        'attendees': [
          {
            'displayName': data.host,
            'email': data.host+'@mit.edu'
          }
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'popup', 'minutes': 10},
          ],
        },
      };

      calendar.events.insert({
        auth: oauth2Client,
        calendarId: '85bp16q9pdrmfa4ggo6f18vka8@group.calendar.google.com',
        resource: event,
      }, Meteor.bindEnvironment(function(err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          return;
        }
        console.log('Event created: %s', event.htmlLink);
        ResCal.upsert({},{$set: {status:true}})
      }));
    },
    updateCalenderEvent: function (data) {
      var event = {
        'summary': data.summary,
        'location': data.location,
        'description': 'Macgregor Space Reservation via MacWeb',
        'start': {
          'dateTime': data.start,
          'timeZone': 'America/New_York',
        },
        'end': {
          'dateTime': data.end,
          'timeZone': 'America/New_York',
        },
        'attendees': [
          {
            'displayName': data.host,
            'email': data.host+'@mit.edu'
          }
        ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'popup', 'minutes': 10},
          ],
        },
      };

      calendar.events.update({
        auth: oauth2Client,
        calendarId: '85bp16q9pdrmfa4ggo6f18vka8@group.calendar.google.com',
        eventId: data.id,
        resource: event,
      }, Meteor.bindEnvironment(function(err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          return;
        }
        console.log('Event updated: %s', event.htmlLink);
        ResCal.upsert({},{$set: {status:true}})
      }));
    },
    getCalendarEvent: function(eventID) {
      var event = Meteor.wrapAsync(calendar.events.get)({
        auth: oauth2Client,
        calendarId: '85bp16q9pdrmfa4ggo6f18vka8@group.calendar.google.com',
        eventId: eventID,
      })
      return event
    }
  });

})
