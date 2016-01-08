Meteor.publish('showMessages', ()=> {
	return Messages.find({})
});