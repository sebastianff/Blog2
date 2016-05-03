Template.allPosts.helpers({
	posts:function(){
		return Posts.find();
	},
	currentUser:function(){
		if(this.author===Meteor.userId()){
			return true;
		}
	}
});

Template.allPosts.events({
	'click .removePost': function () {
			Posts.remove(this._id);
		}
});