import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

var ResCal = new Mongo.Collection("reservation-cal-dirty")

window.rescal = ResCal
Meteor.subscribe("reservation-cal-dirty")
// Tracker.autorun(function(){
//   if(ResCal.findOne() && ResCal.findOne().status) {
//   }
// })

class DiningHall extends TrackerReact(Component) {
  constructor() {
    super();
    //TODO: state restructure to use nesting in JSON
    this.state = {
      hover: {
        active: '',
        title: '',
        start: '',
        end: '',
        host: '',
        location: '',
      },
      selected: {
        id: '',
        type: '',
        title: '',
        start: {
          date: '',
          time: '',
        },
        end: {
          date: '',
          time: '',
        },
        host: '',
        location: '',
      },
    }
  }

  handleSelectionDataChange(key,type) {
    return function (e) {
      var state = this.state;
      if(type && (type.localeCompare('start') === 0 || type.localeCompare('end') === 0)) {
        state.selected[type][key] = e;
      }
      else {
        state.selected[key] = e.target.value;
      }
      this.setState(state);
    }.bind(this);
  }

  render() {
    //this will force a re-render when the calendar is updated
    let calendarState = ResCal.findOne();
    if(calendarState && calendarState.status) {
      $('#calendar').fullCalendar('refetchEvents')
      Meteor.call("cleanedDirtyCalendar",function(){})
    }

    return (
      <div>
        <Navbar />
        <div id="dininghall" className="container">
          <div id="calDisplay">
            <div id='calendar'></div>
            <div className={this.state.hover.active?'eventTooltip':'hidden'}>
              {this.state.hover.title}
              <p>Hosted by: {this.state.hover.host}</p>
              <div>
                <span>Time: </span>
                {this.state.hover.start} - {this.state.hover.end}
              </div>
              <p>Location: {this.state.hover.location}</p>
            </div>
          </div>
          <p>*Events reserving the entire dining hall MUST be first approved by an email to mac-housecomm@mit.edu</p>
          <p>**Reservations for the dining hall always trump reservations for the dance studio</p>
          <div id="editCalDisplay">
            <div className="selectors-container">
              <label htmlFor="new" className={this.state.selected.type=='new'?'checked':''}>
                <input id="new" name="editToggle" type="radio" value="new" onClick={this.handleSelectionDataChange('type')}/>
                <span>New Event</span>
              </label>

              <label htmlFor="existing" className={this.state.selected.type=='existing'?'checked':''}>
                <input id="existing" name="editToggle" type="radio" value="existing" onClick={this.handleSelectionDataChange('type')}/>
                <span>Existing Event</span>
              </label>
            </div>
            <form id="eventDisplay"  className={this.state.selected.type?'':'hidden'}>
              <div>
                <div className="eventInfo">
                  <label htmlFor="eventStartDate">
                    <span>Start Date</span>
                    <input type="text" id="eventStartDate" name="eventStartDate" className="required" value={this.state.selected.start.date}
                      onChange={this.handleSelectionDataChange('date', 'start')} readOnly />
                  </label>
                  <label htmlFor="eventStartTime">
                    <span>Start Time</span>
                    <input type="text" id="eventStartTime" name="eventStartTime" className="required" value={this.state.selected.start.time}
                      onChange={this.handleSelectionDataChange('time', 'start')} readOnly />
                  </label>
                </div>
                <div className="eventInfo">
                  <label htmlFor="eventEndDate">
                    <span>End Date</span>
                    <input type="text" id="eventEndDate" name="eventEndDate" className="required" value={this.state.selected.end.date}
                      onChange={this.handleSelectionDataChange('date', 'end')} readOnly />
                  </label>
                  <label htmlFor="eventEndTime">
                    <span>End Time</span>
                    <input type="text" id="eventEndTime" name="eventEndTime" className="required" value={this.state.selected.end.time}
                      onChange={this.handleSelectionDataChange('time', 'end')} readOnly />
                  </label>
                </div>
                <label htmlFor="eventTitle">
                  <span>Title</span>
                  <input type="text" id="eventTitle" name="eventTitle" className="required" value={this.state.selected.title}
                    onChange={this.handleSelectionDataChange('title')} />
                </label>
                <label htmlFor="eventHost">
                  <span>Host Kerberos</span>
                  <input type="text" id="eventHost" name="eventHost" className="required kerberos" value={this.state.selected.host}
                    onChange={this.handleSelectionDataChange('host')} />
                </label>
                <fieldset className="selectors-container">
                  <label htmlFor="ds" className={this.state.selected.location.localeCompare('ds')==0?'checked':''}>
                    <input id="ds" name="spaceToggle" type="radio" value="ds" onChange={this.handleSelectionDataChange('location')} />
                    <span>Dance Studio</span>
                  </label>

                  <label htmlFor="dh" className={this.state.selected.location.localeCompare('dh')==0?'checked':''}>
                    <input id="dh" name="spaceToggle" type="radio" value="dh" onChange={this.handleSelectionDataChange('location')}/>
                    <span>Dining Hall</span>
                  </label>
                </fieldset>
              </div>
              <button id="submitEvent">Submit</button>
            </form>
          </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyCvYfR--6Ps9s8l9XRQBYEP3czjb7-nBPY',
      eventSources: [
        {
          googleCalendarId: '85bp16q9pdrmfa4ggo6f18vka8@group.calendar.google.com'
        }
      ],
      eventMouseover: (event, jsEvent, view) => {
        let hoverChange = {};
        hoverChange.active = true;
        hoverChange.title = event.title;
        hoverChange.start = event.start.format('hh:mm');
        //TODO: determine whether this patch must also by applied to event.start
        if(!!event.end)
        hoverChange.end = event.end.format('hh:mm')

        this.setState({hover: hoverChange});
        Meteor.call('getCalendarEvent',event.id, (err, response) => {
          hoverChange.host = response.attendees[0].email.match(/[a-zA-Z0-9]+/g)[0];
          hoverChange.location = response.location;
          if(this.state.hover.active)
          this.setState({hover: hoverChange});
        });
      },
      eventMouseout:(event, jsEvent, view) => {
        this.setState({
          hover: {
            actve: false,
            title: '',
            start: '',
            end: '',
            host: '',
            location: '',
          }
        });
      },
      eventClick: (event, jsEvent, view) => {
        let selectedChange = {
          type: 'existing',
          start: {},
          end: {},
          host: '',
          location: '',
        };
        selectedChange.title = event.title;
        selectedChange.start.date = event.start.format("MM-DD-YYYY");
        selectedChange.start.time = event.start.format("H:mm");
        //TODO: determine whether this patch must also by applied to event.start
        if(!!event.end) {
          selectedChange.end.date = event.end.format('MM-DD-YYYY')
          selectedChange.end.time = event.end.format('H:mm')
        }

        this.setState({selected: selectedChange});
        Meteor.call('getCalendarEvent',event.id, (err, response) => {
          selectedChange.id = response.id;
          selectedChange.host = response.attendees[0].email.match(/[a-zA-Z0-9]+/g)[0];
          selectedChange.location = response.location;
          this.setState({selected: selectedChange});
        });

        return false
      },
      dayClick: function(date,jsEvent,view) {
        return false
      },
      header: {
        left: 'today,month,agendaWeek,agendaDay',
        center: 'title',
        right: 'prev,next'
      },
      selectable:true,
      timeFormat: 'H:mm)'
    })

    $("#eventStartDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#eventStartTime",
      altFieldTimeOnly: true,
      altTimeFormat: "HH:mm",
      onSelect: (dateText, inst) => {
        this.handleSelectionDataChange('date', 'start')(dateText.split(' ')[0])
        this.handleSelectionDataChange('time', 'start')(dateText.split(' ')[1])
      },
    })
    $("#eventEndDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#eventEndTime",
      altFieldTimeOnly: true,
      altTimeFormat: "HH:mm",
      onSelect: (dateText, inst) => {
        this.handleSelectionDataChange('date', 'end')(dateText.split(' ')[0])
        this.handleSelectionDataChange('time', 'end')(dateText.split(' ')[1])
      },
    })

    $.validator.addMethod("kerberos", function(value, element) {
      return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "Please use a valid kerberos");

    $('#eventDisplay').validate({
      messages: {
        eventStartDate: {
          required: "",
        },
        eventStartTime: {
          required: "",
        },
        eventEndDate: {
          required: "",
        },
        eventEndTime: {
          required: "",
        },
        eventTitle: {
          required: "X",
        },
        eventHost: {
          required: "X",
          kerberos: "valid kerberos needed",
        }
      },
      submitHandler: () => {
        console.log(this);
        var startDate = this.state.selected.start.date;
        var startTime = this.state.selected.start.time
        var start = moment(startDate+" "+startTime,"MM-DD-YYYY H:mm")

        var endDate = this.state.selected.end.date;
        var endTime = this.state.selected.end.time;
        var end = moment(endDate+" "+endTime,"MM-DD-YYYY H:mm")

        var host = this.state.selected.host;
        var summary = this.state.selected.title;
        var location = this.state.selected.location;

        var data = {}
        data.id = this.state.selected.id;
        data.start = start.format("YYYY-MM-DDTHH:mm:ssZ")
        data.end = end.format("YYYY-MM-DDTHH:mm:ssZ")
        data.host = host
        data.summary = summary
        data.location = location
        if(this.state.selected.type.localeCompare('new') == 0){
          Meteor.call("insertCalenderEvent",data,() => {
            this.setState({
              selected: {
                type: '',
                title: '',
                start: {
                  date: '',
                  time: '',
                },
                end: {
                  date: '',
                  time: '',
                },
                host: '',
                location: '',
              }
            });
          });
        }else {
          Meteor.call("updateCalenderEvent",data, () => {
              this.setState({
                selected: {
                  type: '',
                  title: '',
                  start: {
                    date: '',
                    time: '',
                  },
                  end: {
                    date: '',
                    time: '',
                  },
                  host: '',
                  location: '',
                }
              });
          })
        }
      }
    });
  }
}

export default DiningHall;

