import {mount} from 'react-mounter';
import About from './About.js';
import Photos from './Photos.js';
import Residents from './Residents.js';
import Traditions from './Traditions.js'

FlowRouter.route('/entry/j', {
    action: function(params, queryParams) {
      mount(About);
    }
});
FlowRouter.route('/entry/j/about', {
    action: function(params, queryParams) {
      mount(About);
    }
});
FlowRouter.route('/entry/j/residents', {
    action: function(params, queryParams) {
      mount(Residents);
    }
});
FlowRouter.route('/entry/j/traditions', {
    action: function(params, queryParams) {
      mount(Traditions);
    }
});
FlowRouter.route('/entry/j/photos', {
    action: function(params, queryParams) {
      mount(Photos);
    }
});