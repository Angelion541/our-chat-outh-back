// const { User } = require("../../schemas/user");
// const bcrypt = require("bcrypt");

async function signup(req, res) {
	const { username } = req.body
	// const emailToLoWerCase = email.toLowerCase();

	// const userCheck = await User.findOne({ email: emailToLoWerCase });
	// if (userCheck) {
	//   res.status(409).json({ message: "Email in use" });
	//   return;
	// }

	// const salt = await bcrypt.genSalt(10);
	// const hashedPassword = await bcrypt.hash(password, salt);

	// const newUser = await User.create({
	//   email: emailToLoWerCase,
	//   password: hashedPassword,
	//   phone,
	//   birthday,
	//   name,
	//   avatarUrl,
	//   city,
	// });
	// const { userName } = req.body;
	// const  userName  = 'ROMA';
	return res.status(201).json({
		code: 201,
		data: {
			isAuthenticated: true,
			username,
		},
	})
}

module.exports = signup
