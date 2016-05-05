Router.configure({
	layoutTemplate:'layout'
});
Router.route('/', {name: 'allPosts'});
Router.route('/create', {name: 'addPost'});
Router.route('/view/:_id', {
name: 'viewPost',
data: function() { 
		return Posts.findOne(this.params._id); 
	}
});