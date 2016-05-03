Router.configure({
	layoutTemplate:'layout'
});
Router.route('/', {name: 'allPosts'});
Router.route('/create', {name: 'addPost'});