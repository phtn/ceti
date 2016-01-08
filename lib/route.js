function renderThisTemplate(template) {
	BlazeLayout.render('layout', {head: 'head', body: template, foot: 'foot'})
}

FlowRouter.route('/', {
	name: 'Home',
	action() {
		renderThisTemplate('home')
	}
});

FlowRouter.route('/clients', {
	name: 'Clients Page',
	action() {
		renderThisTemplate('clients')
	}
});

FlowRouter.route('/contact', {
	name: 'Contact Page',
	action() {
		renderThisTemplate('contact')
	}
});

FlowRouter.route('/team', {
	name: 'Team Page',
	action() {
		renderThisTemplate('team')
	}
});