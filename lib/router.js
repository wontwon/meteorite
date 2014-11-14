Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'postsList'});

Router.route('/test', {name: 'testPage'});