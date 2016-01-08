
// SUBSCRIBE
Meteor.subscribe('showMessages')

// EVENTS
Template.contact.events({
	'click #google' () {
		Meteor.loginWithGoogle({
			requestPermission: ['email','profile']
		}, function(err) {
			if (err) {
				// ERROR
			}
		});
	},
	'click #logout' () {
		Meteor.logout()
	}
})

// HELPERS
Template.contact.helpers({
	user () {
		return getFirstName(Session.get('firstName'))
	},
	messages () {
		return Messages.find({owner: Meteor.userId()})
	}
});

// RENDERED
Template.contact.rendered = ()=> {

	if (Meteor.userId() !== null) {
		Session.setPersistent('firstName', Meteor.user().profile.name)
	}

}

function getFirstName(name) {
    if (name.indexOf(' ') === -1)
        return name;
    else
        return name.substr(0, name.indexOf(' '));
};