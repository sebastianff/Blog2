Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
	title: {
	    type: String,
	    optional:true,
	    label: "Title",
	    max: 200
	},
	content: {
	    type: String,
	    optional:true,
	    label: "Content",
	    max: 1000
	},
	likes: {
		type:Number,
		optional:true,
		min:0
	},
	liker:{
		type:String,
		optional:true,
	},
	author:{
		type:String,
		autoValue:function(){
			return Meteor.userId()
		},
		optional:true
	}
}));

