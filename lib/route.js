function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: 'nav', body: template})
}

FlowRouter.route('/', {
	name: 'Home',
	action() {
		renderThisTemplate('home')
	}
});