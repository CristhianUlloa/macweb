import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let G = React.createClass({
  render() {
    return (
      <div className="entryG container-fluid">
        <Navbar />
        <h2 className="text-center">Gentry</h2>
        <h4 className="text-center">A place of late-night gaming, construction, and general tomfoolery</h4>

        <div className="text-center">
          <div className="row">
            <img className="img-responsive col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6" src="/entry/g/group.jpg"/>
          </div>
          <p>Welcome to G-entry, a formidable burnt orange! We are colloquially referred to as “gents”. Some of our activities include:</p>
          <br/>

          <div id="activities" className="center-block row">
            <div className="left col-xs-12 col-sm-12 col-md-offset-1 col-lg-offset-1 col-md-3 col-lg-3">
              <p>Staying up all night</p>
              <p>Smesh (Super Smash Bros. Melee)</p>
              <p>Cooking and baking</p>
              <p>Burning things (¬_¬)</p>
              <p>Suiting up</p>
              <p>Macg Government</p>
              <p>Watching absurd Youtube videos</p>
              <p>SCRUBBING THAT DISH</p>
            </div>
            <img id="smash" className="left col-xs-offset-2 col-sm-offset-2 col-md-offset-0 col-xs-8 col-sm-8 col-lg-4 col-md-4" src="/entry/g/smash.jpg"/>
            <div className="left col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <p>Hacking</p>
              <p>Building Things</p>
              <p>Unbuilding things (often rapidly)</p>
              <p>Speaking Spanish</p>
              <p>Speaking English</p>
              <p>Speaking Chinese</p>
              <p>Eating bean dip</p>
              <p>Hanging with H-Entry</p>
            </div>
          </div>
        </div>
        <br /><br /><br />

        <div className="container">
          <p>Participating in our polls! We ask the tough questions like:</p>

          <ul className="row">
            <li className="col-md-offset-1">Is soup in a bread bowl a type of open faced sandwich?</li>
            <li className="col-md-offset-1">Jack and Elena are REX chairs, what's on the schedule?</li>
            <li className="col-md-offset-1">Why is little Timmy crying?</li>
            <li className="col-md-offset-1">Sitting or Standing?</li>
            <li className="col-md-offset-1">[REDACTED]</li>
          </ul>

          <p>Sometimes they escalate quickly...</p>
        </div>

      </div>
    );
  }
});

FlowRouter.route('/entry/g', {
  action: function(params, queryParams) {
    mount(G);
  }
});
