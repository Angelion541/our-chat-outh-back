const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())



app.post('/getUserInfo', (req, res) => {
	const { username } = req.body

	res.json(username)
})

const port = 8888
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
