import Ember from 'ember';

export default Ember.Component.extend({
	// suggest items
	suggestItems:[],
	selecedItems:[],
  	actions:{
		typing:function(){
      		// send this typeahead to action
      		this.sendAction('typing' , this);
		},
		// select item
		selectItem:function(suggestItem){
			this.get("selecedItems").pushObject(suggestItem);
      		this.set("suggestItems",[]);
			this.set("searchWord","");
		},
		// remove seleced item
		removeSelectedItem:function(selecedItem){
			this.get("selecedItems").removeObject(selecedItem);
		}
	}
});
