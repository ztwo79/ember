import Ember from 'ember';

export default Ember.Controller.extend({
	firstName: "firstName",
  	lastName: "lastName",

	fullName: function() {
	    return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName')
});
