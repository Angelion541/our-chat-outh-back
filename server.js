const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const users = [
	{ id: 1, username: 'john_doe', access: true },
	// Додайте інші користувачі тут
]

app.post('/getUserInfo', (req, res) => {
	const { username } = req.body

	const user = users.find(u => u.username === username)
	if (user) {
		const userInfo = {
			id: user.id,
			username: user.username,
			access: true,
		}
		res.json(userInfo)
	} else {
		res.status(404).json({ error: 'User not found' })
	}
})

const port = 3000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
