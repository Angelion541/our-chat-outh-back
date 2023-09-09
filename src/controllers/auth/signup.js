
async function signup(req, res) {
	const { userName, userMood } = req.body
	return res.status(201).json({
		code: 201,
		data: {
			userMood,
			userName,
		},
	})
}

module.exports = signup
