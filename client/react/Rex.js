import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

Meteor.subscribe('rex')
const RexEvents = new Mongo.Collection("rex")

class Rex extends TrackerReact(Component) {
  render() {

    let rexEvents = RexEvents.find({}).fetch().map((event) => {
      return (
        <tr key={event.name+event.time}>
          <td style={{width:'15%'}}>{event.name}</td>
          <td style={{width:'5%'}}>{event.day}</td>
          <td style={{width:'15%'}}>{event.time}</td>
          <td style={{width:'15%'}}>{event.location}</td>
          <td style={{width:'35%'}}>{event.description}</td>
        </tr>
      );
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>REX Event List</h2>

          <p>For your viewing pleasue, here are all of Macgregor&#39;s REX Events. Have fun.</p>
          <br/>

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Event</th>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rexEvents}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default Rex;