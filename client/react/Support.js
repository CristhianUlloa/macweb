import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

Meteor.subscribe('supports');
const Supports = new Mongo.Collection("supports");
Meteor.subscribe('medlinks');
const MedLinks = new Mongo.Collection("medlinks");
Meteor.subscribe('peerears');
const PeerEars = new Mongo.Collection("peerears");

class Support extends TrackerReact(Component) {
  render() {

    let sources = Supports.find({}).fetch().map((support) => {
      return (
        <tr key={support.name}>
          <td>{support.role}</td>
          <td>{support.name}</td>
          <td>{support.contact}</td>
        </tr>
      );
    });

    let medlinks = MedLinks.find({}).fetch().map((medlink) => {
      return (
      <tr key={medlink.name}>
        <td>{medlink.name}</td>
        <td>{medlink.email}</td>
        <td>{medlink.entry}</td>
      </tr>
    );
    });

    let peerears = PeerEars.find({}).fetch().map((peerEar) => {
      return (
        <tr key={peerEar.name}>
          <td>{peerEar.name}</td>
          <td>{peerEar.entry}</td>
          <td>{peerEar.email}</td>
        </tr>
      )
    });

    return (
      <div>
        <Navbar />
        <div id="support" className="container">
          <h2>Student Support</h2>

          <p>There are a lot of people who you can get support from. If you aren't sure where to start you can always default to classmates and your GRT. Always.</p>
          <br/>

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Contact Info</th>
              </tr>
            </thead>
            <tbody>
              {sources}
            </tbody>
          </table>
          <br/>

          <h3>Medlinks</h3>

          <p>MedLinks can answer questions about MIT Medical’s policies and services and can help you figure out when and how to connect with other MIT resources. They also provide single doses of common over-the-counter medications, first-aid materials, and safer-sex supplies. <a href="https://medlinks.mit.edu/where-we-are?field_residence_value%5B%5D=dorm_macg">Medlink Site</a></p>
          <br/>

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Entry</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {medlinks}
            </tbody>
          </table>

          <br/>
          <h3>Peer Ears</h3>

          <p>Peer Ears are here to support mental health and answer any questions about MIT’s mental health resources. They are trained and confidential, and most importantly, they’re peers. Feel free to drop a note or come talk to them, and if you want to join to add more support for MacGregor or get help now, you can find out more on their website, mitpeerears.org.</p>
          <br/>

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Entry</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {peerears}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default Support;