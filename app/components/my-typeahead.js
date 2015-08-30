import Ember from 'ember';

export default Ember.Component.extend({
	// suggest items
	suggestItems:[],
	selecedItems:[],
  	actions:{
		typing:function(){
			// put search word into suggestion 
			// var suggestItems = this.get("suggestItems");
			// set some item
			if(this.get("searchWord").length>0){
				this.set("suggestItems",[
					{
						icon:"my-gf.jpg",
						name:"my girlfriend"		
					},
					{
						icon:"me.jpg",
						name:"wei-ming"		
					},
				]);
			}else{
				// find nothing
				this.set("suggestItems",[]);
			}
			return true;
		},
		// select item
		selectItem:function(suggestItem){
			// push item into selected items
			this.get("selecedItems").pushObject(suggestItem);
			this.set("suggestItems",[]);
		},
		// remove seleced item
		removeSelectedItem:function(selecedItem){
			this.get("selecedItems").removeObject(selecedItem);
		}
	}
});
