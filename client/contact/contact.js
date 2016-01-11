
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
	},
	'keyup #message-input' (e) {
		if (e.which === 13) {
			console.log('13')
			scrollDown();

			// LOG
			console.log(Messages.find({owner: Meteor.userId()}).count())
		}
	},
	'click .signout' () {
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
	},
	moment () {
		var coll = Messages.findOne({owner: Meteor.userId()})
		moment(coll.createdAt).format('dddd')
	}
});

Template.registerHelper('momentFormat', function(date) {
	if (date) {
		return moment(date).fromNow();
	}
});

// RENDERED
Template.contact.rendered = ()=> {

	scrollDown();

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

function scrollDown() {
	$('.chat-box').animate({
  		scrollTop: $('.chat-box').get(0).scrollHeight}, 1500);
}