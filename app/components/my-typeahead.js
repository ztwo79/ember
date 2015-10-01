import Ember from 'ember';

export default Ember.Component.extend({
	// suggest items
	suggestItems:[],
	selecedItems:[],
	isSelecting:false,
	focusOut:function() {
		// not selecting any items
		if(!this.get("isSelecting")){
			this.set("suggestItems",[]);
			this.set("searchWord","");
		}
	},
  	actions:{
  		selecting:function(){
  			this.set("isSelecting",true);
  		},
  		notSelecting:function(){
  			this.set("isSelecting",false);	
  		},
		typing:function(){
      		// send this typeahead to action
      		this.sendAction('typing' , this);
		},
		// select item
		selectItem:function(suggestItem){
			this.get("selecedItems").pushObject(suggestItem);
      		this.set("suggestItems",[]);
			this.set("searchWord","");
			this.set("isSelecting",false);	
		},
		// remove seleced item
		removeSelectedItem:function(selecedItem){
			this.get("selecedItems").removeObject(selecedItem);
		}
	}
});
