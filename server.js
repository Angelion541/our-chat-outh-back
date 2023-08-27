const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'


app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.post('/getUserInfo', (req, res) => {
	const { userName } = req.body

	res.json(userName)
})
app.get('/getUserInfo', (req, res) => {
	const { userName } = req.body

	res.json(userName)
})

const port = 8888
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
