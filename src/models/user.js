const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	userName: {
		type: String,
	},
	userMood: {
		type: Number,
		enum: [1,2,3,4,5],
	},
})

// eslint-disable-next-line new-cap
const User = new mongoose.model('User', userSchema)
module.exports = User
