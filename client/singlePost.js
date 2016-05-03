Template.singlePost.events({
	'click .glyphicon-thumbs-up': function () {
		Posts.update(this._id,{$inc: {likes: 1}})	
	}
});