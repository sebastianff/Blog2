Template.singlePost.events({
	'click .glyphicon-thumbs-up': function () {
		if(this.user!=Meteor.userId()){
			Posts.update(this._id,{$inc: {likes: 1}});
			Posts.update(this._id,{$set: {user: Meteor.userId()}});
		}
	}
});