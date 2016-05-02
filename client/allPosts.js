Template.allPosts.helpers({
	posts:function(){
		return Posts.find();
	}
});