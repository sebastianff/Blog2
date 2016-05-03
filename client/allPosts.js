Template.allPosts.helpers({
	posts:function(){
		return Posts.find();
	}
});

Template.allPosts.events({
	'click .removePost': function () {
			Posts.remove(this._id);
		}
});