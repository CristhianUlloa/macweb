import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Macgregor</a>
          </div>

          <div className="collapse navbar-collapse">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li id="nav-rex"><a href="/rex">REX</a></li>
                <li id="nav-housecomm"><a href="/housecomm">Administrivia</a></li>
                <li id="nav-support"><a href="/support">Student Support</a></li>
                <li id="nav-maccon"><a href="/maccon">MacCon</a></li>
                <li id="nav-desk"><a href="/desk">Movie List</a></li>
                <li id="nav-laundry"><a href="http://laundryview.com/laundry_room.php?lr=1364815">Laundry</a></li>
                <li id="nav-dininghall"><a href="/dininghall">Dining Hall</a></li>
                <li id="nav-about"><a href="/about">About</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;