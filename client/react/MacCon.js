import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

const HARDCODED = true;
const HARDCODERETURN = 'CLOSED FOR SUMMER';

const OFFSET = 4 // Eastern time accounting for DST

const OPEN = 'open'
const CLOSED = 'closed'

const HOURS = [
  {close:0, open:12}, //sunday
  {close:0, open:15}, //monday
  {close:0, open:15}, //tuesday
  {close:0, open:15}, //wednesday
  {close:0, open:15}, //thursday
  {close:2, open:15}, //friday
  {close:2, open:12} //saturday
]

let MacCon = React.createClass({
  getInitialState() {
    return {
      status: HARDCODERETURN
    };
  },

  updateMacConStatus() {
    let datetime = new Date()

    day = datetime.getDay()
    hour = datetime.getUTCHours() - OFFSET
    when = HOURS[day];

    let prediction =  (hour < when.close || hour >= when.open) ? OPEN: CLOSED
    this.setState({status: prediction});
  },

  render() {
    return (
      <div>
        <Navbar />
        <div id="maccon" className="container">
          <h2>MacCon is...</h2>
          <div id="ismacconopen" className={HARDCODED?'rainbow':this.state.status}>
            {this.state.status}
          </div>
        </div>
      </div>
    )
  },

  componentDidMount() {
    if (!HARDCODED) {
      this.updateMacConStatus();
      setInterval(this.updateMacConStatus,60000);
    }
  },
});

export default MacCon;