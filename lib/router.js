Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'louding',
	waitOn: function(){
		return Meteor.subscribe('posts');
	}
});

Router.route('/', {name: 'postsList'});

