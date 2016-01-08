Messages = new Mongo.Collection('messages');

Messages.allow({
	insert () {
		return true
	}
});

MessageSchema = new SimpleSchema({
	owner: {
		type: String,
		label: 'Owner',
		autoValue () {
			return Meteor.userId()
		}
	},
	message: {
		type: String,
		label: 'Message', 
		autoform: {
			label: false
		}
	},
	format: {
		type: String,
		label: 'Format',
		autoValue () {
			return 'messages left-message' 
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue () {
			return new Date()
		}
	}
});

Messages.attachSchema( MessageSchema );

SimpleSchema.debug = true;