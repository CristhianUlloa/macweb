import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top">
     	  <div className="container-fluid">
     	    <div className="navbar-header">
     	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
     	        <span className="sr-only">Toggle navigation</span>
     	        <span className="icon-bar"></span>
     	        <span className="icon-bar"></span>
     	        <span className="icon-bar"></span>
     	      </button>
     	      <a className="active navbar-brand" href="/">Macgregor</a>
     	    </div>

     	    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     	      <ul className="nav navbar-nav">
     	        <li><a className="active" href="/entry/j/about">J Entry</a></li>
     	        <li><a href="/entry/j/residents">Meet the Residents</a></li>
     	        <li><a href="/entry/j/traditions">Entry Traditions</a></li>
     	        <li><a href="/entry/j/photos">Photos</a></li>
     	      </ul>
     	    </div>
     	  </div>
     	</nav>
    );
  }
}

export default Navbar;