import {mount} from 'react-mounter';
import Macweb from './Macweb.js';
import Support from './Support.js';
import MacCon from './MacCon.js';
import Rex from './Rex.js';
import Housecomm from './Housecomm.js';
import Desk from './Desk.js';
import About from './About.js';
import DiningHall from './DiningHall';

// Routes for site navigation
FlowRouter.route('/', {
  action: function(params, queryParams) {
    mount(Macweb);
  }
});

FlowRouter.route('/about', {
    action: function(params, queryParams) {
      mount(About)
    }
});

FlowRouter.route('/desk', {
    action: function(params, queryParams) {
      mount(Desk);
    }
});

FlowRouter.route('/dininghall', {
    action: function(params, queryParams) {
      mount(DiningHall);
    }
});

FlowRouter.route('/housecomm', {
    action: function(params, queryParams) {
      mount(Housecomm);
    }
});
FlowRouter.route('/maccon', {
    action: function(params, queryParams) {
      mount(MacCon);
    }
});

FlowRouter.route('/rex', {
    action: function(params, queryParams) {
      mount(Rex);
    }
});
FlowRouter.route('/support', {
    action: function(params, queryParams) {
      mount(Support);
    }
});

FlowRouter.route('/(.*)', {
    action: function(params, queryParams) {
      mount(Macweb);
    }
});