Template.singlePost.events({
	'click .glyphicon-thumbs-up': function () {
		if(this.liker!=Meteor.userId()){
			Posts.update(this._id,{$inc: {likes: 1}});
			Posts.update(this._id,{$set: {liker: Meteor.userId()}});
		}
	}
});