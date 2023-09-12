const  User  = require('../../models/user')

async function signup(req, res) {
	const { userName, userMood } = req.body
	console.log(userName, userMood)

	const newUser = await User.create({
		userName,
		userMood,
	})

	return res.status(201).json({
		code: 201,
		newUser,
	})
}

module.exports = signup
