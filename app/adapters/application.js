import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	// set host 
	host: 'http://app',
	// namespace: 'blog/public', 
	shouldReloadAll() { return true; }	
	
	

});
