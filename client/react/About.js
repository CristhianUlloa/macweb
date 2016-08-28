import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

class About extends TrackerReact(Component) {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>True Facts About MacGregor</h2>
          <h3>MacGregor by the Numbers</h3>
          <ul>
            <li>There are 312 singles and 3 doubles</li>
            <li>High-rise suites are 6 people, low-rise ones are 8, and high-rise mini-suites are 2</li>
            <li>There are 9 entries labeled alphabetically</li>
            <li><i>i</i> Entry is imaginary</li>
            <li>There are exactly 14,685,923,700,000,000 bricks in MacGregor</li>
            <li>Each suite has 1 kitchen, equipped with 1 stove with 4 burners, 1 hood, and 1 fridge</li>
            <li>Every entry has 1 oven</li>
            <li>Each suite has 1 bathroom</li>
            <li>There are 2 elevators and 5 bubblers in the high-rise and 0 in the low-rise.</li>
          </ul>

          <h3>Facilities</h3>
          <ul>
            <li>Front Desk</li>
            <li>Courtyard</li>
            <li>Bike Room</li>
            <li>Weight Room</li>
            <li>Music Room</li>
            <li>Game Room</li>
            <li>Study Room</li>
            <li>MacGregor Convenience</li>
          </ul>

          <h3>Mailing Lists</h3>
          <ul>
            <li><a href="mailto:mac-official@mit.edu">mac-official</a> (Official mail from MacG Exec)</li>
            <li><a href="mailto:macgregor@mit.edu">macgregor</a> (MacGregor residents list)</li>
            <li><a href="mailto:mac-discuss@mit.edu">mac-discuss</a> (all other somewhat interesting mail)</li>
            <li><a href="mailto:mac-exec@mit.edu">mac-exec</a> (contact for Exec Team)</li>
            <li><a href="mailto:mac-desk@mit.edu">mac-desk</a> (contact for Desk)</li>
            <li><a href="mailto:mac-rlad@mit.edu">mac-rlad</a> (contact for RLAD)</li>
          </ul>

          <h3>Snail Mail</h3>
          <p>If for some strange reason you want to come visit or send some mail:</p>
          <p>450 Memorial Drive. Cambridge, MA. 02139</p>

          <div class="well well-sm" id="about-footer">
            <h4>True Facts About This Site</h4>
            <p>This site was built using the latest in 2015 web dev technology. Clickable map of MacGregor drawn in Inkscape and made functional with <a href="http://davidlynch.org/blog/2008/03/maphilight-image-map-mouseover-highlighting/">David Lynch's Maphilight</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
