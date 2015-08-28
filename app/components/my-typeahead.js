import Ember from 'ember';

export default Ember.Component.extend({
	// suggest items
	suggestItems:[],
  	actions:{
		typing:function(){
			// put search word into suggestion 
			var suggestItems = this.get("suggestItems");
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
				])
			}else{
				// find nothing
				this.set("suggestItems",[]);
			}
			return true;
		},
		pickItem:function(suggestItem){
			this.set("searchWord",suggestItem.name);
			this.set("suggestItems",[]);
			// alert(suggestItem.name);
		}
	}
});
