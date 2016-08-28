import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

Meteor.subscribe('housecomm');
HousecommMembers = new Mongo.Collection("housecomm");

class Housecomm extends TrackerReact(Component) {
  render() {

    let housecomm = HousecommMembers.find({}).fetch().map((member) => {
      return (
        <tr key={member.name}>
          <td>{member.role}</td>
          <td>{member.name}</td>
          <td>{member.email}</td>
        </tr>
      );
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="panel-group" id="accordion">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#housecomm-whos-who">
                    Who&#39;s Who
                  </a>
                </h2>
              </div>
              <div id="housecomm-whos-who" className="panel-body panel-collapse collapse out">
                <div className="panel-body">
                  <table className="table table-condensed table-striped">
                    <thead>
                      <tr>
                        <th>Position</th>
                        <th>Person</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {housecomm}
                    </tbody>
                  </table>
                  <p>Entry chair emails are ichairs@mit.edu, where i is the entry letter you wish to contact.</p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#housecomm-documents">
                    Documents
                  </a>
                </h2>
              </div>
              <div id="housecomm-documents" className="panel-collapse collapse out">
                <div className="panel-body">
                  <p><a  href="/housecomm-docs/constitution.pdf" target="_blank">Constitution</a></p>
                  <p><a href="/housecomm-docs/bylaws.pdf" target="_blank">Bylaws</a></p>
                  <p><a href="/housecomm-docs/security.pdf" target="_blank">Security Policy</a></p>
                  <p><a href="/housecomm-docs/storage.pdf" target="_blank">Storage Policy</a></p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#housecomm-treasury">
                    Treasury
                  </a>
                </h2>
              </div>
              <div id="housecomm-treasury" className="panel-collapse collapse out">
                <div className="panel-body">
                  <h2>Reimbursement</h2>

                  <p>These instructions are modified slightly from <a href="http://studentlife.mit.edu/sao/finance/training">SAO&#39;s Financial Training Page</a>. Please refer to that page if you have any questions. If you still have questions, email <a href="mailta:mac-trez@mit.edu">mac-trez@mit.edu</a>.</p>

                  <h3>Instructions</h3>

                  <ol start="0">
                    <li>Make sure to save your receipts!</li>
                    <li>Go to the <a href="https://atlas.mit.edu/atlas/Home.action#purchasing_1">Atlas Buying page</a>, and click on the Reimbursement link under <code>Requests for Payment (RFPs)</code></li>
                    <li>Fill out the RFP. Detailed instructions below.</li>
                    <li>Send the RFP to the Treasurer (no longer Jeremy Kaplan)</li>
                    <li>Print out the page displayed after sending</li>
                    <li>Staple your receipt(s) confirmation page you just printed. Take that to desk, and tell them to deliver it to the Treasurer.</li>
                    <li>[Optional] Nag the Treasurer until you are reimbursed.</li>
                  </ol>

                  <h3>RFP Instructions</h3>
                  <ol start="0">
                    <li>Follow the above instructions up to Step 2.</li>
                    <li>Enter the Payee (person being reimbursed) in the box, hit <code>Search</code>, and click on the result that matches you.</li>
                    <li>[Optional] Name the RFP anything you want (you can use it to search the system for it).</li>
                    <li>Fill out the <code>Date of Service</code> and <code>Amount</code> fields with their respective values. (Remember, DO NOT INCLUDE TAX.)</li>
                    <li>DO NOT INCLUDE TAX!</li>
                    <li>Fill the <code>G/L</code> field using the reference at the bottom of <a href="http://studentlife.mit.edu/sao/finance/faq">this page</a></li>
                    <li>Fill the <code>Cost Object</code> field with <code>2720608</code> (MacGregor&#39;s account number)</li>
                    <li>Fill the <code>Explanation</code> field appropriately</li>
                    <li>Click <code>Save &amp; Continue</code>.</li>
                    <li>Scan and attach your receipt(s) to the RFP you&#39;ve created.</li>
                    <li>Enter the Treasurer&#39;s name in the box (Aaron Zeng), hit <code>Search</code>, and click on the result that matches the Treasurer (kerberos: a2z)</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#housecomm-different-entry">
                    How to Move to a Different Entry
                  </a>
                </h2>
              </div>
              <div id="housecomm-different-entry" className="panel-collapse collapse out">
                <div className="panel-body">
                  <h5>How to move to a different entry in MacGregor:</h5>
                  <ol>
                    <li>Get written permission from the chair(s) of the entry you would like to move into.  The recommended method is to email <a href="mailto:ichairs@mit.edu">ichairs@mit.edu</a>, where i is the entry letter, and cc <a href="mailto:mac-rac@mit.edu">mac-rac@mit.edu</a>.</li>
                    <li>Ask the entry chairs for your new room assignment.  If they don’t have any openings, you may be placed on a waitlist.</li>
                    <li>Inform your current entry chairs that you will be leaving the entry so they can assign your current room to someone else.</li>
                    <li>Wait for an email from Bob Ramsay or the RAC saying that your new room is ready for you to move in.</li>
                  </ol>

                  This process applies year-round, although mid-semester requests are likely to be deferred to the end of the semester.

                  Questions?  Contact the Room Assignment Chair at <a href="mailto:mac-rac@mit.edu">mac-rac@mit.edu</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Housecomm;